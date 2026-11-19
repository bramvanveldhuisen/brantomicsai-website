export type Sector = "Ontruiming" | "Horeca" | "Verhuizing" | "Schoonmaak" | "Andere dienstverlening";
export type EmailType = "Aanvraag of offerte" | "Vraag over de werkwijze" | "Klacht" | "Informatieverzoek" | "Annulering";
export type Stijl = "Formeel" | "Vriendelijk-zakelijk" | "Informeel";

export const SECTOREN: Sector[] = ["Ontruiming", "Horeca", "Verhuizing", "Schoonmaak", "Andere dienstverlening"];
export const EMAILTYPES: EmailType[] = ["Aanvraag of offerte", "Vraag over de werkwijze", "Klacht", "Informatieverzoek", "Annulering"];

interface GenerateInput {
  bedrijfsnaam: string;
  sector: Sector;
  emailtype: EmailType;
  stijl: Stijl;
}

const GREETING: Record<Stijl, string> = {
  Formeel: "Geachte klant,",
  "Vriendelijk-zakelijk": "Beste klant,",
  Informeel: "Hoi!",
};

const SIGNOFF: Record<Stijl, string> = {
  Formeel: "Met vriendelijke groet,",
  "Vriendelijk-zakelijk": "Met vriendelijke groet,",
  Informeel: "Groetjes,",
};

/** Per branche: hoe een aanvraag, de werkwijze en het aanbod klinken. */
const BRANCHE: Record<Sector, { aanvraagOnderwerp: string; aanvraag: string; werkwijze: string; aanbod: string; afspraak: string }> = {
  Ontruiming: {
    aanvraagOnderwerp: "Je aanvraag voor een ontruiming",
    aanvraag: "Om je een goede prijs te geven, komen we graag eerst vrijblijvend kijken. Wanneer komt een bezichtiging je goed uit? Je mag ook alvast een paar foto’s van de ruimtes sturen.",
    werkwijze: "We beginnen met een bezichtiging. Daarna krijg je een vaste prijs, en na de ontruiming leveren we de ruimte op zoals we hebben afgesproken.",
    aanbod: "We ontruimen woningen, bedrijfspanden, zolders en kelders, en we voeren alles af wat weg moet. Wil je weten wat het voor jou kost? Dan komen we graag vrijblijvend kijken.",
    afspraak: "de ontruiming",
  },
  Horeca: {
    aanvraagOnderwerp: "Je reservering voor een groep",
    aanvraag: "Leuk dat je met een groep bij ons wilt komen eten. Voor welke datum en hoe laat had je gedacht, en met hoeveel personen? Laat het ons ook weten als er allergieën of dieetwensen zijn, dan houden we daar rekening mee.",
    werkwijze: "Je kunt online of telefonisch reserveren. Voor groepen vanaf acht personen stemmen we het menu vooraf met je af, zodat alles op tijd op tafel staat.",
    aanbod: "Op onze website vind je de actuele kaart en onze openingstijden. Heb je een allergie? Geef het door bij je reservering, dan passen we je gerecht aan.",
    afspraak: "je reservering",
  },
  Verhuizing: {
    aanvraagOnderwerp: "Je aanvraag voor een verhuizing",
    aanvraag: "Om je een goede prijs te geven, willen we graag weten van welk adres naar welk adres je verhuist, op welke datum, en hoe groot de woning ongeveer is. Foto’s van de kamers helpen ook.",
    werkwijze: "We beginnen met een inventarisatie, bij je thuis of via foto’s. Daarna krijg je een vaste prijs, en op de verhuisdag zorgen wij dat alles heel aankomt.",
    aanbod: "We verhuizen woningen en bedrijven, regionaal en door het hele land. Inpakken, demonteren en opslag kunnen we ook voor je regelen.",
    afspraak: "de verhuizing",
  },
  Schoonmaak: {
    aanvraagOnderwerp: "Je aanvraag voor schoonmaak",
    aanvraag: "Om je een goede prijs te geven, horen we graag om wat voor ruimte het gaat, hoe groot die ongeveer is en hoe vaak je schoonmaak wilt. Dan sturen we je snel een voorstel.",
    werkwijze: "We spreken vooraf precies af wat er schoongemaakt wordt en hoe vaak. Na de eerste keer bellen we je even om te horen of alles naar wens is.",
    aanbod: "We maken woningen, kantoren en opleverpanden schoon, eenmalig of op vaste dagen.",
    afspraak: "de schoonmaak",
  },
  "Andere dienstverlening": {
    aanvraagOnderwerp: "Je aanvraag",
    aanvraag: "Om je een goed voorstel te sturen, horen we graag wat je precies zoekt, waar en wanneer. Foto’s of een korte omschrijving helpen ons al een eind op weg.",
    werkwijze: "We beginnen met een kort gesprek over wat je nodig hebt. Daarna krijg je een duidelijk voorstel met een vaste prijs, zodat je vooraf weet waar je aan toe bent.",
    aanbod: "Op onze website vind je een overzicht van wat we doen. Staat jouw vraag er niet bij? Mail of bel ons gerust, dan kijken we wat we voor je kunnen doen.",
    afspraak: "je afspraak",
  },
};

const SUBJECT: Record<Exclude<EmailType, "Aanvraag of offerte">, string> = {
  "Vraag over de werkwijze": "Zo werken wij",
  Klacht: "Je melding",
  Informatieverzoek: "Antwoord op je vraag",
  Annulering: "Je annulering",
};

export function generateResponse({ bedrijfsnaam, sector, emailtype, stijl }: GenerateInput) {
  const bedrijf = bedrijfsnaam.trim() || "ons bedrijf";
  const b = BRANCHE[sector];

  let body: string;
  switch (emailtype) {
    case "Aanvraag of offerte":
      body = `Bedankt voor je bericht aan ${bedrijf}. ${b.aanvraag}`;
      break;
    case "Vraag over de werkwijze":
      body = `Bedankt voor je vraag. Bij ${bedrijf} werkt het zo: ${b.werkwijze.charAt(0).toLowerCase()}${b.werkwijze.slice(1)}`;
      break;
    case "Klacht":
      body = "Wat vervelend dat het niet is gegaan zoals je had verwacht, en onze excuses daarvoor. We willen graag precies weten wat er is gebeurd, zodat we het samen kunnen oplossen. Mogen we je even bellen?";
      break;
    case "Informatieverzoek":
      body = `Bedankt voor je vraag aan ${bedrijf}. ${b.aanbod}`;
      break;
    case "Annulering":
      body = `We hebben je annulering van ${b.afspraak} bij ${bedrijf} ontvangen en verwerkt. Wil je later toch een nieuwe afspraak maken? Laat het ons gerust weten.`;
      break;
  }

  return {
    subject: emailtype === "Aanvraag of offerte" ? b.aanvraagOnderwerp : SUBJECT[emailtype],
    body: `${GREETING[stijl]}\n\n${body}\n\nHeb je nog vragen? Antwoord gerust op deze e-mail, we helpen je graag verder.\n\n${SIGNOFF[stijl]}\nTeam ${bedrijf}`,
  };
}
