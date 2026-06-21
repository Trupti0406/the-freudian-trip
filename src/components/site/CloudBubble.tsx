// Server Component — no interactivity, no "use client" needed
import { Cloud } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

interface CloudBubbleProps {
  label: string;
  index?: number;
  delay?: number;
}

export function CloudBubble({ label, index = 0, delay = 0 }: CloudBubbleProps) {
  const rotations = [-6, 4, -3, 5, -2];
  const verticalOffsets = [0, 24, 10, 18, 6];

  return (
    <Reveal delay={delay}>
      <div
        className="relative"
        style={{
          marginTop: verticalOffsets[index % verticalOffsets.length],
          transform: `rotate(${rotations[index % rotations.length]}deg)`,
        }}
      >
        <div className="relative animate-cloudFloat">
          <Cloud
            strokeWidth={1.5}
            className="h-[90px] w-[220px] text-[#c9b97a] fill-[#faf4e1] drop-shadow-[0_4px_10px_rgba(139,111,58,0.08)]"
          />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <span
              className="text-sm leading-snug font-medium text-[#5c4a1e]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
