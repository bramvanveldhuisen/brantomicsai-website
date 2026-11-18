import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { DemoKeuze } from "../components/DemoKeuze";
import { Punt, knopPrimair, knopPrimairDonker, knopSecundair, knopSecundairDonker, tekstLink } from "../components/ui";

/**
 * Demo van de prijsindicatie. Er draait hier geen echte AI en er wordt niets verstuurd:
 * foto's blijven in de browser, het volume en de Kadastergegevens zijn nagebootst.
 * Alleen de controle op te donkere foto's en de berekening uit de tabel zijn echt.
 */

type Gegevens = { naam: string; email: string; telefoon: string; postcode: string; huisnummer: string };

const SITUATIES = [
  { id: "heel", naam: "Hele woning", factor: 1 },
  { id: "deel", naam: "Deel van de woning", factor: 0.5 },
  { id: "kelder", naam: "Kelder of zolder", factor: 0.3 },
  { id: "spoed", naam: "Spoed", factor: 1 },
];
const WONINGEN = [
  { id: "app", naam: "Appartement", m3: 24 },
  { id: "rij", naam: "Rijtjeswoning", m3: 36 },
  { id: "gezin", naam: "Eengezinswoning", m3: 44 },
  { id: "vrij", naam: "Vrijstaand", m3: 58 },
  { id: "senior", naam: "Seniorenkamer", m3: 10 },
];
const GROOTTES = [
  { id: "klein", naam: "Klein", uitleg: "1 tot 2 kamers", factor: 0.7 },
  { id: "midden", naam: "Gemiddeld", uitleg: "3 kamers", factor: 1 },
  { id: "groot", naam: "Groot", uitleg: "4 of meer kamers", factor: 1.35 },
  { id: "weet", naam: "Weet ik niet", uitleg: "Een schatting is goed", factor: 1.1 },
];
const KAMERS = ["Woonkamer", "Slaapkamer", "Keuken", "Zolder of berging"];
/** Voorbeeldtarieven van een ontruimer. */
const tarieven = { perM3: 75, minimum: 450, spoed: 15, afronden: 50 };
const LEEG: Gegevens = { naam: "", email: "", telefoon: "", postcode: "", huisnummer: "" };

const veld =
  "mt-2 block w-full min-h-12 rounded-lg border border-rand bg-white px-4 text-base font-normal text-zwart placeholder:text-grijs " +
  "transition-[border-color] duration-200 hover:border-zwart";
const euro = (n: number) => `€ ${Math.round(n).toLocaleString("nl-NL")}`;
const naamVan = (lijst: { id: string; naam: string }[], id: string) => lijst.find((x) => x.id === id)?.naam ?? "";

/** Gemiddelde helderheid van een foto (0 tot 255), gemeten in de browser. */
function helderheid(url: string) {
  return new Promise<number>((klaar) => {
    const beeld = new Image();
    beeld.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (!ctx) return klaar(255);
      ctx.drawImage(beeld, 0, 0, 32, 32);
      const { data } = ctx.getImageData(0, 0, 32, 32);
      let som = 0;
      for (let i = 0; i < data.length; i += 4) som += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      klaar(som / (data.length / 4));
    };
    beeld.onerror = () => klaar(255);
    beeld.src = url;
  });
}

function Keuzes({ opties, gekozen, kies }: { opties: { id: string; naam: string; uitleg?: string }[]; gekozen: string; kies: (id: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {opties.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={gekozen === o.id}
          onClick={() => kies(o.id)}
          className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-rand bg-white px-3 py-4 text-center font-semibold text-zwart transition-colors duration-200 hover:border-zwart active:translate-y-px aria-pressed:border-zwart aria-pressed:bg-zwart aria-pressed:text-bot"
        >
          {o.naam}
          {o.uitleg && <span className="mt-1 text-sm font-normal opacity-80">{o.uitleg}</span>}
        </button>
      ))}
    </div>
  );
}

