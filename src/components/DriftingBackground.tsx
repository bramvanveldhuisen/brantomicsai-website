import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface FloatingShapeProps {
  /** Naam van de @keyframes-animatie (elke vorm heeft zijn eigen unieke pad). */
  floatAnim: string;
  /** Duur van de fladder-lus in seconden — licht per vorm variëren voor een organisch geheel. */
  duration: number;
  delay: number;
  /** Extra, langzamere verschuiving op basis van scrollpositie (parallax-diepte). */
  parallax: number;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Eén drijvende vorm: een permanente, cirkelvormige "fladder"-animatie
 * (CSS keyframes, altijd actief) + een scroll-parallax-laag erbovenop.
 * De twee transforms staan op geneste elementen omdat een enkel element
 * niet twee losse `transform`-bronnen (animatie + inline style) kan mixen
 * zonder dat de een de ander overschrijft.
 */
function FloatingShape({
  floatAnim,
  duration,
  delay,
  parallax,
  scale = 1,
  className = "",
  style,
  children,
}: FloatingShapeProps) {
  const [offset, setOffset] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className={`absolute pointer-events-none will-change-transform ${className}`}
      style={{ ...style, transform: `translateY(${offset * parallax}px)` }}
    >
      <div
        style={{
          animation: `${floatAnim} ${duration}s ease-in-out ${delay}s infinite`,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Envelop-icoon voor Email Responder — dunne lijnstijl, subtiele vulling. */
function Envelope({ tone = "navy" }: { tone?: "navy" | "blue" }) {
  const stroke = tone === "navy" ? "#0F2D5E" : "#1A4FA0";
  return (
    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="68" height="48" rx="5" fill="white" fillOpacity="0.7" stroke={stroke} strokeWidth="1.5" />
      <path d="M4 7l32 22L68 7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Bonnetje-icoon — gekartelde rand, korte lijnen als tekstregels. */
function Receipt({ tone = "navy" }: { tone?: "navy" | "blue" }) {
  const stroke = tone === "navy" ? "#0F2D5E" : "#1A4FA0";
  return (
    <svg width="58" height="78" viewBox="0 0 58 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 2h50v66l-5.5-4.5-5.5 4.5-5.5-4.5-5.5 4.5-5.5-4.5-5.5 4.5-5.5-4.5-5.5 4.5V2z"
        fill="white"
        fillOpacity="0.72"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="13" y1="17" x2="45" y2="17" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="13" y1="28" x2="38" y2="28" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="13" y1="39" x2="42" y2="39" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="13" y1="50" x2="31" y2="50" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55" />
    </svg>
  );
}

/** Kleine losse @-icoon als derde motief-variatie, extra textuur zonder nieuw thema. */
function AtSign({ tone = "blue" }: { tone?: "navy" | "blue" }) {
  const stroke = tone === "navy" ? "#0F2D5E" : "#1A4FA0";
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10.5" stroke={stroke} strokeWidth="1.4" fill="white" fillOpacity="0.65" />
      <path
        d="M15.5 12a3.5 3.5 0 11-1.026-2.474M15.5 12v1.5a1.5 1.5 0 003 0V12a6.5 6.5 0 10-2.5 5.126"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Elke vorm heeft een eigen fladder-pad: 6 varianten (float-a t/m float-f),
 * gedefinieerd in index.css. Onregelmatige, niet-symmetrische bewegingen —
 * net als een blad of stuk papier dat in een lichte tocht drijft, niet een
 * mechanisch op-en-neer.
 */
export function DriftingBackground() {
  return (
    <>
      {/* Laag 1 — vaste, gelaagde kleurvelden (liquid-glass-diepte) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(900px 600px at 12% -8%, rgba(26,79,160,0.14), transparent 60%)",
            "radial-gradient(800px 560px at 88% 4%, rgba(74,159,255,0.12), transparent 60%)",
            "radial-gradient(900px 700px at 78% 92%, rgba(16,185,129,0.07), transparent 60%)",
            "radial-gradient(700px 520px at 6% 92%, rgba(26,79,160,0.08), transparent 60%)",
            "linear-gradient(180deg, #F7F9FC 0%, #EFF3F9 100%)",
          ].join(", "),
        }}
      />

      {/* Laag 2 — zacht ademend dot-grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.35] animate-grid-breathe"
        style={{
          backgroundImage: "radial-gradient(rgba(15,45,94,0.16) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 0%, black 0%, transparent 85%)",
        }}
      />

      {/* Laag 3 — continu fladderende enveloppen/bonnetjes/@-iconen + scroll-parallax */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <FloatingShape floatAnim="float-a" duration={16} delay={0} parallax={0.035} scale={1.1} className="opacity-[0.22]" style={{ top: "4%", left: "5%" }}>
          <Envelope tone="navy" />
        </FloatingShape>
        <FloatingShape floatAnim="float-b" duration={19} delay={1.2} parallax={-0.05} scale={0.9} className="opacity-[0.18]" style={{ top: "9%", right: "7%" }}>
          <Receipt tone="blue" />
        </FloatingShape>
        <FloatingShape floatAnim="float-c" duration={13} delay={0.6} parallax={0.02} scale={0.7} className="opacity-[0.2]" style={{ top: "20%", left: "23%" }}>
          <AtSign tone="navy" />
        </FloatingShape>
        <FloatingShape floatAnim="float-d" duration={21} delay={2.4} parallax={0.07} scale={1} className="opacity-[0.16]" style={{ top: "32%", left: "2%" }}>
          <Receipt tone="navy" />
        </FloatingShape>
        <FloatingShape floatAnim="float-e" duration={17} delay={0.9} parallax={-0.045} scale={0.85} className="opacity-[0.19]" style={{ top: "38%", right: "17%" }}>
          <Envelope tone="blue" />
        </FloatingShape>
        <FloatingShape floatAnim="float-f" duration={14} delay={3.1} parallax={0.06} scale={0.6} className="opacity-[0.17]" style={{ top: "50%", right: "4%" }}>
          <AtSign tone="blue" />
        </FloatingShape>
        <FloatingShape floatAnim="float-a" duration={18} delay={4} parallax={-0.03} scale={1.05} className="opacity-[0.18]" style={{ top: "56%", left: "7%" }}>
          <Envelope tone="navy" />
        </FloatingShape>
        <FloatingShape floatAnim="float-b" duration={15} delay={1.8} parallax={0.045} scale={0.85} className="opacity-[0.17]" style={{ top: "68%", left: "28%" }}>
          <Receipt tone="blue" />
        </FloatingShape>
        <FloatingShape floatAnim="float-c" duration={20} delay={2.9} parallax={-0.06} scale={0.95} className="opacity-[0.2]" style={{ top: "76%", right: "9%" }}>
          <Envelope tone="blue" />
        </FloatingShape>
        <FloatingShape floatAnim="float-d" duration={16.5} delay={0.3} parallax={0.055} scale={0.7} className="opacity-[0.16]" style={{ top: "86%", left: "13%" }}>
          <AtSign tone="navy" />
        </FloatingShape>
        <FloatingShape floatAnim="float-e" duration={19.5} delay={2.1} parallax={-0.04} scale={1} className="opacity-[0.19]" style={{ top: "93%", right: "21%" }}>
          <Receipt tone="navy" />
        </FloatingShape>
      </div>
    </>
  );
}
