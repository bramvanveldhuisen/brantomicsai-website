import { Link } from "react-router-dom";
import { Layout, PageHero } from "../components/Layout";
import { SEO } from "../components/SEO";
import { SectionEyebrow, PricingCard } from "../components/ui";

export function Prijzen() {
  return (
    <Layout>
      <SEO
        title="Prijzen"
        description="Transparante prijzen voor Email Responder en Bestel Assistent. Vanaf €99/maand. Eerste week gratis, geen creditcard."
        path="/prijzen"
      />
      <PageHero
        eyebrow="Transparante prijzen"
        title={
          <>
            Twee producten. Drie opties.
            <br />
            Eerste week altijd gratis.
          </>
        }
        subtitle="Geen verborgen kosten, geen setup-fee. Persoonlijk onboarded door Bram en Tom — live binnen één werkdag."
      />

      {/* EMAIL RESPONDER */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <SectionEyebrow center>Dienst 01</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-3">Email Responder</h2>
          <p className="text-muted max-w-md mx-auto leading-relaxed">
            Voor bedrijven met veel inkomende e-mails die snel en persoonlijk beantwoord moeten
            worden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <PricingCard
            plan="Maandelijks"
            name="Flexibel"
            price="€179"
            period="/mnd"
            note="Excl. BTW — maandelijks opzegbaar"
            features={["Email Responder", "Onbeperkt emails per maand", "Persoonlijke installatie & onboarding", "Eerste week volledig gratis", "E-mailsupport"]}
            cta="Maandelijks starten"
            ctaHref="/contact"
          />
          <PricingCard
            plan="Jaarabonnement"
            name="Beste keuze"
            price="€149"
            period="/mnd"
            note={
              <span className="text-blue font-medium">Bespaar €360 t.o.v. maandelijks</span>
            }
            features={["Email Responder", "Onbeperkt emails per maand", "Persoonlijke installatie & onboarding", "Eerste week volledig gratis", "Prioriteitsondersteuning", "Jaarlijkse optimalisatiesessie"]}
            cta="Jaarlijks starten — bespaar €360"
            ctaHref="/contact"
            featured
            badge="Meest populair"
          />
          <PricingCard
            plan="Jaarlijks vooruit"
            name="Maximale besparing"
            price="€1.639"
            period="/jr"
            note={
              <>
                <div className="line-through text-muted/70">€1.788/jaar normaal</div>
                <div className="text-success font-medium">= 1 maand gratis</div>
              </>
            }
            features={["Email Responder", "Onbeperkt emails per maand", "Persoonlijke installatie & onboarding", "Eerste week volledig gratis", "Prioriteitsondersteuning", "Jaarlijkse optimalisatiesessie"]}
            cta="Vooruit betalen — 1 mnd gratis"
            ctaHref="/contact"
          />
        </div>
      </section>

      {/* BESTEL ASSISTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <SectionEyebrow center>Dienst 02</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-1">Bestel Assistent</h2>
          <p className="text-xs font-medium text-muted mb-3">Powered by Brantomics Kitchen</p>
          <p className="text-muted max-w-md mx-auto leading-relaxed mb-6">
            Voor horecazaken en keukens die automatisch willen bestellen bij hun groothandel(s).
          </p>
          <a
            href="https://brantomicsaikitchen.nl/welkom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors"
          >
            Bekijk de Kitchen-tool zelf
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <PricingCard
            plan="Starter"
            name="Voor de kleine keuken"
            price="€119"
            period="/mnd"
            note="excl. btw · eerste week gratis"
            features={[
              "1 keuken",
              "Tot 2 groothandels",
              "Automatisch klaarzetten van bestellingen",
              "Vaste bestellijsten",
              "Basis-kostenoverzicht",
            ]}
            cta="Start gratis"
            ctaHref="/contact"
            tone="success"
          />
          <PricingCard
            plan="Pro"
            name="Voor het drukke restaurant"
            price="€199"
            period="/mnd"
            note="excl. btw · eerste week gratis"
            features={[
              "Alles uit Starter",
              "Alle groothandels (Hanos, Sligro, Bidfood, Driessen en meer)",
              "Volledige kostenanalyse per leverancier",
              "Meldingen (klaargezet / aandacht nodig)",
              "Meerdere gebruikers met rollen",
              "Voorrang bij support",
            ]}
            cta="Start gratis"
            ctaHref="/contact"
            featured
            badge="Meest gekozen"
            tone="success"
          />
          <PricingCard
            plan="Keten"
            name="Voor meerdere locaties"
            price="€369"
            period="/mnd"
            note="excl. btw · eerste week gratis"
            features={[
              "Alles uit Pro",
              "Meerdere keukens / locaties",
              "Overkoepelend inkoop-overzicht",
              "Persoonlijke accountmanager",
            ]}
            cta="Neem contact op"
            ctaHref="/contact"
            tone="success"
          />
        </div>

        {/* ROI blok */}
        <div className="mt-14 max-w-3xl mx-auto text-center rounded-3xl border border-border bg-white/70 backdrop-blur-sm p-10">
          <SectionEyebrow center>Reken maar mee</SectionEyebrow>
          <h3 className="text-xl font-extrabold text-navy mb-3">Bestellen kost je nu meer dan je denkt</h3>
          <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto mb-8">
            Een kok bestelt gemiddeld meerdere keren per week bij verschillende groothandels.
            Inloggen, producten opzoeken, mandje vullen en controleren kost al gauw uren per week.
            Dat is bijna <strong className="text-ink">20 uur per maand</strong> — puur overtypen.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-extrabold text-navy">~20 uur</div>
              <div className="text-xs text-muted mt-1">per maand kwijt aan handmatig bestellen</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-navy">≈ €560</div>
              <div className="text-xs text-muted mt-1">aan kok-tijd per maand (bij €28/uur)</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-success">vanaf €119</div>
              <div className="text-xs text-muted mt-1">verdient zichzelf ruim terug</div>
            </div>
          </div>
          <p className="text-xs text-muted/80 mt-6 max-w-lg mx-auto">
            En dan tellen we de misgelopen producten, dubbele bestellingen en vergeten items nog
            niet eens mee.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center border-t border-border">
        <SectionEyebrow center>Twijfel je nog?</SectionEyebrow>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-4">
          De eerste week is volledig gratis.
        </h2>
        <p className="text-lg text-muted mb-9 leading-relaxed">Geen creditcard, geen verplichtingen.</p>
        <Link to="/contact" className="rounded-full bg-navy text-white font-semibold px-7 py-3.5 hover:bg-blue transition-colors inline-flex">
          Start gratis proefperiode
        </Link>
      </section>
    </Layout>
  );
}
