import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #1C1815 0%, #120F0C 55%, #0B0907 100%)",
          color: "#F4EAD1",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D4AF37",
          }}
        >
          <span
            style={{
              display: "block",
              width: 64,
              height: 1,
              background: "#D4AF37",
            }}
          />
          <span>{siteConfig.shortName}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "#F4EAD1",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Wealth,</span>
            <span>
              <span style={{ color: "#E8C864" }}>Refined</span> for Generations.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(244,234,209,0.72)",
              maxWidth: 860,
            }}
          >
            A private wealth practice for families and professionals who
            measure success in decades.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(212,175,55,0.25)",
            paddingTop: 28,
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(244,234,209,0.6)",
          }}
        >
          <span>Mumbai · Pune · Bengaluru</span>
          <span>aparigrahaenterprises.in</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
