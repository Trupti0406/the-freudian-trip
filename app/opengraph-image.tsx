import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — a space to explore, understand and grow`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #FDF6F0 0%, #F6DCE6 55%, #E3D6F2 100%)",
        }}
      >
        <svg width="130" height="130" viewBox="0 0 64 64">
          <g fill="#8C5A8F">
            <path d="M32 10c4 6 4 12 0 16-4-4-4-10 0-16Z" />
            <path d="M32 54c-4-6-4-12 0-16 4 4 4 10 0 16Z" />
            <path d="M10 32c6-4 12-4 16 0-4 4-10 4-16 0Z" />
            <path d="M54 32c-6 4-12 4-16 0 4-4 10-4 16 0Z" />
            <path d="M17.5 17.5c6.8 1 11.3 4.9 12.2 9.8-4.9-.9-8.8-5.4-12.2-9.8Z" />
            <path d="M46.5 46.5c-6.8-1-11.3-4.9-12.2-9.8 4.9.9 8.8 5.4 12.2 9.8Z" />
            <path d="M46.5 17.5c-1 6.8-4.9 11.3-9.8 12.2.9-4.9 5.4-8.8 9.8-12.2Z" />
            <path d="M17.5 46.5c1-6.8 4.9-11.3 9.8-12.2-.9 4.9-5.4 8.8-9.8 12.2Z" />
            <circle cx="32" cy="32" r="5.5" />
          </g>
        </svg>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontFamily: "serif",
            color: "#3A2E3D",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#6B5A6E" }}>
          A space to explore, understand and grow
        </div>
      </div>
    ),
    size,
  );
}
