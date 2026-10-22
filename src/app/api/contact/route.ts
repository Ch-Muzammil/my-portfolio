import { NextResponse } from "next/server";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { contactEmail } from "@/lib/contact-email";
import { contactSchema } from "@/lib/contact-schema";

const WINDOW_MS = 60 * 1000;
const recent = new Map<string, number>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim();
  return ip || "unknown";
}

function remaining(key: string) {
  const last = recent.get(key);
  if (last === undefined) return 0;
  return Math.max(0, WINDOW_MS - (Date.now() - last));
}

function remember(key: string) {
  const now = Date.now();
  recent.set(key, now);
  if (recent.size < 400) return;
  for (const [entry, sentAt] of recent) {
    if (now - sentAt >= WINDOW_MS) recent.delete(entry);
  }
}

function alreadySent(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  return cookie.split(";").some((part) => part.trim().startsWith("contact_sent="));
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const fields = payload as Record<string, unknown>;
  if (typeof fields.website === "string" && fields.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse({
    name: fields.name,
    email: fields.email,
    message: fields.message,
  });
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  const ip = clientIp(request);
  const waitMs = Math.max(remaining(`ip:${ip}`), remaining(`email:${email.toLowerCase()}`));
  if (alreadySent(request) || waitMs > 0) {
    const retryAfter = Math.max(1, Math.ceil((waitMs || WINDOW_MS) / 1000));
    return NextResponse.json({ ok: false, retryAfter }, { status: 429 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const letter = contactEmail({ name, email, message });
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? `${site.fullName} <onboarding@resend.dev>`,
      to: [site.email],
      reply_to: email,
      subject: `${contact.subjectPrefix}${name}`,
      text: letter.text,
      html: letter.html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  remember(`ip:${ip}`);
  remember(`email:${email.toLowerCase()}`);
  const result = NextResponse.json({ ok: true });
  result.cookies.set("contact_sent", "1", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: WINDOW_MS / 1000,
    path: "/",
  });
  return result;
}
