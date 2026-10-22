import { site } from "@/content/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function contactEmail(input: { name: string; email: string; message: string }) {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const message = escapeHtml(input.message).replaceAll("\n", "<br />");
  const text = `New message from ${input.name}\n${input.email}\n\n${input.message}\n\nReply to this email and it goes to ${input.name}.`;

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f3f2ee;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f2ee;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;">
            <tr>
              <td style="padding:32px 32px 8px;font-family:ui-sans-serif,system-ui,sans-serif;">
                <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#3346ff;">${escapeHtml(site.fullName)}</p>
                <h1 style="margin:0;font-size:28px;line-height:1.15;letter-spacing:-0.04em;font-weight:650;color:#0d0d12;">New message from ${name}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;font-family:ui-sans-serif,system-ui,sans-serif;font-size:15px;line-height:1.6;color:#52525c;">
                Someone wrote from your portfolio. Reply to this email and it goes straight to them.
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f2ee;border-radius:14px;">
                  <tr>
                    <td style="padding:16px 18px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.5;color:#0d0d12;">
                      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#85858f;">Name</p>
                      <p style="margin:0 0 14px;">${name}</p>
                      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#85858f;">Email</p>
                      <p style="margin:0;"><a href="mailto:${email}" style="color:#3346ff;text-decoration:none;">${email}</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;font-family:ui-sans-serif,system-ui,sans-serif;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#85858f;">Message</p>
                <p style="margin:0;font-size:16px;line-height:1.65;color:#0d0d12;">${message}</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.5;color:#85858f;">${escapeHtml(site.fullName)} · ${escapeHtml(site.role)}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { text, html };
}
