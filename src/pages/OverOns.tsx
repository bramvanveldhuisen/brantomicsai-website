import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { SectionEyebrow } from "../components/ui";

export function OverOns() {
  return (
    <Layout>
      <SEO
        title="Over ons"
        description="Brantomics AI is opgericht door Bram van Veldhuisen en Tom Vaessen. Twee gedreven ondernemers die geloven in de kracht van slimme AI voor het MKB."
        path="/over-ons"
      />
      <PageHero
        eyebrow="Wie zijn wij"
        title={
          <>
            Twee ondernemers die geloven
            <br />
            in eerlijke AI voor het MKB
          </>
        }
        subtitle="Geen groot techbedrijf, geen anonieme software. Gewoon Bram en Tom — persoonlijk bereikbaar, eerlijk over wat we kunnen en gepassioneerd over wat AI voor jouw bedrijf kan doen."
      />

      {/* TEAM CARDS */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8">
            <div className="size-14 rounded-2xl bg-navy text-white font-bold text-lg flex items-center justify-center mb-5">
              BV
            </div>
            <div className="text-lg font-bold text-navy">Bram van Veldhuisen</div>
            <div className="text-sm text-blue font-medium mb-4">AI &amp; Technologie</div>
            <p className="text-sm text-muted leading-relaxed">
              Bram is verantwoordelijk voor de techniek achter Brantomics AI. Hij duikt in de
              mogelijkheden van AI en zorgt dat de automatisering klopt, werkt en aanvoelt als
              maatwerk — ook voor bedrijven zonder technische achtergrond.
              <br />
              <br />
              Zijn overtuiging: AI hoeft niet ingewikkeld te zijn. Een goed systeem werkt op de
              achtergrond en valt niet op. Dat is precies wat hij bouwt.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8">
            <div
              className="size-14 rounded-2xl text-white font-bold text-lg flex items-center justify-center mb-5"
              style={{ background: "linear-gradient(135deg, #0F5E3E 0%, #10B981 100%)" }}
            >
              TV
            </div>
            <div className="text-lg font-bold text-navy">Tom Vaessen</div>
            <div className="text-sm text-success font-medium mb-4">Sales &amp; Klantrelaties</div>
            <p className="text-sm text-muted leading-relaxed">
              Tom is het eerste aanspreekpunt voor nieuwe klanten. Hij luistert naar de
              uitdagingen van ondernemers, denkt mee over de beste oplossing en zorgt dat de
              onboarding soepel verloopt.
              <br />
              <br />
              Zijn overtuiging: technologie werkt pas echt als het aansluit op hoe mensen werken.
              De menselijke kant van automatisering — dat is waar Tom het verschil maakt.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <SectionEyebrow center>Ons verhaal</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight">Waarom Brantomics AI?</h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8">
            <div className="text-xs font-bold uppercase tracking-wide text-blue mb-3">Het begin</div>
            <p className="text-[15px] text-muted leading-relaxed">
              We zijn begonnen met een simpele observatie: MKB-ondernemers zijn slim, hard werkend
              en goed in hun vak — maar besteden uren per dag aan e-mails die eigenlijk altijd op
              hetzelfde neerkomen. Reserveringsbevestigingen, productvragen, klachten die snel
              opgelost kunnen worden. Herhalend werk dat tijd kost die je liever ergens anders in
              investeert.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8">
            <div className="text-xs font-bold uppercase tracking-wide text-blue mb-3">Wat we anders doen</div>
            <p className="text-[15px] text-muted leading-relaxed">
              We bouwen geen generieke chatbot-oplossingen. We kijken per klant hoe
              e-mailcommunicatie er écht uitziet, welke situaties terugkomen en hoe de juiste toon
              klinkt voor dat specifieke bedrijf. Dat vergt aandacht in het begin — maar levert een
              systeem op dat aanvoelt als een medewerker die je al jaren kent.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8">
            <div className="text-xs font-bold uppercase tracking-wide text-success mb-3">Eerlijk over wat we zijn</div>
            <p className="text-[15px] text-muted leading-relaxed">
              We zijn een jong bedrijf. We hebben geen tientallen jaren aan referenties en doen
              geen beloftes die we niet kunnen waarmaken. Wat we wél hebben: technische expertise,
              persoonlijke aandacht en een eerlijk product dat we zelf vertrouwen. Dat is de reden
              dat we een gratis proefperiode aanbieden — zodat je het zelf kunt beoordelen, zonder
              risico.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center border-t border-border">
        <SectionEyebrow center>Onze missie</SectionEyebrow>
        <blockquote className="text-xl md:text-2xl font-semibold text-navy leading-snug mb-4 text-balance">
          "Elke MKB-ondernemer verdient toegang tot slimme automatisering — niet alleen de grote
          bedrijven met grote budgetten. Wij maken dat mogelijk, persoonlijk en zonder gedoe."
        </blockquote>
        <div className="text-sm text-muted mb-9">— Bram &amp; Tom, oprichters Brantomics AI</div>
        <Link to="/contact" className="inline-flex rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors">
          Maak kennis met ons
        </Link>
      </section>
    </Layout>
  );
}
