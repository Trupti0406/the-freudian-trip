import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FDF6F0",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
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
      </div>
    ),
    size,
  );
}
