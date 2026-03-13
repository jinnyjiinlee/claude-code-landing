import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "DAYFOCUS LAB | 클로드코드 강의 - 스터디카페 사장님을 위한 AI 자동화";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #0B0F1A 0%, #151B2E 50%, #1A1040 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: 100,
            padding: "8px 24px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#93C5FD", fontSize: 20 }}>
            비개발자를 위한 AI 자동화 강의
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            스터디카페 사장님,
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              background: "linear-gradient(90deg, #8B5CF6, #60A5FA)",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            클로드코드로
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            업무를 자동화하세요
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            marginTop: 24,
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          4시간 오프라인 강의 | 3/21(토) 성수 | 선착순 10명
        </span>

        {/* Bottom brand */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 2,
            }}
          >
            DAYFOCUS LAB
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
