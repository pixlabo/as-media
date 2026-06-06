import { ImageResponse } from "next/og";
import { ogImageAlt } from "@/lib/site";

export const alt = ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121212",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: brand + tag */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", fontSize: 40, fontWeight: 700 }}>
            <span style={{ color: "#e4002b" }}>AS MEDIA</span>
            <span style={{ color: "#ffffff" }}>SERVICES</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#9a9a9a", letterSpacing: 2 }}>
            EST. 2013 · DELHI
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 90, height: 12, background: "#e4002b", marginBottom: 28 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.02,
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>We Print Brands</div>
            <div style={{ display: "flex" }}>
              <span>That People&nbsp;</span>
              <span style={{ color: "#e4002b" }}>Remember.</span>
            </div>
          </div>
        </div>

        {/* Bottom row: services */}
        <div style={{ display: "flex", gap: "16px", fontSize: 24, color: "#cfcfcf" }}>
          <span>Large-Format Printing</span>
          <span style={{ color: "#e4002b" }}>/</span>
          <span>Signage</span>
          <span style={{ color: "#e4002b" }}>/</span>
          <span>Fabrication</span>
          <span style={{ color: "#e4002b" }}>/</span>
          <span>Branding</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
