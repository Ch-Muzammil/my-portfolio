import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "80px",
        background: "#f3f2ee",
        color: "#0d0d12",
      }}
    >
      <div style={{ fontSize: 28, color: "#3346ff" }}>{site.role}</div>
      <div style={{ marginTop: 16, fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>
        {site.name}
      </div>
      <div style={{ marginTop: 28, width: 220, height: 14, background: "#dfe3ff" }} />
    </div>,
    size,
  );
}
