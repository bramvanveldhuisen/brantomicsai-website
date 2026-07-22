import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { LegalArticle, LegalList, LegalMeta } from "../components/LegalArticle";

export function Privacybeleid() {
  return (
    <Layout>
      <SEO title="Privacybeleid" description="Privacybeleid van Brantomics AI." path="/privacybeleid" />
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-3xl font-extrabold text-navy tracking-tight mb-2">Privacybeleid</h1>
        <p className="text-muted mb-10">Brantomics AI — hoe wij omgaan met persoonsgegevens</p>

        <LegalMeta>
          <strong className="text-ink">Laatste update: Maart 2026</strong>
          <br />
          Brantomics AI VOF — Maarnsegrindweg 21, Maarn
          <br />
          KvK: 42032331 — BTW: NL869394964B01
          <br />
          Contact:{" "}
          <a href="mailto:info@brantomicsai.nl" className="text-blue hover:underline">
            info@brantomicsai.nl
          </a>
        </LegalMeta>

        <LegalArticle num="1" title="Wie zijn wij">
          <p>
            Brantomics AI is een VOF gevestigd in Maarn, gespecialiseerd in AI-gedreven
            e-mailautomatisering voor MKB-bedrijven. Dit privacybeleid beschrijft hoe wij omgaan
            met persoonsgegevens die wij verwerken in het kader van onze dienstverlening en via
            deze website.
          </p>
        </LegalArticle>

        <LegalArticle num="2" title="Welke gegevens verwerken wij">
          <p>Brantomics AI verwerkt persoonsgegevens in de volgende contexten:</p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">Contactformulier:</strong> naam, bedrijfsnaam,
                e-mailadres, telefoonnummer en informatie over uw e-mailuitdagingen.
              </>,
              <>
                <strong className="text-ink">Dienstverlening:</strong> e-mailberichten en
                contactgegevens van klanten van onze opdrachtgevers, noodzakelijk voor de werking
                van de AI-agent. Brantomics AI treedt hierbij op als verwerker.
              </>,
              <>
                <strong className="text-ink">Website:</strong> anonieme bezoekersgegevens voor
                analytische doeleinden (geen trackingcookies van derden).
              </>,
            ]}
          />
        </LegalArticle>

        <LegalArticle num="3" title="Doel van de verwerking">
          <p>Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden:</p>
          <LegalList
            items={[
              "Het verlenen van de overeengekomen diensten (AI-e-mailautomatisering).",
              "Het beantwoorden van contactverzoeken en het voeren van zakelijke communicatie.",
              "Het nakomen van wettelijke verplichtingen.",
            ]}
          />
          <p>
            Wij verkopen persoonsgegevens nooit aan derden en gebruiken ze niet voor
            marketingdoeleinden van derden.
          </p>
        </LegalArticle>

        <LegalArticle num="4" title="Grondslag voor verwerking">
          <p>Wij verwerken persoonsgegevens op basis van:</p>
          <LegalList
            items={[
              "Uitvoering van de overeenkomst met onze opdrachtgevers (artikel 6 lid 1 sub b AVG).",
              "Gerechtvaardigde belangen voor zakelijke communicatie en dienstverlening (artikel 6 lid 1 sub f AVG).",
              "Wettelijke verplichtingen (artikel 6 lid 1 sub c AVG).",
            ]}
          />
        </LegalArticle>

        <LegalArticle num="5" title="Bewaartermijnen">
          <p>
            Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor
            zij zijn verzameld:
          </p>
          <LegalList
            items={[
              "Klantgegevens en e-maildata die voortvloeien uit de dienstverlening: maximaal 2 jaar na het einde van de overeenkomst.",
              "Contactformuliergegevens: maximaal 1 jaar na het laatste contact.",
              "Factuurgegevens: 7 jaar conform de wettelijke bewaarplicht.",
            ]}
          />
        </LegalArticle>

        <LegalArticle num="6" title="Delen met derden">
          <p>
            In het kader van onze dienstverlening maken wij gebruik van de volgende
            sub-verwerkers, die aan dezelfde privacystandaarden zijn gehouden:
          </p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">Make.com</strong> — voor het automatiseren van
                e-mailworkflows.
              </>,
              <>
                <strong className="text-ink">Anthropic</strong> — voor AI-verwerking van
                e-mailinhoud.
              </>,
              <>
                <strong className="text-ink">Google Workspace / Microsoft 365</strong> — voor
                e-mailinfrastructuur (afhankelijk van de keuze van de opdrachtgever).
              </>,
            ]}
          />
          <p>
            Met alle sub-verwerkers zijn verwerkersovereenkomsten gesloten. Gegevens worden
            uitsluitend gedeeld voor zover noodzakelijk voor de uitvoering van de Dienst.
          </p>
        </LegalArticle>

        <LegalArticle num="7" title="Uw rechten">
          <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">Inzage:</strong> u kunt opvragen welke gegevens wij
                van u verwerken.
              </>,
              <>
                <strong className="text-ink">Correctie:</strong> u kunt onjuiste gegevens laten
                corrigeren.
              </>,
              <>
                <strong className="text-ink">Verwijdering:</strong> u kunt verzoeken uw gegevens
                te laten verwijderen, voor zover dit niet in strijd is met wettelijke
                bewaarverplichtingen.
              </>,
              <>
                <strong className="text-ink">Bezwaar:</strong> u kunt bezwaar maken tegen de
                verwerking van uw persoonsgegevens.
              </>,
              <>
                <strong className="text-ink">Overdraagbaarheid:</strong> u kunt verzoeken uw
                gegevens in een leesbaar formaat te ontvangen.
              </>,
            ]}
          />
          <p>
            Voor het uitoefenen van uw rechten kunt u contact opnemen via{" "}
            <a href="mailto:info@brantomicsai.nl" className="text-blue hover:underline">
              info@brantomicsai.nl
            </a>
            . Wij reageren binnen 30 dagen.
          </p>
        </LegalArticle>

        <LegalArticle num="8" title="Klachten">
          <p>
            Indien u niet tevreden bent over de wijze waarop wij met uw persoonsgegevens omgaan,
            heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP). U
            kunt de AP bereiken via{" "}
            <a
              href="https://www.autoriteitpersoonsgegevens.nl"
              target="_blank"
              rel="noreferrer"
              className="text-blue hover:underline"
            >
              www.autoriteitpersoonsgegevens.nl
            </a>
            .
          </p>
          <p>
            Wij verzoeken u echter eerst contact met ons op te nemen, zodat wij de mogelijkheid
            hebben eventuele bezwaren te bespreken en op te lossen.
          </p>
        </LegalArticle>

        <LegalArticle num="9" title="Beveiliging">
          <p>
            Brantomics AI neemt passende technische en organisatorische maatregelen om
            persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik.
            Wij maken gebruik van versleutelde verbindingen en beperken de toegang tot
            persoonsgegevens tot personen voor wie dit noodzakelijk is.
          </p>
        </LegalArticle>

        <LegalArticle num="10" title="Wijzigingen">
          <p>
            Dit privacybeleid kan worden aangepast. De meest recente versie is altijd beschikbaar
            op onze website. Ingrijpende wijzigingen worden per e-mail gecommuniceerd aan actieve
            klanten.
          </p>
        </LegalArticle>
      </div>
    </Layout>
  );
}
