import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { FotoVak, Punt, SectieKop, knopPrimair, knopSecundair, knopSecundairDonker, tekstLink } from "../components/ui";
import { UitslagKaart } from "../components/ProductMockups";
import { HeroRaster } from "../components/HeroRaster";
import { GroeiFoto, RouteVoortgang, Veeg } from "../components/Beweging";

const PRODUCTEN = [
  {
    naam: "Prijsindicatie",
    tekst: "Families maken foto's per kamer, de AI telt wat er staat en jouw eigen tarieven maken er een indicatie van.",
    link: { to: "/prijsindicatie", label: "Zo werkt de prijsindicatie" },
    uitgelicht: true,
  },
  {
    naam: "Email Responder",
    tekst: "Voor elke klantmail staat een concept-antwoord klaar in je eigen inbox. Jij leest het na en verstuurt.",
    link: { to: "/demo-responder", label: "Probeer de demo" },
  },
  {
    naam: "Review-opvolging",
    tekst: "Na de klus krijgt je klant een nette vraag om een review. Antwoorden op nieuwe reviews staan als concept klaar.",
    link: { to: "/producten", label: "Bekijk de producten" },
  },
];

const PIJNEN = [
  { titel: "De telefoon gaat terwijl je op de klus staat.", tekst: "Een aanvraag die pas 's avonds wordt teruggebeld, is soms al naar een ander gegaan." },
  { titel: "Offertes blijven liggen.", tekst: "Inmeten, rekenen, uittypen. Voor je het weet wacht een stapel aanvragen op een prijs." },
  { titel: "Je laatste review is maanden oud.", tekst: "Tevreden klanten vergeten het, tenzij iemand het netjes vraagt. En wie zoekt, kijkt eerst naar recente reviews." },
  { titel: "De eerste vraag is altijd: wat kost het?", tekst: "Families willen een bedrag weten voordat ze bellen. Zonder bedrag vragen ze eerst bij een ander." },
];

const ROUTE: { titel: string; tekst: string; foto?: { src: string; alt: string; positie: string } }[] = [
  {
    titel: "Kennismaken.",
    tekst: "We kijken samen waar je tijd verliest of klanten misloopt. Vrijblijvend, aan tafel of via een videogesprek.",
    foto: { src: "/fotos/handdruk.webp", alt: "Twee mensen geven elkaar lachend een hand", positie: "object-[50%_35%]" },
  },
  { titel: "Voorstel.", tekst: "Je krijgt een voorstel met het product dat past en wat het kost. Zonder kleine lettertjes." },
  {
    titel: "Inrichten.",
    tekst: "We richten alles in, in je eigen accounts. Jij hoeft niets te installeren of uit te zoeken.",
    foto: { src: "/fotos/aan-het-werk.webp", alt: "Bram werkt achter zijn laptop aan een lichte houten tafel", positie: "object-[50%_92%]" },
  },
  { titel: "Bijhouden.", tekst: "We houden het bij en laten je regelmatig zien wat er gebeurt. Wat geld kost of naar buiten gaat, keur jij eerst goed." },
];

const SECTOREN: { naam: string; tekst: string; link?: { to: string; label: string } }[] = [
  {
    naam: "Ontruiming",
    tekst: "Woningen, bedrijfspanden, spoedklussen. Veel aanvragen tegelijk, terwijl jullie zelf op de klus staan.",
    link: { to: "/ontruiming", label: "Wat we voor ontruimers doen" },
  },
  { naam: "Verhuizing", tekst: "Aanvragen met datums, adressen en volumes. Wie als eerste een duidelijke prijs geeft, maakt de beste kans." },
  { naam: "Vastgoed", tekst: "Makelaars en beheerders met veel vragen van kopers, huurders en eigenaren, verspreid over mail, telefoon en Google." },
];

const TEAM = [
  { naam: "Tom Vaessen", rol: "Sales en klantcontact", foto: "/team/tom.jpg", contact: { href: "tel:+31643122575", label: "06-43122575" } },
  { naam: "Bram van Veldhuisen", rol: "Techniek", foto: "/team/bram.jpg", contact: { href: "mailto:info@brantomicsai.nl", label: "info@brantomicsai.nl" } },
];

