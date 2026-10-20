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
        background: "#0b0d0c",
        color: "#f4f6f5",
      }}
    >
      <div style={{ fontSize: 28, color: "#8fe8b8" }}>{site.role}</div>
      <div style={{ marginTop: 16, fontSize: 72 }}>{site.name}</div>
    </div>,
    size,
  );
}
