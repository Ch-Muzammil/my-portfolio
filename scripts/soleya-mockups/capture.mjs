import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../../public/images/projects/soleya");

const shots = [
  { file: "dashboard.html", out: "dashboard.jpg", alt: "Freelancer dashboard" },
  { file: "bookings.html", out: "bookings.jpg", alt: "Incoming bookings" },
  { file: "admin.html", out: "admin.jpg", alt: "Admin console" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});

for (const shot of shots) {
  const url = `file://${path.join(__dirname, shot.file).replace(/\\/g, "/")}`;
  await page.goto(url, { waitUntil: "networkidle" });
  // Wait for Google Fonts
  await page.waitForTimeout(1200);
  const outPath = path.join(outDir, shot.out);
  await page.screenshot({
    path: outPath,
    type: "jpeg",
    quality: 92,
    clip: { x: 0, y: 0, width: 1920, height: 1080 },
  });
  console.log(`Wrote ${outPath}`);
}

await browser.close();