export function Home() {
  return (
    <Layout>
      <SEO
        title="AI-producten voor ontruimers, verhuizers en vastgoed"
        description="brantomicsAI maakt AI-producten voor bedrijven met veel aanvragen: een prijsindicatie op je site, de Email Responder en review-opvolging. Persoonlijk ingericht door Bram en Tom."
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
            Minder regelwerk. Meer{" "}
            <span className="vervaagd">
              tijd
              <span className="text-vermiljoen">.</span>
            </span>
          </h1>
          <div className="pointer-events-auto mt-8 max-w-[40rem]">
            <p data-onthul data-vertraging="200" className="text-lead text-grijs leading-relaxed">
              Drie AI-producten voor ontruimers, verhuizers en vastgoedbedrijven: een prijsindicatie op
              je site, concept-antwoorden in je inbox en review-opvolging.
            </p>
            <div data-onthul data-vertraging="280" className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className={knopPrimair}>
                Plan een gesprek
              </Link>
              <Link to="/producten" className={knopSecundair}>
                Bekijk de producten
              </Link>
            </div>
          </div>
        </div>
        <Veeg />
      </section>

      {/* DE PRODUCTEN */}
      <section className="wrap py-24 md:py-32">
        <SectieKop titel="Onze producten" regel="Drie producten voor bedrijven met veel aanvragen." />
        <div data-onthul-kinderen className="grid md:grid-cols-3 gap-6">
          {PRODUCTEN.map((p) => (
            <article
              key={p.naam}
              className={`flex flex-col rounded-xl p-8 md:p-9 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--color-zwart)_40%,transparent)] ${p.uitgelicht ? "bg-zwart text-bot" : "bg-creme"}`}
            >
              <h3 className="font-serif text-[clamp(2.25rem,1.2vw+1.75rem,3rem)] font-normal leading-tight mb-4">{p.naam}</h3>
              <p className={`text-lead leading-relaxed mb-10 ${p.uitgelicht ? "text-grijs-licht" : "text-grijs"}`}>{p.tekst}</p>
              <p className="mt-auto">
                <Link to={p.link.to} className={p.uitgelicht ? "font-semibold underline decoration-vermiljoen decoration-2 underline-offset-4 transition-colors duration-200 hover:text-zilver-licht" : tekstLink}>
                  {p.link.label}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HERKEN JE DIT */}
      <section className="bg-zwart text-bot py-24 md:py-32">
        <div className="wrap">
          <SectieKop donker titel="Herken je dit?" />
          <ol data-onthul-kinderen className="grid md:grid-cols-2 gap-x-16 gap-y-14">
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
      <section className="bg-zwart-2 text-creme overflow-hidden">
        <div className="wrap py-24 md:py-32">
          <p data-onthul className="font-serif text-display max-w-[16ch] leading-[0.95]">Wij bouwen de AI die het overneemt<Punt /></p>
          <p data-onthul data-vertraging="80" className="mt-8 text-lead text-zilver-licht">Persoonlijk ingericht door Bram en Tom.</p>
          <GroeiFoto
            src="/fotos/tom-en-bram.webp"
            alt="Tom Vaessen en Bram van Veldhuisen in zwarte shirts voor een donkere houten wand"
            positie="object-[50%_35%]"
            className="mt-14 md:mt-20"
          />
        </div>
      </section>

      {/* DE ROUTE */}
      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="lg:col-span-5">
            <h2 data-onthul className="text-section lg:sticky lg:top-28">De route van gesprek naar werkende AI</h2>
          </div>
          <RouteVoortgang className="lg:col-span-6 lg:col-start-7">
          <ol data-onthul-kinderen className="border-l border-zilver">
            {ROUTE.map((r, i) => (
              <li key={r.titel} className="relative pl-10 pb-12 last:pb-0 border-b border-lijn last:border-b-0 mb-12 last:mb-0">
                <span className="route-punt absolute -left-[5px] top-2 size-[9px] rounded-full bg-vermiljoen" aria-hidden="true" />
                <span className="block text-sm text-groen-mid tabular-nums mb-2">0{i + 1}</span>
                <h3 className="font-serif text-[clamp(1.75rem,1.2vw+1.25rem,2.5rem)] font-normal leading-tight mb-3">{r.titel}</h3>
                <p className="text-lead text-grijs leading-relaxed">{r.tekst}</p>
                {r.foto && <FotoVak wat={r.foto.alt} src={r.foto.src} alt={r.foto.alt} positie={r.foto.positie} className="mt-8 aspect-[4/3]" />}
              </li>
            ))}
          </ol>
          </RouteVoortgang>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="bg-creme py-24 md:py-32">
        <div className="wrap">
          <SectieKop titel="Voor wie we bouwen" regel="Drukke bedrijven waar de telefoon gaat terwijl je op de klus staat. Ander soort bedrijf? Vertel ons waar je tijd in zit." />
          <div data-onthul-kinderen className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {SECTOREN.map((s) => (
              <article key={s.naam} className="border-t border-zilver pt-6">
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

      {/* HET BELANGRIJKSTE PRODUCT */}
      <section className="bg-zwart text-bot py-24 md:py-32">
        <div data-onthul-kinderen className="wrap grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-section mb-6">Weet wat er staat, voordat je gaat kijken<Punt /></h2>
            <p className="text-lead text-grijs-licht leading-relaxed mb-8 max-w-[48ch]">
              De prijsindicatie op je eigen site. De AI telt de spullen op de foto's, de prijs komt uit jouw tabel.
            </p>
            <Link to="/demo-prijsindicatie" className={knopSecundairDonker}>
              Probeer de demo
            </Link>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 min-w-0">
            <UitslagKaart />
          </div>
        </div>
      </section>

      {/* CONTACT: de oprichters zelf */}
      <section className="wrap py-24 md:py-32">
        <div data-onthul-kinderen className="grid lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
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
