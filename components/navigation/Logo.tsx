import Image from "next/image";
import logoImg from "@/components/ui/logo.png";
import logoLightImg from "@/components/ui/logo-light.png";

/**
 * Official RPC cube mark. `light` is the reversed cut for a dark bar: the cube in cream,
 * with the letters and the joints left open so the bar itself shows through them. It needs
 * no panel behind it, and nothing of it is the blue that would sink into a navy ground.
 */
export function LogoMark({ className = "", title = "RPC Constructions", light = false }: { className?: string; title?: string; light?: boolean }) {
  return (
    <Image
      src={light ? logoLightImg : logoImg}
      alt={title}
      width={192}
      height={192}
      className={`object-contain ${className}`}
      priority
    />
  );
}

const SIZES = {
  xs: { tile: "h-[39px] w-[39px] rounded-[9px]", mark: "h-[31px] w-[31px]", h: 26, gap: "gap-2" },
  sm: { tile: "h-[47px] w-[47px] rounded-[10px]", mark: "h-[39px] w-[39px]", h: 32, gap: "gap-2.5" },
  md: { tile: "h-[51px] w-[51px] rounded-[11px]", mark: "h-[43px] w-[43px]", h: 36, gap: "gap-3" },
  lg: { tile: "h-[59px] w-[59px] rounded-[12px]", mark: "h-[51px] w-[51px]", h: 40, gap: "gap-3.5" },
  xl: { tile: "h-[63px] w-[63px] rounded-[13px]", mark: "h-[55px] w-[55px]", h: 44, gap: "gap-3.5" },
  xxl: { tile: "h-[71px] w-[71px] rounded-[14px]", mark: "h-[63px] w-[63px]", h: 50, gap: "gap-4" },
  /* the wider screens carry the mark larger: the cube grows a little faster than the name,
     so the logo reads as the logo rather than as a line of type with a picture beside it */
  mdx: { tile: "h-[60px] w-[60px] rounded-[13px]", mark: "h-[52px] w-[52px]", h: 36, gap: "gap-3" },
  lgx: { tile: "h-[68px] w-[68px] rounded-[14px]", mark: "h-[59px] w-[59px]", h: 40, gap: "gap-3.5" },
  xlx: { tile: "h-[78px] w-[78px] rounded-[16px]", mark: "h-[68px] w-[68px]", h: 46, gap: "gap-4" },
  xxlx: { tile: "h-[88px] w-[88px] rounded-[18px]", mark: "h-[77px] w-[77px]", h: 52, gap: "gap-4" },
} as const;

/**
 * The logo lockup: the cube mark and the name, drawn as one graphic (the name
 * is part of the logo, not running text, so it keeps its own proportions at
 * every size). On the dark blue of the nav bar and footer the cube sits on a
 * light tile, so its blue faces read; `tile={false}` leaves it bare. Wrap it in
 * a link or give the page its own text for the name.
 */
export function Wordmark({ className = "", size = "md", tile = false, iso = false, name = true, light = false }: { className?: string; size?: keyof typeof SIZES; tile?: boolean; iso?: boolean; name?: boolean; light?: boolean }) {
  const s = SIZES[size];
  // The mark stands on the page itself. Its own whites are solid — the letters and the three
  // joints are painted, not punched through — so the blue holds against a dark bar without a
  // panel under it. `tile` puts one back for a ground that would swallow the blue.
  const panel = tile && !light;
  // with the certification line under the name, the drawing is taller by that line
  const vh = iso ? 52 : 40;
  const h = Math.round((s.h * vh) / 40);
  const display = { fontFamily: "var(--font-logo), 'Segoe UI', system-ui, sans-serif" };
  const sans = { fontFamily: "var(--font-inter-tight), ui-sans-serif, system-ui, sans-serif" };
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {panel ? (
        <span className={`grid shrink-0 place-items-center bg-[#f5f0e6] ${s.tile}`}>
          <LogoMark className={s.mark} />
        </span>
      ) : (
        /* with no panel the mark takes the room the panel had, so the lockup keeps its width */
        <LogoMark light={light} className={`${s.tile} shrink-0`} />
      )}
      {name ? (
      <svg viewBox={`0 0 150 ${vh}`} height={h} width={Math.round((s.h * 150) / 40)} aria-hidden="true" focusable="false" className="block shrink-0 overflow-visible">
        <text x="0" y="19" fill="currentColor" style={{ ...display, fontWeight: 700, fontSize: 22, letterSpacing: 2.2 }}>
          RPC
        </text>
        <text x="0.5" y="35.5" fill="currentColor" fillOpacity={0.78} style={{ ...sans, fontWeight: 600, fontSize: 10.6, letterSpacing: 3.1 }}>
          CONSTRUCTIONS
        </text>
        {iso ? (
          <text x="0.5" y="50.5" fill="currentColor" fillOpacity={0.72} style={{ ...sans, fontWeight: 600, fontSize: 9.2, letterSpacing: 1.9 }}>
            ISO 9001:2015
          </text>
        ) : null}
      </svg>
      ) : null}
    </span>
  );
}
