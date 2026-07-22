import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { LegalArticle, LegalList, LegalMeta } from "../components/LegalArticle";

export function AlgemeneVoorwaarden() {
  return (
    <Layout>
      <SEO title="Algemene Voorwaarden" description="Algemene Voorwaarden van Brantomics AI." path="/algemene-voorwaarden" />
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-3xl font-extrabold text-navy tracking-tight mb-2">Algemene Voorwaarden</h1>
        <p className="text-muted mb-10">Brantomics AI — VOF</p>

        <LegalMeta>
          <strong className="text-ink">Versie 1.0 — Maart 2026</strong>
          <br />
          Gevestigd te Maarn, provincie Utrecht
          <br />
          KvK-nummer: 42032331
          <br />
          Adres: Maarnsegrindweg 21, Maarn
          <br />
          E-mail: info@brantomicsai.nl
        </LegalMeta>

        <LegalArticle num="Artikel 1" title="Definities">
          <LegalList
            items={[
              <>
                <strong className="text-ink">Brantomics AI</strong>: de VOF gevestigd te
                Maarnsegrindweg 21, Maarn, ingeschreven bij de Kamer van Koophandel onder nummer
                42032331.
              </>,
              <>
                <strong className="text-ink">Klant</strong>: iedere natuurlijke persoon of
                rechtspersoon die een overeenkomst aangaat met Brantomics AI voor het afnemen van
                diensten.
              </>,
              <>
                <strong className="text-ink">Diensten</strong>: alle werkzaamheden die Brantomics
                AI verricht, waaronder het bouwen, implementeren en beheren van AI-gedreven
                e-mailagenten.
              </>,
              <>
                <strong className="text-ink">AI-agent</strong>: een geautomatiseerde applicatie
                die inkomende e-mails leest, analyseert en automatisch beantwoordt in de
                schrijfstijl en identiteit van de Klant.
              </>,
              <>
                <strong className="text-ink">Overeenkomst</strong>: elke schriftelijke of digitale
                afspraak tussen Brantomics AI en de Klant over de levering van Diensten.
              </>,
            ]}
          />
        </LegalArticle>

        <LegalArticle num="Artikel 2" title="Toepasselijkheid">
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en
            overeenkomsten waarbij Brantomics AI als opdrachtnemer optreedt.
          </p>
          <p>
            Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk
            overeengekomen. Mondelinge afspraken of toezeggingen binden Brantomics AI niet, tenzij
            schriftelijk bevestigd.
          </p>
          <p>
            Eventuele inkoop- of andere voorwaarden van de Klant worden uitdrukkelijk van de hand
            gewezen, tenzij Brantomics AI deze schriftelijk heeft aanvaard.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 3" title="Diensten en uitvoering">
          <p>
            Brantomics AI levert maatwerk AI-e-mailautomatisering op basis van de door de Klant
            aangeleverde bedrijfsinformatie, communicatiestijl en instructies.
          </p>
          <p>
            Brantomics AI verricht haar werkzaamheden naar beste inzicht en vermogen, maar geeft
            geen garantie op foutloze of altijd passende AI-gegenereerde antwoorden. De kwaliteit
            van de output is mede afhankelijk van de door de Klant verstrekte informatie.
          </p>
          <p>
            De Klant blijft te allen tijde zelf verantwoordelijk voor de juridische, commerciële en
            overige consequenties van verstuurde e-mailberichten, ook indien deze automatisch zijn
            gegenereerd door de AI-agent.
          </p>
          <p>
            Na oplevering biedt Brantomics AI een testfase aan. Tijdens deze fase kan de Klant
            feedback geven op het functioneren van de AI-agent, waarna Brantomics AI de nodige
            aanpassingen doorvoert.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 4" title="Verplichtingen van de Klant">
          <LegalList
            items={[
              "De Klant levert tijdig correcte en volledige bedrijfsinformatie, veelgestelde vragen (FAQ's), en voorbeeldemails aan die nodig zijn voor het inrichten van de AI-agent.",
              "De Klant verleent Brantomics AI de benodigde (tijdelijke) toegang tot de e-mailinbox of e-mailinfrastructuur, noodzakelijk voor de implementatie en werking van de Dienst.",
              "Het is de Klant niet toegestaan de AI-agent te gebruiken voor het versturen van spam, misleidende communicatie of inhoud die in strijd is met de wet.",
              "De Klant stelt Brantomics AI onverwijld op de hoogte van wijzigingen in bedrijfsgegevens, producten of communicatiestijl die van invloed zijn op de werking van de AI-agent.",
            ]}
          />
        </LegalArticle>

        <LegalArticle num="Artikel 5" title="Vergoeding en betaling">
          <p>
            De vergoeding voor de Diensten is vastgelegd in de gekozen abonnementsvorm. Alle
            bedragen zijn exclusief btw, tenzij anders vermeld.
          </p>
          <p>
            Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij niet-tijdige
            betaling is Brantomics AI gerechtigd de Dienst op te schorten totdat de vordering
            volledig is voldaan.
          </p>
          <p>
            Eventuele API-kosten van derden (zoals Make.com, Anthropic of Google/Microsoft) die
            direct voortvloeien uit het gebruik van de Dienst, worden doorberekend aan de Klant
            tegen kostprijs, tenzij anders overeengekomen.
          </p>
          <p>Prijswijzigingen worden minimaal 30 dagen van tevoren schriftelijk aangekondigd.</p>
        </LegalArticle>

        <LegalArticle num="Artikel 6" title="Aansprakelijkheid">
          <p>
            De totale aansprakelijkheid van Brantomics AI is beperkt tot het bedrag dat de Klant
            in de drie maanden voorafgaand aan het schadeveroorzakende feit aan Brantomics AI heeft
            betaald.
          </p>
          <p>
            Brantomics AI is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde
            winst of schade als gevolg van onjuiste, onvolledige of niet-passende
            AI-gegenereerde e-mailcontent.
          </p>
          <p>
            De Klant vrijwaart Brantomics AI voor aanspraken van derden die voortvloeien uit het
            gebruik of de inhoud van door de AI-agent verstuurde e-mails.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 7" title="Privacy en gegevensverwerking">
          <p>
            Brantomics AI treedt op als verwerker in de zin van de Algemene Verordening
            Gegevensbescherming (AVG). De Klant is de verwerkingsverantwoordelijke voor de
            persoonsgegevens die via de e-mailinbox worden verwerkt.
          </p>
          <p>
            Partijen sluiten een verwerkersovereenkomst conform de AVG. Brantomics AI verwerkt
            persoonsgegevens uitsluitend op instructie van de Klant.
          </p>
          <p>
            Brantomics AI maakt gebruik van de volgende sub-verwerkers voor de uitvoering van haar
            Diensten: Make.com, Anthropic (AI-verwerking), en Google Workspace of Microsoft 365
            (e-mailinfrastructuur). Een actuele lijst is op verzoek beschikbaar.
          </p>
          <p>
            Bij een datalek dat betrekking heeft op de Dienstverlening, meldt Brantomics AI dit
            aan de Klant binnen 48 uur na ontdekking, zodat de Klant haar wettelijke meldplicht kan
            nakomen.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 8" title="Geheimhouding">
          <p>
            Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie
            die zij in het kader van de Overeenkomst van de andere partij ontvangen. Onder
            vertrouwelijke informatie wordt verstaan alle informatie die als zodanig is aangemerkt
            of waarvan de vertrouwelijkheid uit de aard van de informatie voortvloeit.
          </p>
          <p>
            Deze geheimhoudingsverplichting geldt niet voor informatie die reeds openbaar was of
            die de ontvangende partij rechtmatig van een derde heeft verkregen.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 9" title="Beschikbaarheid">
          <p>
            Brantomics AI spant zich naar beste vermogen in om de continuïteit van de Dienst te
            waarborgen, maar garandeert geen ononderbroken beschikbaarheid. Geplande
            onderhoudswerkzaamheden worden waar mogelijk van tevoren aangekondigd.
          </p>
          <p>
            Brantomics AI is niet aansprakelijk voor schade die voortvloeit uit tijdelijke
            niet-beschikbaarheid van de Dienst, waaronder storingen bij externe aanbieders zoals
            Make.com, Anthropic of e-mailproviders.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 10" title="Duur en opzegging">
          <p>
            De Overeenkomst wordt aangegaan voor de in het abonnement vermelde periode. Bij een
            maandabonnement geldt een opzegtermijn van één maand. Bij een jaarabonnement geldt de
            opzegtermijn conform de gekozen abonnementsvorm.
          </p>
          <p>
            Opzegging dient schriftelijk (per e-mail) te geschieden. Na opzegging worden geen
            reeds betaalde bedragen gerestitueerd, tenzij uitdrukkelijk anders overeengekomen.
          </p>
          <p>
            Brantomics AI is gerechtigd de Overeenkomst per direct te ontbinden indien de Klant in
            verzuim is of handelt in strijd met deze voorwaarden.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 11" title="Intellectueel eigendom">
          <p>
            Alle intellectuele eigendomsrechten met betrekking tot de door Brantomics AI
            ontwikkelde AI-systemen, werkwijzen, documentatie en software berusten bij Brantomics
            AI, tenzij schriftelijk anders is overeengekomen.
          </p>
          <p>
            De Klant verkrijgt uitsluitend een niet-exclusief gebruiksrecht op de Dienst gedurende
            de looptijd van de Overeenkomst. Het is de Klant niet toegestaan de Dienst te
            (door)verkopen, te sublicentiëren of anderszins ter beschikking te stellen aan derden.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 12" title="Overmacht">
          <p>
            Brantomics AI is niet gehouden tot nakoming van enige verplichting indien zij daartoe
            verhinderd is als gevolg van overmacht. Onder overmacht wordt onder meer verstaan:
            storingen in het internet, elektriciteit of telecommunicatie, technische storingen bij
            derde aanbieders, brand, overheidsmaatregelen of pandemieën.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 13" title="Toepasselijk recht en geschillen">
          <p>Op alle overeenkomsten tussen Brantomics AI en de Klant is Nederlands recht van toepassing.</p>
          <p>
            Geschillen die voortvloeien uit of verband houden met een Overeenkomst worden bij
            uitsluiting voorgelegd aan de bevoegde rechter van de Rechtbank Midden-Nederland.
          </p>
        </LegalArticle>

        <LegalArticle num="Artikel 14" title="Wijzigingen">
          <p>
            Brantomics AI behoudt zich het recht voor deze algemene voorwaarden te wijzigen.
            Wijzigingen worden minimaal 30 dagen van tevoren bekendgemaakt via e-mail of op de
            website. Voortgezet gebruik van de Dienst na de ingangsdatum van de wijzigingen geldt
            als aanvaarding van de gewijzigde voorwaarden.
          </p>
        </LegalArticle>
      </div>
    </Layout>
  );
}
