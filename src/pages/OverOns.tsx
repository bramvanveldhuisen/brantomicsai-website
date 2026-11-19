import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { FotoVak, Punt, knopPrimair } from "../components/ui";

const TEAM = [
  {
    naam: "Bram van Veldhuisen",
    rol: "AI & Technologie",
    rolKleur: "text-vermiljoen",
    foto: "/portretten/bram.jpg",
    breed: 800,
    hoog: 1200,
    tekst: [
      "Bram is verantwoordelijk voor de techniek achter Brantomics AI. Hij duikt in de mogelijkheden van AI en zorgt dat de automatisering klopt, werkt en aanvoelt als maatwerk, ook voor bedrijven zonder technische achtergrond.",
      "Zijn overtuiging: AI hoeft niet ingewikkeld te zijn. Een goed systeem werkt op de achtergrond en valt niet op. Dat is precies wat hij bouwt.",
    ],
  },
  {
    naam: "Tom Vaessen",
    rol: "Sales & Klantrelaties",
    rolKleur: "text-vermiljoen",
    foto: "/portretten/tom.jpg",
    breed: 800,
    hoog: 1200,
    tekst: [
      "Tom is het eerste aanspreekpunt voor nieuwe klanten. Hij luistert naar de uitdagingen van ondernemers, denkt mee over de beste oplossing en zorgt dat de onboarding soepel verloopt.",
      "Zijn overtuiging: technologie werkt pas echt als het aansluit op hoe mensen werken. De menselijke kant van automatisering: dat is waar Tom het verschil maakt.",
    ],
  },
  {
    naam: "Julien",
    rol: "Sales & Marketing",
    rolKleur: "text-vermiljoen",
    foto: "/portretten/julien.jpg",
    breed: 1000,
    hoog: 1000,
    tekst: [
      "Julien versterkt het team sinds november 2026 als sales- en marketingspecialist. Hij legt contact met nieuwe bedrijven en vertelt wat we voor ze kunnen doen.",
    ],
  },
];

const VERHAAL = [
  {
    titel: "Het begin",
    tekst:
      "We zijn begonnen met een simpele observatie: ondernemers zijn goed in hun vak, maar verliezen elke dag tijd aan werk dat steeds terugkomt. Dezelfde vragen beantwoorden, prijzen uitzoeken, reviews najagen.",
  },
  {
    titel: "Wat we anders doen",
    tekst:
      "We bouwen geen generieke chatbot. We maken een paar vaste producten voor ontruimingsbedrijven, en richten die in op hoe jouw bedrijf werkt.",
  },
  {
    titel: "Eerlijk over wat we zijn",
    tekst:
      "We zijn een jong bedrijf. We hebben geen tientallen jaren aan referenties en doen geen beloftes die we niet kunnen waarmaken. Wat we wél hebben: technische kennis, persoonlijke aandacht en producten die we zelf vertrouwen. Daarom is het eerste gesprek altijd gratis en vrijblijvend, zodat je zelf kunt beoordelen of het bij je past.",
  },
];

export function OverOns() {
  return (
    <Layout>
      <SEO
        title="Over ons"
        description="Brantomics AI is opgericht door Bram van Veldhuisen en Tom Vaessen. Twee ondernemers die AI-producten maken voor ontruimingsbedrijven."
        path="/over-ons"
      />
      <PageHero
        title={
          <>
            Een klein team,
            <br />
            eerlijke AI<Punt />
          </>
        }
        subtitle="Geen groot techbedrijf, geen anonieme software. Gewoon Bram, Tom en Julien: persoonlijk bereikbaar, eerlijk over wat we kunnen en gepassioneerd over wat AI voor jouw bedrijf kan doen."
      />

      {/* TEAM */}
      <section className="wrap pb-10 md:pb-14">
        <div data-onthul-kinderen className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-8 md:pt-10">
          {TEAM.map((p, i) => (
            <article key={p.naam}>
              <img
                src={p.foto}
                alt={p.naam}
                width={p.breed}
                height={p.hoog}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                className="w-full aspect-square object-cover object-top rounded-2xl mb-5"
              />
              <h2 className="text-display-s">{p.naam}</h2>
              <p className={`mt-2 mb-5 text-xl font-semibold ${p.rolKleur}`}>{p.rol}</p>
              {p.tekst.map((t) => (
                <p key={t} className="text-lead text-zwart leading-relaxed mb-4 max-w-[60ch]">
                  {t}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* ONS VERHAAL */}
      <section className="bg-steen py-10 md:py-14">
        <div className="wrap">
          <h2 data-onthul className="text-section mb-6 md:mb-8">Waarom Brantomics AI?</h2>
          <div data-onthul-kinderen className="border-b border-lijn">
            {VERHAAL.map((v) => (
              <div key={v.titel} className="grid md:grid-cols-12 gap-x-8 gap-y-3 border-t border-lijn py-5">
                <h3 className="md:col-span-4 text-title">{v.titel}</h3>
                <p className="md:col-span-7 md:col-start-6 text-lead text-zwart leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIE */}
      <section data-onthul-kinderen className="wrap py-10 md:py-14 grid lg:grid-cols-12 gap-x-8 gap-y-7 items-center">
        <div className="lg:col-span-6">
          <figure>
            <blockquote className="font-serif text-[clamp(2.25rem,1.8vw+1.25rem,3.25rem)] leading-[1.05] text-zwart text-balance">
              “Elke ontruimer verdient toegang tot slimme automatisering, niet alleen de grote
              bedrijven met grote budgetten. Wij maken dat mogelijk, persoonlijk en zonder gedoe.”
            </blockquote>
            <figcaption className="mt-6 text-lead text-grijs">Bram &amp; Tom, oprichters Brantomics AI</figcaption>
          </figure>
          <Link to="/contact" className={`${knopPrimair} mt-10`}>
            Maak kennis met ons
          </Link>
        </div>
        <FotoVak
          wat="Tom en Bram, de oprichters"
          src="/fotos/tom-en-bram.webp"
          alt="Tom Vaessen en Bram van Veldhuisen, de oprichters, in zwarte shirts voor een donkere houten wand"
          className="lg:col-span-6 aspect-[3/2]"
        />
      </section>
    </Layout>
  );
}
