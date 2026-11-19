export type Sector = "Woningontruiming" | "Spoedontruiming" | "Bedrijfsontruiming" | "Anders";
export type EmailType = "Aanvraag ontruiming" | "Vraag over de werkwijze" | "Klacht" | "Informatieverzoek" | "Annulering";
export type Stijl = "Formeel" | "Vriendelijk-zakelijk" | "Informeel";

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

const SUBJECT: Record<EmailType, string> = {
  "Aanvraag ontruiming": "Je aanvraag voor een ontruiming",
  "Vraag over de werkwijze": "Zo werken wij",
  Klacht: "Je melding",
  Informatieverzoek: "Antwoord op je vraag",
  Annulering: "Je afspraak is geannuleerd",
};

const BODY: Record<EmailType, (bedrijf: string, sector: Sector) => string> = {
  "Aanvraag ontruiming": (bedrijf) =>
    `Bedankt voor je aanvraag bij ${bedrijf}. Om je een goede prijs te geven, komen we graag eerst vrijblijvend kijken. Wanneer komt een bezichtiging je goed uit? Je mag ook alvast een paar foto’s van de ruimtes sturen.`,
  "Vraag over de werkwijze": (bedrijf) =>
    `Bedankt voor je vraag. Bij ${bedrijf} beginnen we met een bezichtiging. Daarna krijg je een vaste prijs, en na de ontruiming leveren we de ruimte op zoals we hebben afgesproken. Heb je nog een vraag? Bel of mail ons gerust.`,
  Klacht: () =>
    `Wat vervelend dat het niet is gegaan zoals je had verwacht, en onze excuses daarvoor. We willen graag precies weten wat er is gebeurd, zodat we het samen kunnen oplossen. Mogen we je even bellen?`,
  Informatieverzoek: (bedrijf) =>
    `Bedankt voor je vraag aan ${bedrijf}. We ontruimen woningen, bedrijfspanden, zolders en kelders, en we voeren alles af wat weg moet. Wil je weten wat het voor jou kost? Dan komen we graag vrijblijvend kijken.`,
  Annulering: (bedrijf) =>
    `We hebben je annulering bij ${bedrijf} ontvangen en de afspraak uit onze planning gehaald. Wil je later toch een nieuwe afspraak maken? Laat het ons gerust weten.`,
};

export function generateResponse({ bedrijfsnaam, sector, emailtype, stijl }: GenerateInput) {
  const bedrijf = bedrijfsnaam.trim() || "ons bedrijf";
  const greeting = GREETING[stijl];
  const body = BODY[emailtype](bedrijf, sector);
  const signoff = SIGNOFF[stijl];

  return {
    subject: SUBJECT[emailtype],
    body: `${greeting}\n\n${body}\n\nHeb je nog vragen? Antwoord gerust op deze e-mail, we helpen je graag verder.\n\n${signoff}\nTeam ${bedrijf}`,
  };
}
