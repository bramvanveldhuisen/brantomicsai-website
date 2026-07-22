import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { DriftingBackground } from "./DriftingBackground";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <DriftingBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-14 text-center">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue mb-4">{eyebrow}</span>
      <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-[1.12] tracking-tight text-navy text-balance">
        {title}
      </h1>
      <p className="mt-5 text-lg text-muted leading-relaxed text-balance">{subtitle}</p>
    </div>
  );
}
