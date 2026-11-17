import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { FotoVak, Label, Punt, SectieKop, knopPrimair, knopSecundair, knopSecundairDonker, tekstLink } from "../components/ui";
import { InboxMockupCard } from "../components/ProductMockups";
import { HeroRaster } from "../components/HeroRaster";

const PIJLERS = [
  {
    naam: "Tijd besparen",
    foto: "Bram aan het werk achter de laptop, bij een klant",
    tekst: "Het werk dat elke dag terugkomt, zetten we klaar of nemen we over. Jij houdt tijd over voor de klus zelf.",
    labels: ["E-mails", "Aanvragen", "Reviews"],
  },
  {
    naam: "Beter gevonden worden",
    foto: "een verhuisbus voor een woning, in de schemering",
    tekst: "Zichtbaar zijn waar klanten zoeken, en het ze makkelijk maken om aan te vragen.",
    labels: ["Google Ads", "Website", "Bedrijfsprofiel"],
  },
];

const PIJNEN = [
  { titel: "De telefoon gaat terwijl je op de klus staat.", tekst: "Een aanvraag die pas 's avonds wordt teruggebeld, is soms al naar een ander gegaan." },
  { titel: "Offertes blijven liggen.", tekst: "Inmeten, rekenen, uittypen. Voor je het weet wacht een stapel aanvragen op een prijs." },
  { titel: "Je laatste review is maanden oud.", tekst: "Tevreden klanten vergeten het, tenzij iemand het netjes vraagt. En wie zoekt, kijkt eerst naar recente reviews." },
  { titel: "Op Google sta je onder je concurrent.", tekst: "Terwijl je net zo goed werk levert. Zichtbaar zijn is een vak apart." },
];

const ROUTE = [
  { titel: "Kennismaken.", tekst: "We kijken samen waar je tijd verliest of klanten misloopt. Vrijblijvend, aan tafel of via een videogesprek." },
  { titel: "Voorstel.", tekst: "Je krijgt een voorstel met wat we bouwen en wat het kost. Zonder kleine lettertjes." },
  { titel: "Bouwen.", tekst: "We richten alles in, in je eigen accounts. Jij hoeft niets te installeren of uit te zoeken." },
  { titel: "Bijhouden.", tekst: "We houden het bij en laten je regelmatig zien wat er gebeurt. Wat geld kost of naar buiten gaat, keur jij eerst goed." },
];

const SECTOREN: { naam: string; foto: string; tekst: string; link?: { to: string; label: string } }[] = [
  {
    naam: "Ontruiming",
    foto: "een ontruimde woning, of de bus bij een klus",
    tekst: "Woningen, bedrijfspanden, spoedklussen. Veel aanvragen tegelijk, terwijl jullie zelf op de klus staan.",
    link: { to: "/ontruiming", label: "Wat we voor ontruimers doen" },
  },
  { naam: "Verhuizing", foto: "verhuisdozen in een lege kamer", tekst: "Aanvragen met datums, adressen en volumes. Wie als eerste een duidelijke prijs geeft, maakt de beste kans." },
  { naam: "Vastgoed", foto: "een sleuteloverdracht bij een voordeur", tekst: "Makelaars en beheerders met veel vragen van kopers, huurders en eigenaren, verspreid over mail, telefoon en Google." },
];

const TEAM = [
  { naam: "Tom Vaessen", rol: "Sales en klantcontact", foto: "/team/tom.jpg", contact: { href: "tel:+31643122575", label: "06-43122575" } },
  { naam: "Bram van Veldhuisen", rol: "Techniek", foto: "/team/bram.jpg", contact: { href: "mailto:info@brantomicsai.nl", label: "info@brantomicsai.nl" } },
];

