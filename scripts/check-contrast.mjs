import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const root = css.match(/:root\s*\{([^}]+)\}/);
if (!root?.[1]) {
  console.error("No :root block found");
  process.exit(1);
}

const tokens = {};
for (const match of root[1].matchAll(/--([\w-]+):\s*([^;]+);/g)) {
  const name = match[1];
  const value = match[2]?.trim();
  if (name && value) tokens[name] = value;
}

function channel(value) {
  const parsed = Number.parseInt(value, 10) / 255;
  return parsed <= 0.04045 ? parsed / 12.92 : ((parsed + 0.055) / 1.055) ** 2.4;
}

function luminance(rgb) {
  return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
}

function parseColor(value) {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex?.[1]) {
    return [
      Number.parseInt(hex[1].slice(0, 2), 16),
      Number.parseInt(hex[1].slice(2, 4), 16),
      Number.parseInt(hex[1].slice(4, 6), 16),
    ];
  }
  const rgb = value.match(/^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)/i);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return null;
}

function contrast(foreground, background) {
  const lighter = Math.max(foreground, background);
  const darker = Math.min(foreground, background);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  ["foreground", "background"],
  ["muted", "background"],
  ["subtle", "background"],
  ["primary", "background"],
  ["primary-foreground", "primary"],
  ["primary-foreground", "primary-hover"],
  ["foreground", "secondary"],
  ["muted", "secondary"],
  ["subtle", "secondary"],
  ["foreground", "surface"],
  ["muted", "surface"],
  ["subtle", "surface"],
  ["primary", "secondary"],
];

console.log("Colour tokens");
for (const [name, value] of Object.entries(tokens)) {
  if (
    parseColor(value) ||
    value.startsWith("rgb(") ||
    value.startsWith("oklch(") ||
    value.startsWith("#")
  ) {
    console.log(`  --${name}: ${value}`);
  }
}

console.log("\nText contrast (4.5:1 required for body text)");
for (const [front, back] of pairs) {
  const frontValue = tokens[front];
  const backValue = tokens[back];
  const frontRgb = frontValue ? parseColor(frontValue) : null;
  const backRgb = backValue ? parseColor(backValue) : null;
  if (!frontRgb || !backRgb) {
    console.log(`  ${front} on ${back}: skipped (unparsed)`);
    continue;
  }
  const ratio = contrast(luminance(frontRgb), luminance(backRgb));
  const pass = ratio >= 4.5 ? "pass" : "fail";
  console.log(`  ${front} on ${back}: ${ratio.toFixed(2)}:1 ${pass}`);
}
