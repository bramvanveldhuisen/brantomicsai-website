import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

const rustig = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const tussen = (waarde: number) => Math.min(1, Math.max(0, waarde));

/** Roept `meet` aan bij scrollen en schalen, hooguit één keer per beeld. */
function volgScroll(meet: () => void) {
  let wacht = 0;
  const vraag = () => {
    if (!wacht) {
      wacht = requestAnimationFrame(() => {
        wacht = 0;
        meet();
      });
    }
  };
  meet();
  window.addEventListener("scroll", vraag, { passive: true });
  window.addEventListener("resize", vraag);
  return () => {
    cancelAnimationFrame(wacht);
    window.removeEventListener("scroll", vraag);
    window.removeEventListener("resize", vraag);
  };
}

/**
 * Laat inhoud rustig binnenkomen zodra die in beeld scrolt.
 * `data-onthul` werkt op het element zelf, `data-onthul-kinderen` op elk direct kind.
 * Zonder JavaScript of met "minder beweging" staat alles gewoon meteen in beeld.
 */
export function Onthullen() {
  useLayoutEffect(() => {
    if (rustig() || !("IntersectionObserver" in window)) return;

    const doelen = new Set<HTMLElement>(document.querySelectorAll<HTMLElement>("[data-onthul]"));
    document.querySelectorAll<HTMLElement>("[data-onthul-kinderen]").forEach((ouder) => {
      Array.from(ouder.children).forEach((kind) => doelen.add(kind as HTMLElement));
    });

    document.documentElement.classList.add("js");
    const timers: number[] = [];
    const toon = (el: HTMLElement, volgorde: number) => {
      const vertraging = Number(el.dataset.vertraging ?? 0) + volgorde * 55;
      el.style.setProperty("--vertraging", `${vertraging}ms`);
      el.classList.add("onthult");
      el.classList.remove("wacht");
      timers.push(window.setTimeout(() => el.classList.remove("onthult"), vertraging + 700));
    };

    const kijker = new IntersectionObserver(
      (meldingen) => {
        // Wat tegelijk in beeld komt, komt kort na elkaar binnen.
        meldingen
          .filter((m) => m.isIntersecting)
          .forEach((m, volgorde) => {
            kijker.unobserve(m.target);
            toon(m.target as HTMLElement, volgorde);
          });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    // Wat al in beeld staat bij het laden, wacht niet op de kijker.
    const grens = window.innerHeight * 0.92;
    let inBeeld = 0;
    doelen.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      el.classList.add("wacht");
      if (top < grens && bottom > 0) {
        const volgorde = inBeeld++;
        timers.push(window.setTimeout(() => toon(el, volgorde), 60));
      } else {
        kijker.observe(el);
      }
    });

    return () => {
      kijker.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      doelen.forEach((el) => el.classList.remove("wacht", "onthult"));
    };
  }, []);

  return null;
}

/** Een foto die meegroeit met het scrollen, tot hij de volle breedte heeft. */
export function GroeiFoto({ src, alt, positie = "", className = "" }: { src: string; alt: string; positie?: string; className?: string }) {
  const vak = useRef<HTMLDivElement>(null);
  const beeld = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (rustig() || !vak.current || !beeld.current) return;
    const el = vak.current;
    const foto = beeld.current;
    return volgScroll(() => {
      const { top, height } = el.getBoundingClientRect();
      const hoogte = window.innerHeight;
      const voortgang = tussen((hoogte - top) / (hoogte * 0.45 + height * 0.55));
      const zacht = 1 - (1 - voortgang) ** 3;
      foto.style.transform = `scale(${0.6 + 0.4 * zacht})`;
    });
  }, []);

  return (
    <div ref={vak} className={className}>
      <img
        ref={beeld}
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        loading="lazy"
        className={`groei-foto block w-full aspect-[3/2] lg:aspect-[2.4/1] rounded-xl object-cover ${positie}`}
      />
    </div>
  );
}

/** De route: een rode lijn loopt mee met het scrollen en kleurt elke stap die je bereikt. */
export function RouteVoortgang({ children, className = "" }: { children: ReactNode; className?: string }) {
  const vak = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rustig() || !vak.current) return;
    const el = vak.current;
    const stappen = Array.from(el.querySelectorAll("li"));
    el.dataset.routeActief = "";
    const stop = volgScroll(() => {
      const lijn = window.innerHeight * 0.6;
      const { top, height } = el.getBoundingClientRect();
      el.style.setProperty("--voortgang", String(tussen((lijn - top) / height)));
      stappen.forEach((stap) => stap.classList.toggle("is-bereikt", stap.getBoundingClientRect().top + 16 < lijn));
    });
    return () => {
      stop();
      delete el.dataset.routeActief;
    };
  }, []);

  return (
    <div ref={vak} className={`relative ${className}`}>
      <span className="route-vul" aria-hidden="true" />
      {children}
    </div>
  );
}

/** Dunne scheidingslijn waar steeds een rood lichtje overheen schuift. */
export function Veeg() {
  return <div className="veeg" aria-hidden="true" />;
}
