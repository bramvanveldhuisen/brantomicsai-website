import { useEffect, useRef, useState } from "react";

/**
 * Bewegend raster voor de opening van de homepage: een dun lijnenraster waarover
 * racegroene en een paar vermiljoen pulsen schieten, als signalen die door een systeem lopen.
 * Alleen transform en opacity bewegen. Er is een pauzeknop, de animatie stopt als
 * de opening uit beeld is, en bij "minder beweging" staat alles stil.
 */
const MAAT = 600;
const STAP = 100;
const LIJNEN = Array.from({ length: MAAT / STAP + 1 }, (_, i) => i * STAP);

type Puls = { richting: "x" | "y"; lijn: number; duur: number; vertraging: number; rood?: boolean };

const PULSEN: Puls[] = [
  { richting: "x", lijn: 100, duur: 9, vertraging: 0 },
  { richting: "y", lijn: 400, duur: 11, vertraging: 1.5 },
  { richting: "x", lijn: 300, duur: 10, vertraging: 3.2, rood: true },
  { richting: "y", lijn: 200, duur: 12, vertraging: 5 },
  { richting: "x", lijn: 500, duur: 9.5, vertraging: 6.4 },
  { richting: "y", lijn: 500, duur: 10.5, vertraging: 8.1, rood: true },
];

/** De knooppunten die vast oplichten: de "plekken waar het werk gebeurt". */
const KNOPEN: { x: number; y: number; rood?: boolean }[] = [
  { x: 100, y: 100 },
  { x: 400, y: 300, rood: true },
  { x: 200, y: 500 },
  { x: 500, y: 200 },
];

export function HeroRaster() {
  const [gepauzeerd, setGepauzeerd] = useState(false);
  const [inBeeld, setInBeeld] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setInBeeld(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stil = gepauzeerd || !inBeeld;

  return (
    <div ref={ref} className={`raster relative aspect-square w-full ${stil ? "is-stil" : ""}`}>
      <svg viewBox={`-10 -10 ${MAAT + 20} ${MAAT + 20}`} className="size-full overflow-visible" aria-hidden="true">
        <defs>
          <filter id="puls-gloed" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <linearGradient id="staart-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--color-zilver)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-zwart)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="staart-y" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-zilver)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-zwart)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="staart-x-rood" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--color-vermiljoen)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-vermiljoen)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="staart-y-rood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-vermiljoen)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-vermiljoen)" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="raster-vervaag" cx="50%" cy="50%" r="55%">
            <stop offset="55%" stopColor="var(--color-white)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-white)" stopOpacity="0" />
          </radialGradient>
          <mask id="raster-masker">
            <rect x="-10" y="-10" width={MAAT + 20} height={MAAT + 20} fill="url(#raster-vervaag)" />
          </mask>
        </defs>

        <g mask="url(#raster-masker)">
          {/* het raster */}
          <g style={{ stroke: "var(--color-lijn)" }} strokeWidth="1">
            {LIJNEN.map((p) => (
              <g key={p}>
                <line x1={p} y1={0} x2={p} y2={MAAT} />
                <line x1={0} y1={p} x2={MAAT} y2={p} />
              </g>
            ))}
          </g>
          {/* kruispunten */}
          <g style={{ fill: "var(--color-zilver)" }}>
            {LIJNEN.flatMap((x) => LIJNEN.map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />))}
          </g>

          {/* de pulsen */}
          {PULSEN.map((p, i) => {
            const horizontaal = p.richting === "x";
            const rechthoek = horizontaal
              ? { x: 0, y: p.lijn - 1, width: 90, height: 2 }
              : { x: p.lijn - 1, y: 0, width: 2, height: 90 };
            const kop = horizontaal ? { cx: 90, cy: p.lijn } : { cx: p.lijn, cy: 90 };
            const staart = `url(#staart-${horizontaal ? "x" : "y"}${p.rood ? "-rood" : ""})`;
            const gloed = p.rood ? "var(--color-vermiljoen)" : "var(--color-zilver)";
            const kern = p.rood ? "var(--color-vermiljoen)" : "var(--color-zwart)";
            return (
              <g
                key={i}
                className={horizontaal ? "puls-x" : "puls-y"}
                style={{ animationDuration: `${p.duur}s`, animationDelay: `${p.vertraging}s` }}
              >
                <rect {...rechthoek} fill={staart} filter="url(#puls-gloed)" opacity="0.5" />
                <rect {...rechthoek} fill={staart} />
                <circle {...kop} r="6" style={{ fill: gloed }} filter="url(#puls-gloed)" opacity={p.rood ? 0.6 : 1} />
                <circle {...kop} r="2.6" style={{ fill: kern }} />
              </g>
            );
          })}

          {/* vaste knooppunten */}
          {KNOPEN.map(({ x, y, rood }, i) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="9" fill="none" strokeWidth="1" style={{ stroke: rood ? "var(--color-vermiljoen)" : "var(--color-zilver)" }} />
              <circle
                cx={x}
                cy={y}
                r="9"
                fill="none"
                strokeWidth="1"
                className="knoop-ring"
                style={{ stroke: rood ? "var(--color-vermiljoen)" : "var(--color-zilver-donker)", animationDelay: `${i * 1.1}s` }}
              />
              <circle cx={x} cy={y} r="3.5" style={{ fill: rood ? "var(--color-vermiljoen)" : "var(--color-zwart)" }} />
            </g>
          ))}
        </g>
      </svg>

      <button
        type="button"
        onClick={() => setGepauzeerd((v) => !v)}
        aria-pressed={gepauzeerd}
        className="raster-knop absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-full border border-lijn bg-bot text-grijs transition-colors duration-200 hover:text-zwart hover:border-zilver-donker active:translate-y-px"
      >
        <span className="sr-only">{gepauzeerd ? "Animatie afspelen" : "Animatie pauzeren"}</span>
        {gepauzeerd ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 4.5v15l12-7.5z" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