export function DemoPrijsindicatie() {
  const [stap, setStap] = useState(1);
  const [woningScherm, setWoningScherm] = useState<"soort" | "grootte">("soort");
  const [situatie, setSituatie] = useState("");
  const [woning, setWoning] = useState("");
  const [grootte, setGrootte] = useState("");
  const [fotos, setFotos] = useState<Record<string, string[]>>({});
  const [voorbeeld, setVoorbeeld] = useState<Record<string, boolean>>({});
  const [melding, setMelding] = useState<Record<string, string>>({});
  const [gegevens, setGegevens] = useState<Gegevens>(LEEG);
  const [fout, setFout] = useState("");
  const [gepland, setGepland] = useState(false);
  const kop = useRef<HTMLHeadingElement>(null);
  const eersteKeer = useRef(true);
  const alleFotos = useRef<string[]>([]);

  useEffect(() => {
    if (eersteKeer.current) {
      eersteKeer.current = false;
      return;
    }
    kop.current?.focus({ preventScroll: true });
  }, [stap, woningScherm]);

  useEffect(() => () => alleFotos.current.forEach((url) => URL.revokeObjectURL(url)), []);

  const aantal = (kamer: string) => (voorbeeld[kamer] ? 3 : (fotos[kamer]?.length ?? 0));
  const compleet = KAMERS.filter((k) => aantal(k) >= 2).length;
  const zekerheid = compleet === KAMERS.length ? "zeker" : compleet >= 2 ? "twijfel" : "onzeker";

  const basis = (WONINGEN.find((w) => w.id === woning)?.m3 ?? 24) * (GROOTTES.find((g) => g.id === grootte)?.factor ?? 1);
  const volume = Math.max(4, Math.round(basis * (SITUATIES.find((s) => s.id === situatie)?.factor ?? 1)));
  const marge = zekerheid === "zeker" ? 0.1 : 0.22;
  const stapje = Math.max(1, tarieven.afronden);
  const prijs = Math.max(tarieven.minimum, volume * tarieven.perM3 * (situatie === "spoed" ? 1 + tarieven.spoed / 100 : 1));
  const van = Math.floor((prijs * (1 - marge)) / stapje) * stapje;
  const tot = Math.ceil((prijs * (1 + marge)) / stapje) * stapje;
  const oppervlakte = Math.round(basis * 3.3);
  const voornaam = gegevens.naam.trim().split(" ")[0] || "Anna";

  async function voegToe(kamer: string, bestanden: FileList | null) {
    if (!bestanden) return;
    const goed: string[] = [];
    let teDonker = 0;
    for (const bestand of Array.from(bestanden).slice(0, 4)) {
      const url = URL.createObjectURL(bestand);
      alleFotos.current.push(url);
      if ((await helderheid(url)) < 45) teDonker += 1;
      else goed.push(url);
    }
    setFotos((f) => ({ ...f, [kamer]: [...(f[kamer] ?? []), ...goed].slice(0, 4) }));
    setMelding((m) => ({ ...m, [kamer]: teDonker ? "Deze foto is te donker. Doe het licht aan en maak hem opnieuw." : "" }));
  }

  function verstuur(e: FormEvent) {
    e.preventDefault();
    if (!gegevens.naam.trim() || !/^\S+@\S+\.\S+$/.test(gegevens.email) || !/^\d{4}\s?[a-zA-Z]{2}$/.test(gegevens.postcode.trim()) || !gegevens.huisnummer.trim()) {
      setFout("Vul uw naam, e-mailadres, postcode en huisnummer in.");
      return;
    }
    setFout("");
    setStap(5);
  }

  function opnieuw() {
    setStap(1);
    setWoningScherm("soort");
    setSituatie("");
    setWoning("");
    setGrootte("");
    setFotos({});
    setVoorbeeld({});
    setMelding({});
    setGegevens(LEEG);
    setGepland(false);
  }

  const terug = (actie: () => void) => (
    <button type="button" onClick={actie} className={`${tekstLink} mt-7 inline-block`}>
      Terug
    </button>
  );
  const vraag = (tekst: string) => (
    <h3 ref={kop} tabIndex={-1} className="font-serif text-[clamp(2rem,1.2vw+1.5rem,2.75rem)] font-normal leading-none mb-6 outline-none">
      {tekst}
    </h3>
  );
  return (
    <Layout>
      <SEO
        title="Demo prijsindicatie voor ontruimers"
        description="Probeer de prijsindicatie met foto's: doorloop de aanvraag zoals een familie die op de site van een ontruimer ziet."
        path="/demo-prijsindicatie"
      />
      <PageHero
        title={
          <>
            Probeer de prijsindicatie
            <br />
            zelf<Punt />
          </>
        }
        subtitle="Doorloop de aanvraag zoals een familie die op de site van een ontruimer ziet."
      />

      <section className="wrap pt-14 md:pt-20 pb-24 md:pb-32">
        <DemoKeuze />
        <p className="mb-8 max-w-[68ch] rounded-lg bg-creme px-5 py-4 text-zwart leading-relaxed">
          Dit is een demo. De AI-telling en de Kadastergegevens zijn hier nagebootst, de bedragen zijn voorbeelden en er wordt niets verstuurd. Je foto's blijven in je eigen browser.
        </p>

        {/* WAT DE FAMILIE ZIET */}
          <div className="mx-auto max-w-[44rem] rounded-2xl border border-mist bg-white p-6 md:p-10">
            <div className="mb-8">
              <p className="mb-2 text-sm text-slate tabular-nums">Stap {stap} van 5</p>
              <div className="h-1.5 overflow-hidden rounded-full bg-mist" aria-hidden="true">
                <div className="h-full origin-left rounded-full bg-zwart transition-transform duration-500 ease-out motion-reduce:transition-none" style={{ transform: `scaleX(${stap / 5})` }} />
              </div>
            </div>

            {stap === 1 && (
              <>
                {vraag("Wat moet er leeg?")}
                <Keuzes opties={SITUATIES} gekozen={situatie} kies={(id) => { setSituatie(id); setWoningScherm("soort"); setStap(2); }} />
              </>
            )}

            {stap === 2 && woningScherm === "soort" && (
              <>
                {vraag("Wat voor woning is het?")}
                <Keuzes opties={WONINGEN} gekozen={woning} kies={(id) => { setWoning(id); setWoningScherm("grootte"); }} />
                {terug(() => setStap(1))}
              </>
            )}

            {stap === 2 && woningScherm === "grootte" && (
              <>
                {vraag("Hoe groot is de woning?")}
                <Keuzes opties={GROOTTES} gekozen={grootte} kies={(id) => { setGrootte(id); setStap(3); }} />
                {terug(() => setWoningScherm("soort"))}
              </>
            )}

            {stap === 3 && (
              <>
                {vraag("Foto's per kamer")}
                <p className="mb-6 text-grijs leading-relaxed">
                  Maak per ruimte 2 tot 4 foto's. Doe het licht aan en houd uw telefoon liggend. Zet geen mensen, papieren of medicijnen in beeld.
                </p>
                <ul className="divide-y divide-mist border-y border-mist">
                  {KAMERS.map((kamer) => (
                    <li key={kamer} className="py-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-zwart">{kamer}</p>
                          <p className="text-sm text-slate tabular-nums">{aantal(kamer) >= 2 ? `${aantal(kamer)} foto's, klaar` : `${aantal(kamer)} van minimaal 2 foto's`}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <button type="button" onClick={() => setVoorbeeld((v) => ({ ...v, [kamer]: !v[kamer] }))} className={tekstLink}>
                            {voorbeeld[kamer] ? "Voorbeeldfoto's weghalen" : "Gebruik voorbeeldfoto's"}
                          </button>
                          <label className={`${knopSecundair} cursor-pointer focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-groen-mid`}>
                            Foto's kiezen
                            <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => { void voegToe(kamer, e.target.files); e.target.value = ""; }} />
                          </label>
                        </div>
                      </div>
                      {melding[kamer] && <p role="alert" className="mt-2 font-semibold text-zwart">{melding[kamer]}</p>}
                      {(fotos[kamer]?.length ?? 0) > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {fotos[kamer].map((url, i) => (
                            <img key={url} src={url} alt={`${kamer}, foto ${i + 1}`} className="size-16 rounded-md object-cover" />
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  {terug(() => { setWoningScherm("grootte"); setStap(2); })}
                  <button type="button" onClick={() => setStap(4)} className={knopPrimair}>
                    Volgende stap
                  </button>
                </div>
              </>
            )}

            {stap === 4 && (
              <form onSubmit={verstuur} noValidate>
                {vraag("Uw gegevens en adres")}
                <div className="grid gap-5 sm:grid-cols-2">
                  {([
                    ["naam", "Naam", "Anna Bakker", "name"],
                    ["email", "E-mailadres", "anna@voorbeeld.nl", "email"],
                    ["telefoon", "Telefoonnummer (optioneel)", "06 12 34 56 78", "tel"],
                    ["postcode", "Postcode", "1234 AB", "postal-code"],
                    ["huisnummer", "Huisnummer", "12", "off"],
                  ] as const).map(([sleutel, label, voorbeeldTekst, auto]) => (
                    <label key={sleutel} className="block text-sm font-semibold text-zwart">
                      {label}
                      <input
                        value={gegevens[sleutel]}
                        onChange={(e) => setGegevens((g) => ({ ...g, [sleutel]: e.target.value }))}
                        placeholder={voorbeeldTekst}
                        autoComplete={auto}
                        className={veld}
                      />
                    </label>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate leading-relaxed">
                  Uw foto's worden met AI geanalyseerd en daarna door het ontruimingsbedrijf gecontroleerd.
                </p>
                {fout && <p role="alert" className="mt-4 font-semibold text-zwart">{fout}</p>}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  {terug(() => setStap(3))}
                  <button type="submit" className={knopPrimair}>
                    Bekijk de indicatie
                  </button>
                </div>
              </form>
            )}

            {stap === 5 && (
              <>
                {vraag(`Bedankt, ${voornaam}!`)}
                <p className="text-sm text-slate tabular-nums">Referentienummer 2418 (voorbeeld)</p>
                <p className="mt-4 text-zwart leading-relaxed">
                  {naamVan(SITUATIES, situatie)}, {naamVan(WONINGEN, woning).toLowerCase()} (voorbeeld Kadaster {oppervlakte} m², ca. {volume} m³)
                </p>
                {zekerheid === "onzeker" ? (
                  <div className="mt-6 border-t border-mist pt-6">
                    <p className="font-serif text-[2rem] leading-tight text-zwart">We komen graag eerst kijken</p>
                    <p className="mt-3 text-grijs leading-relaxed">
                      Op deze foto's kunnen we nog geen betrouwbare indicatie geven. Daarom tonen we geen bedrag en plannen we een gratis bezichtiging met u in.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 border-t border-mist pt-6">
                    <p className="font-semibold text-zwart">Indicatieve prijs</p>
                    <p className="mt-1 font-serif text-[clamp(2.5rem,2vw+1.75rem,3.5rem)] leading-none text-zwart tabular-nums">
                      {euro(van)} tot {euro(tot)}
                    </p>
                    <p className="mt-3 text-sm text-slate leading-relaxed">
                      {zekerheid === "zeker" ? "Alle kamers zijn goed in beeld, dus de bandbreedte is smal." : "Niet alle kamers zijn goed in beeld, dus de bandbreedte is breder."} Dit is geen offerte. De vaste prijs spreken we met u af na de bezichtiging.
                    </p>
                  </div>
                )}
                <div className="mt-7 flex flex-wrap gap-3">
                  <button type="button" onClick={() => setGepland(true)} className={knopPrimair}>
                    Plan een gratis bezichtiging in
                  </button>
                  <button type="button" onClick={opnieuw} className={knopSecundair}>
                    Opnieuw beginnen
                  </button>
                </div>
                {gepland && (
                  <p role="status" className="mt-5 text-grijs leading-relaxed">
                    In de echte pagina kiest de familie hier een moment en komt de aanvraag bij het ontruimingsbedrijf binnen.
                  </p>
                )}
              </>
            )}
          </div>
      </section>

      <section className="bg-zwart text-bot">
        <div data-onthul className="wrap py-24 md:py-28">
          <h2 className="text-section mb-6 max-w-[20ch]">Dit op je eigen site?</h2>
          <p className="mb-8 max-w-[56ch] text-lead text-grijs-licht leading-relaxed">We vullen de tabel samen met je in en rekenen hem na op je eigen afgeronde klussen.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact?sector=Ontruiming" className={knopPrimairDonker}>
              Plan een gesprek
            </Link>
            <Link to="/prijsindicatie" className={knopSecundairDonker}>
              Zo werkt de prijsindicatie
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