export function Home() {
  return (
    <Layout>
      <SEO
        title="Tijd besparen en beter gevonden worden, met AI"
        description="brantomicsAI helpt ontruimers, verhuizers en vastgoedbedrijven tijd te besparen en online beter gevonden te worden, met AI. Persoonlijk ingericht door Bram en Tom."
        path="/"
      />

      {/* HERO: groot, ivoor, één woord dat scherp wordt, met het bewegende raster erachter */}
      <section className="relative overflow-hidden bg-bot text-zwart">
        <div className="pointer-events-none absolute top-2 right-0 w-[min(84vw,34rem)] opacity-80 md:right-[-4%] md:top-4 md:w-[min(58vw,44rem)] md:opacity-100 xl:right-[4%]">
          <div className="pointer-events-auto">
            <HeroRaster />
          </div>
        </div>
        <div className="wrap pointer-events-none relative flex flex-col justify-end min-h-[calc(100dvh-4.5rem)] pt-20 pb-16 md:pb-20">
          <h1 className="text-poster max-w-[12ch]">
            Minder regelwerk. Beter{" "}
            <span className="vervaagd">
              <em className="italic">gevonden</em>
              <span className="text-vermiljoen">.</span>
            </span>
          </h1>
          <div className="pointer-events-auto mt-12 grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
            <p className="md:col-span-5 text-lead text-grijs leading-relaxed">
              Wij helpen ontruimers, verhuizers en vastgoedbedrijven tijd te besparen en online beter
              gevonden te worden, met AI.
            </p>
            <div className="md:col-span-6 md:col-start-7 flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className={knopPrimair}>
                Plan een gesprek
              </Link>
              <Link to="/diensten" className={knopSecundair}>
                Bekijk wat we doen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAAR WE JE MEE HELPEN: twee grote kaarten */}
      <section className="wrap py-24 md:py-32">
        <SectieKop titel="Waar we je mee helpen" regel="Twee dingen die elkaar versterken: minder handwerk achter de schermen, meer klanten die je vinden." />
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-14">
          {PIJLERS.map((p) => (
            <article key={p.naam}>
              <FotoVak wat={p.foto} className="aspect-[4/3] mb-6">
                <div className="absolute left-4 top-4 right-4 flex flex-wrap gap-2">
                  {p.labels.map((l) => (
                    <Label key={l}>{l}</Label>
                  ))}
                </div>
              </FotoVak>
              <h3 className="font-serif text-[clamp(1.75rem,1.2vw+1.25rem,2.5rem)] font-normal leading-tight mb-3">{p.naam}</h3>
              <p className="text-lead text-grijs leading-relaxed max-w-[48ch]">{p.tekst}</p>
            </article>
          ))}
        </div>
        <p className="mt-12">
          <Link to="/diensten" className={tekstLink}>
            Bekijk alle diensten
          </Link>
        </p>
      </section>

      {/* HERKEN JE DIT */}
      <section className="bg-zwart text-bot py-24 md:py-32">
        <div className="wrap">
          <SectieKop donker titel="Herken je dit?" />
          <ol className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {PIJNEN.map((p, i) => (
              <li key={p.titel} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-6">
                <span className="font-serif text-[4rem] leading-none text-zilver tabular-nums" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-title mb-2">{p.titel}</h3>
                  <p className="text-grijs-licht leading-relaxed max-w-[46ch]">{p.tekst}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATEMENT: het diepgroene vlak */}
      <section className="bg-zwart-2 text-creme">
        <div className="wrap py-24 md:py-32">
          <p className="font-serif text-display max-w-[16ch] leading-[0.95]">Wij bouwen de AI die het overneemt<Punt /></p>
          <p className="mt-8 text-lead text-zilver-licht">Persoonlijk ingericht door Bram en Tom.</p>
        </div>
      </section>

      {/* DE ROUTE */}
      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="lg:col-span-5">
            <h2 className="text-section lg:sticky lg:top-28">De route van gesprek naar werkende AI</h2>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7 border-l border-zilver-donker">
            {ROUTE.map((r, i) => (
              <li key={r.titel} className="relative pl-10 pb-12 last:pb-0 border-b border-lijn last:border-b-0 mb-12 last:mb-0">
                <span className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-vermiljoen" aria-hidden="true" />
                <span className="block text-sm text-groen-mid tabular-nums mb-2">0{i + 1}</span>
                <h3 className="font-serif text-[clamp(1.75rem,1.2vw+1.25rem,2.5rem)] font-normal leading-tight mb-3">{r.titel}</h3>
                <p className="text-lead text-grijs leading-relaxed">{r.tekst}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="bg-creme py-24 md:py-32">
        <div className="wrap">
          <SectieKop titel="Voor wie we bouwen" regel="Drukke bedrijven waar de telefoon gaat terwijl je op de klus staat. Ander soort bedrijf? Vertel ons waar je tijd in zit." />
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {SECTOREN.map((s) => (
              <article key={s.naam}>
                <FotoVak wat={s.foto} className="aspect-[4/3] md:aspect-[4/5] mb-6 !bg-bot" />
                <h3 className="font-serif text-[2rem] font-normal leading-tight mb-2">{s.naam}</h3>
                <p className="text-grijs leading-relaxed">{s.tekst}</p>
                {s.link && (
                  <p className="mt-4">
                    <Link to={s.link.to} className={tekstLink}>
                      {s.link.label}
                    </Link>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EEN VAN ONZE TOOLS */}
      <section className="bg-zwart text-bot py-24 md:py-32">
        <div className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-section mb-6">De Email Responder</h2>
            <p className="text-lead text-grijs-licht leading-relaxed mb-8">
              Eén van de tools die we bouwen. Voor elke klantmail staat een concept-antwoord klaar in
              je eigen inbox, in jouw toon. Jij leest het na en drukt op verzenden.
            </p>
            <Link to="/demo-responder" className={knopSecundairDonker}>
              Probeer de demo
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <InboxMockupCard />
          </div>
        </div>
      </section>

      {/* CONTACT: de oprichters zelf */}
      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-section mb-6">Plan een gesprek</h2>
            <p className="text-lead text-grijs leading-relaxed mb-8 max-w-[44ch]">
              Elk traject begint met een gesprek over waar je tijd verliest of klanten misloopt. Dat
              eerste gesprek is gratis en vrijblijvend.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={knopPrimair}>
                Plan een gesprek
              </Link>
              <Link to="/over-ons" className={knopSecundair}>
                Over ons
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 grid gap-4">
            {TEAM.map((p) => (
              <div key={p.naam} className="flex items-center gap-5 rounded-xl bg-creme p-5">
                <img src={p.foto} alt={p.naam} width={800} height={1200} loading="lazy" className="size-20 shrink-0 rounded-full object-cover object-top" />
                <div className="min-w-0">
                  <h3 className="text-title">{p.naam}</h3>
                  <p className="text-grijs">{p.rol}</p>
                  <a href={p.contact.href} className={`${tekstLink} inline-block mt-1`}>
                    {p.contact.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
