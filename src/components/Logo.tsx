const SIZES = {
  nav: { width: 168, height: 48 },
  hero: { width: 260, height: 74 },
  footer: { width: 210, height: 60 },
} as const;

export function Logo({ size = "hero" }: { size?: keyof typeof SIZES }) {
  const { width, height } = SIZES[size];
  return (
    <svg width={width} height={height} viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(18, 12)">
        <path d="M40 4 L72 16 L72 52 Q72 76 40 88 Q8 76 8 52 L8 16 Z" fill="#0F2D5E" />
        <path d="M40 12 L66 22 L66 52 Q66 72 40 82 Q14 72 14 52 L14 22 Z" fill="#1A4FA0" />
        <text x="28" y="58" fontFamily="Inter, Arial, sans-serif" fontWeight="900" fontSize="36" fill="#FFFFFF">
          B
        </text>
      </g>
      <line x1="112" y1="20" x2="112" y2="100" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="126" y="54" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="30" fill="#0F2D5E" letterSpacing="1">
        Brantomics
      </text>
      <text
        x="126"
        y="78"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="400"
        fontSize="15"
        fill="#1A4FA0"
        letterSpacing="4"
      >
        ARTIFICIAL INTELLIGENCE
      </text>
    </svg>
  );
}
