"use client";

/**
 * FlowerDiagram.tsx
 * ─────────────────────────────────────────────────────────────────
 * A flower-shaped SVG with 6 leaf/teardrop petals radiating around
 * a central circle that holds a photo (or a styled placeholder).
 *
 * Usage
 * ─────────────────
 * <FlowerDiagram petals={petals} imageSrc="/images/me.jpg" />
 *
 * Props
 * ─────────────────
 * petals   – exactly 6 objects: { label: string }
 * imageSrc – optional path to your portrait photo
 */

interface Petal {
  label: string;
}

interface FlowerDiagramProps {
  petals: Petal[];
  imageSrc?: string;
}

// Six warm, inclusive colours — each petal gets one
const PETAL_COLORS = [
  "#A855A0", // mauve   (top,          0°)
  "#2BAAB8", // teal    (top-right,   60°)
  "#E06848", // terra   (bottom-right,120°)
  "#D09828", // amber   (bottom,      180°)
  "#5AB868", // sage    (bottom-left, 240°)
  "#C05888", // rose    (top-left,    300°)
];

/**
 * Split a label into at most two SVG <tspan> rows.
 */
function splitLabel(text: string): [string, string | null] {
  const words = text.split(" ");
  if (words.length <= 2) return [words.slice(0, 1).join(" "), words.slice(1).join(" ") || null];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export function FlowerDiagram({ petals, imageSrc }: FlowerDiagramProps) {
  // Petal geometry (matches the hand-crafted SVG exactly):
  //   Base at (0,0), tip at (0,-195), width control ±65
  const petalPath = "M 0 0 C -65 -68 -48 -160 0 -195 C 48 -160 65 -68 0 0 Z";
  const labelY = -105; // ~55% up the petal

  return (
    <svg
      viewBox="0 0 680 680"
      width="100%"
      className="mx-auto w-full max-w-[min(540px,92vw)]"
      aria-label="Flower diagram of therapeutic approaches"
      role="img"
    >
      <title>Therapeutic approaches flower diagram</title>

      <defs>
        <clipPath id="flower-centre-clip">
          <circle cx="340" cy="340" r="105" />
        </clipPath>
        <radialGradient id="flower-centre-grad" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E8C8E0" />
          <stop offset="100%" stopColor="#9B5FA0" />
        </radialGradient>
      </defs>

      {/* ── Petals ── */}
      {petals.slice(0, 6).map((petal, i) => {
        const angle = i * 60; // 0°, 60°, 120°, 180°, 240°, 300°
        const color = PETAL_COLORS[i];
        const [line1, line2] = splitLabel(petal.label);

        return (
          <g key={petal.label} transform={`translate(340,340) rotate(${angle})`}>
            <path d={petalPath} fill={color} opacity={0.92} />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              y={labelY}
              fill="white"
              fontSize={14}
              fontWeight={600}
              fontFamily="inherit"
              letterSpacing="0.3"
              style={{ pointerEvents: "none" }}
            >
              {line2 ? (
                <>
                  <tspan x={0} dy={-8}>
                    {line1}
                  </tspan>
                  <tspan x={0} dy={20}>
                    {line2}
                  </tspan>
                </>
              ) : (
                <tspan x={0}>{line1}</tspan>
              )}
            </text>
          </g>
        );
      })}

      {/* ── Centre: white border ring ── */}
      <circle cx={340} cy={340} r={112} fill="white" opacity={0.95} />

      {/* ── Centre: photo or placeholder ── */}
      {imageSrc ? (
        <image
          href={imageSrc}
          x={340 - 105}
          y={340 - 105}
          width={210}
          height={210}
          clipPath="url(#flower-centre-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
      ) : (
        <>
          <circle cx={340} cy={340} r={105} fill="url(#flower-centre-grad)" />
          {/* Camera icon */}
          <g
            fill="none"
            stroke="white"
            strokeWidth={2}
            opacity={0.8}
            transform="translate(340,322)"
          >
            <rect x={-28} y={-18} width={56} height={40} rx={6} />
            <circle cx={0} cy={4} r={13} />
            <circle cx={0} cy={4} r={7} fill="white" fillOpacity={0.5} stroke="none" />
            <rect
              x={-8}
              y={-22}
              width={16}
              height={6}
              rx={3}
              fill="white"
              stroke="none"
              opacity={0.7}
            />
          </g>
          <text
            x={340}
            y={380}
            textAnchor="middle"
            fontSize={11}
            fill="white"
            opacity={0.9}
            fontFamily="inherit"
            fontWeight={500}
          >
            Add your photo
          </text>
        </>
      )}
    </svg>
  );
}
