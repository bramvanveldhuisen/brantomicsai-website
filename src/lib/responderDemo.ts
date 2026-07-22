export type Sector = "Webshop" | "Camping/Recreatie" | "Verhuur" | "Horeca" | "Makelaar" | "Kapper/Beauty" | "Anders";
export type EmailType = "Boeking/Reservering" | "Productvraag" | "Klacht" | "Informatieverzoek" | "Annulering";
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
  "Boeking/Reservering": "Bevestiging van je aanvraag",
  Productvraag: "Antwoord op je vraag",
  Klacht: "We lossen dit voor je op",
  Informatieverzoek: "De informatie die je zocht",
  Annulering: "Bevestiging van je annulering",
};

const BODY: Record<EmailType, (bedrijf: string, sector: Sector) => string> = {
  "Boeking/Reservering": (bedrijf) =>
    `Bedankt voor je aanvraag bij ${bedrijf}. We hebben je verzoek in goede orde ontvangen en gaan direct voor je aan de slag. Zodra de beschikbaarheid is bevestigd, ontvang je van ons een definitieve bevestiging met alle details.`,
  Productvraag: (bedrijf, sector) =>
    `Bedankt voor je vraag over ons aanbod bij ${bedrijf}. ${
      sector === "Webshop"
        ? "Het product dat je noemt is op dit moment op voorraad en kan direct verzonden worden."
        : "We hebben je vraag doorgezet naar het juiste team en komen er zo snel mogelijk op terug met de details."
    }`,
  Klacht: () =>
    `Wat vervelend om te horen dat dit is misgegaan, en onze excuses voor het ongemak. We nemen dit serieus en lossen het direct voor je op — je hoort binnen 24 uur van ons hoe we dit rechtzetten.`,
  Informatieverzoek: (bedrijf) =>
    `Bedankt voor je interesse in ${bedrijf}. Hieronder vind je de informatie die je zocht; heb je nog aanvullende vragen, dan helpen we je graag verder.`,
  Annulering: (bedrijf) =>
    `We hebben je annulering bij ${bedrijf} in goede orde verwerkt. Een eventuele terugbetaling wordt binnen enkele werkdagen verwerkt naar de oorspronkelijke betaalmethode.`,
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
