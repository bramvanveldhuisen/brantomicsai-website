/**
 * Juridische teksten, letterlijk overgenomen uit de Word-documenten van Brantomics AI
 * (map "Juridische documenten de nieuwe goede"). Niet herschrijven: pas het Word-document aan
 * en zet het opnieuw om. **tekst** is vet.
 */

export type Blok =
  | { t: "p"; tekst: string }
  | { t: "sub"; tekst: string }
  | { t: "tabel"; kop: string[]; rijen: string[][] };

export type JuridischDocument = {
  titel: string;
  meta: string[];
  artikelen: { num: string; titel: string; blokken: Blok[] }[];
};

export const PRIVACYBELEID: JuridischDocument = {
  "titel": "Privacybeleid Brantomics AI",
  "meta": [
    "Laatste update: 19 november 2026",
    "Brantomics AI VOF, Maarnsegrindweg 21, Maarn",
    "KvK 42032331, btw NL869394964B01",
    "info@brantomicsai.nl, brantomicsai.nl"
  ],
  "artikelen": [
    {
      "num": "Artikel 1.",
      "titel": "Wie zijn wij",
      "blokken": [
        {
          "t": "p",
          "tekst": "Brantomics AI is een vennootschap onder firma in Maarn. We maken AI-producten voor bedrijven: het prijsindicatie-systeem dat een bedrijf op zijn eigen website zet, de Email Responder en review-opvolging. In dit privacybeleid staat welke persoonsgegevens we verwerken, waarom, hoe lang, en wat je rechten zijn. Het prijsindicatie-systeem en review-opvolging zijn op 19 november 2026 nog in ontwikkeling. De onderdelen van dit privacybeleid over die twee producten gelden zodra een bedrijf ze bij ons afneemt en ze live staan. Tot die tijd verwerken we via die producten geen gegevens."
        }
      ]
    },
    {
      "num": "Artikel 2.",
      "titel": "Twee rollen",
      "blokken": [
        {
          "t": "p",
          "tekst": "**Wij als verantwoordelijke.** Voor gegevens die we voor ons eigen bedrijf gebruiken, bepalen wij het doel en de middelen. Het gaat om ons contactformulier, zakelijke contacten met bedrijven die we benaderen, onze klantadministratie, accounts voor het dashboard en onze website."
        },
        {
          "t": "p",
          "tekst": "**Wij als verwerker.** Gebruik je de website van een bedrijf dat ons prijsindicatie-systeem heeft, mail je een bedrijf dat de Email Responder gebruikt, of krijg je een reviewverzoek van een bedrijf dat review-opvolging gebruikt? Dan verwerken wij je gegevens in opdracht van dat bedrijf. Dat bedrijf is de verwerkingsverantwoordelijke en zijn eigen privacyverklaring is dan leidend. We hebben met elk van deze bedrijven een verwerkersovereenkomst."
        }
      ]
    },
    {
      "num": "Artikel 3.",
      "titel": "Welke gegevens verwerken wij",
      "blokken": [
        {
          "t": "sub",
          "tekst": "Als verantwoordelijke"
        },
        {
          "t": "p",
          "tekst": "**3.1 Contactformulier en gesprekken**: naam, bedrijfsnaam, e-mailadres, telefoonnummer, het product waar je interesse in hebt en wat je ons schrijft of vertelt."
        },
        {
          "t": "p",
          "tekst": "**3.2 Zakelijke contacten die we benaderen**: bedrijfsnaam, adres, telefoonnummer, e-mailadres en website die een bedrijf zelf openbaar maakt, bijvoorbeeld op zijn eigen website of Google-bedrijfsprofiel, en de naam van een contactpersoon als we die spreken, plus notities over ons contact."
        },
        {
          "t": "p",
          "tekst": "**3.3 Klantadministratie**: namen en contactgegevens van contactpersonen bij klanten, offertes, contracten en facturen."
        },
        {
          "t": "p",
          "tekst": "**3.4 Accounts voor het dashboard**: naam, e-mailadres en de gegevens die nodig zijn om veilig in te loggen. Wachtwoorden slaan we nooit leesbaar op."
        },
        {
          "t": "p",
          "tekst": "**3.5 Website**: onze server kan technische gegevens verwerken die nodig zijn om de website veilig te leveren, zoals je IP-adres. We gebruiken geen analytische, tracking- of advertentiecookies (zie artikel 11)."
        },
        {
          "t": "sub",
          "tekst": "Als verwerker, in opdracht van onze klanten"
        },
        {
          "t": "p",
          "tekst": "**3.6 Prijsindicatie-systeem**: je naam, telefoonnummer en e-mailadres, het adres van de woning, het soort en de grootte van de woning, woninggegevens uit het Kadaster (zoals oppervlakte en bouwjaar), de foto's die je maakt, je antwoorden over de klus, de gewenste periode en de indicatie die je te zien kreeg."
        },
        {
          "t": "p",
          "tekst": "**3.7 Email Responder**: de e-mails die je aan het bedrijf stuurt en de gegevens die daarin staan, zoals naam, e-mailadres en wat je vraagt."
        },
        {
          "t": "p",
          "tekst": "**3.8 Review-opvolging**: je naam en e-mailadres, de datum van de afgeronde klus, of je een verzoek hebt gekregen of je hebt afgemeld, en reviews die je openbaar plaatst."
        }
      ]
    },
    {
      "num": "Artikel 4.",
      "titel": "Doelen en grondslagen",
      "blokken": [
        {
          "t": "p",
          "tekst": "Gegevens uit het contactformulier en gesprekken gebruiken we om je vraag te beantwoorden en een eventuele overeenkomst voor te bereiden: uitvoering van een overeenkomst of het nemen van stappen daarvoor (artikel 6 lid 1 sub b AVG), of ons gerechtvaardigd belang om zakelijke vragen te beantwoorden (sub f)."
        },
        {
          "t": "p",
          "tekst": "Zakelijke contactgegevens van bedrijven die we benaderen gebruiken we om ons aanbod onder de aandacht te brengen, op basis van gerechtvaardigd belang (sub f). Ongevraagde e-mail sturen we alleen naar een adres dat het bedrijf zelf daarvoor openbaar maakt. Elke mail vermeldt wie we zijn en hoe je je afmeldt: antwoord met stop en we benaderen je niet meer. Voordat we een bedrijf bellen, kijken we in het handelsregister van de KvK welke rechtsvorm het heeft. Een eenmanszaak, vof, cv of maatschap bellen we alleen met voorafgaande toestemming. Zeg je aan de telefoon dat je geen contact wilt, dan benaderen we je ook niet meer."
        },
        {
          "t": "p",
          "tekst": "Klantadministratie en accounts gebruiken we om de overeenkomst uit te voeren (sub b) en om aan wettelijke plichten te voldoen, zoals de fiscale bewaarplicht (sub c)."
        },
        {
          "t": "p",
          "tekst": "Gegevens die we als verwerker verwerken, gebruiken we alleen om het product voor ons klantbedrijf te laten werken. De grondslag bepaalt dat bedrijf. We gebruiken deze gegevens nooit voor onze eigen doelen."
        },
        {
          "t": "p",
          "tekst": "We verkopen persoonsgegevens nooit en gebruiken ze niet voor marketing van derden."
        }
      ]
    },
    {
      "num": "Artikel 5.",
      "titel": "Foto's en AI",
      "blokken": [
        {
          "t": "p",
          "tekst": "In het prijsindicatie-systeem schat AI van Anthropic op basis van je foto's in wat er moet worden ontruimd en hoeveel. Het bedrag dat je ziet, komt niet van de AI maar uit de tarieven die het bedrijf zelf heeft ingesteld. Is de inschatting te onzeker, dan krijg je geen bedrag te zien en wordt een bezichtiging voorgesteld. De indicatie is geen besluit over jou: het bedrijf neemt contact met je op en spreekt de prijs met je af."
        },
        {
          "t": "p",
          "tekst": "We vragen je om geen personen, identiteitsbewijzen, medische stukken of andere gevoelige documenten te fotograferen. Staan er toch zulke gegevens op een foto, dan gebruiken we die alleen voor de inschatting en de aanvraag."
        },
        {
          "t": "p",
          "tekst": "Anthropic gebruikt wat we via hun API aanleveren niet om modellen te trainen en verwijdert het standaard binnen 30 dagen. Alleen content die hun veiligheidssystemen als schending van hun gebruiksbeleid markeren, of die zij wettelijk moeten bewaren, kan langer blijven staan."
        }
      ]
    },
    {
      "num": "Artikel 6.",
      "titel": "Bewaartermijnen",
      "blokken": [
        {
          "t": "p",
          "tekst": "**6.1 Foto's en aanvragen uit het prijsindicatie-systeem**: worden 90 dagen na binnenkomst automatisch van onze server verwijderd, en uiterlijk 30 dagen daarna ook uit back-ups. De kopie die het bedrijf per e-mail ontvangt, staat in de mailbox van dat bedrijf en valt onder zijn eigen bewaartermijnen."
        },
        {
          "t": "p",
          "tekst": "**6.2 E-mail via de Email Responder**: we slaan e-mails niet blijvend op. Ze staan tijdelijk in de uitvoeringslogs van Make.com, die binnen maximaal 30 dagen automatisch worden verwijderd."
        },
        {
          "t": "p",
          "tekst": "**6.3 Gegevens voor review-opvolging**: zolang de overeenkomst met het bedrijf loopt, en uiterlijk 30 dagen na het einde daarvan verwijderd of teruggegeven."
        },
        {
          "t": "p",
          "tekst": "**6.4 Alle gegevens die we als verwerker hebben**: uiterlijk 30 dagen na het einde van de overeenkomst met het bedrijf verwijderd of teruggegeven, en eerder waar hierboven een kortere termijn staat."
        },
        {
          "t": "p",
          "tekst": "**6.5 Accounts voor het dashboard**: tot het account wordt verwijderd, en uiterlijk 30 dagen na het einde van de overeenkomst."
        },
        {
          "t": "p",
          "tekst": "**6.6 Contactformulier en zakelijke contacten die we benaderen**: maximaal 1 jaar na het laatste contact."
        },
        {
          "t": "p",
          "tekst": "**6.7 Klantadministratie** (contactpersonen, offertes, contracten): maximaal 2 jaar na het einde van de overeenkomst."
        },
        {
          "t": "p",
          "tekst": "**6.8 Facturen**: 7 jaar, vanwege de wettelijke bewaarplicht."
        }
      ]
    },
    {
      "num": "Artikel 7.",
      "titel": "Delen met derden",
      "blokken": [
        {
          "t": "p",
          "tekst": "We schakelen de volgende partijen in. Ze krijgen alleen de gegevens die nodig zijn voor hun taak. Voor onze eigen e-mail, agenda en bestanden gebruiken we daarnaast diensten van onder meer Google en Microsoft."
        },
        {
          "t": "tabel",
          "kop": [
            "Partij",
            "Land",
            "Waarvoor",
            "Waarborg"
          ],
          "rijen": [
            [
              "Hetzner Online GmbH",
              "Duitsland (datacenter Falkenstein)",
              "Hosting van onze website en ons interne teamsysteem, en straks van het Prijsindicatie-systeem en het Dashboard; opslag van aanvragen en foto's",
              "Verwerkersovereenkomst van Hetzner; verwerking binnen de EU"
            ],
            [
              "Anthropic PBC",
              "Verenigde Staten",
              "AI: volume-inschatting uit foto's, concept-antwoorden en reviewteksten",
              "Data Processing Addendum met standaardcontractbepalingen (SCC's), onderdeel van de Commercial Terms; geen training op API-data; invoer en uitvoer standaard binnen 30 dagen verwijderd, met uitzondering voor content die als beleidsschending is gemarkeerd (tot 2 jaar) of een wettelijke plicht"
            ],
            [
              "Make.com (Celonis)",
              "EU / Verenigde Staten",
              "Verwerken van ons contactformulier en automatisering van e-mailstromen; tijdelijke opslag in uitvoeringslogs van maximaal 30 dagen",
              "DPA van Make (onderdeel van de gebruiksvoorwaarden); SCC's voor doorgifte buiten de EER"
            ],
            [
              "Google (Gmail / Google Workspace)",
              "EU / Verenigde Staten",
              "De mailbox van de Klant: ontvangen van e-mail, klaarzetten van concepten, versturen van reviewverzoeken, als de Klant zijn mail bij Google heeft",
              "Verwerkersvoorwaarden van Google; SCC's"
            ],
            [
              "Microsoft (Microsoft 365 / Outlook)",
              "EU / Verenigde Staten",
              "Idem, als de Klant zijn mail bij Microsoft heeft",
              "Verwerkersvoorwaarden van Microsoft; SCC's"
            ]
          ]
        },
        {
          "t": "p",
          "tekst": "Voor woninggegevens vraagt het prijsindicatie-systeem bij het Kadaster (via PDOK) de openbare gegevens van het adres op. Het Kadaster ontvangt daarbij alleen het adres, geen naam of foto's."
        },
        {
          "t": "p",
          "tekst": "Anthropic en een deel van de diensten van Make, Google en Microsoft zitten in de Verenigde Staten. Persoonsgegevens gaan alleen buiten de Europese Economische Ruimte als daarvoor passende waarborgen gelden, zoals standaardcontractbepalingen. Onze eigen server met foto's en aanvragen staat in Duitsland."
        }
      ]
    },
    {
      "num": "Artikel 8.",
      "titel": "Je rechten",
      "blokken": [
        {
          "t": "p",
          "tekst": "Je hebt recht op inzage, correctie, verwijdering, beperking van de verwerking, bezwaar en overdraagbaarheid van je gegevens. Stuur je verzoek naar info@brantomicsai.nl. We reageren binnen 30 dagen."
        },
        {
          "t": "p",
          "tekst": "Gaat je verzoek over gegevens die we verwerken voor een bedrijf dat onze producten gebruikt, zoals een aanvraag via het prijsindicatie-systeem? Dan sturen we je verzoek door naar dat bedrijf en helpen we het om je verzoek af te handelen. Je kunt ook direct contact opnemen met dat bedrijf."
        }
      ]
    },
    {
      "num": "Artikel 9.",
      "titel": "Klachten",
      "blokken": [
        {
          "t": "p",
          "tekst": "Ben je niet tevreden over hoe we met je gegevens omgaan, neem dan eerst contact met ons op. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl."
        }
      ]
    },
    {
      "num": "Artikel 10.",
      "titel": "Beveiliging",
      "blokken": [
        {
          "t": "p",
          "tekst": "We nemen passende technische en organisatorische maatregelen tegen ongeoorloofde toegang, verlies en misbruik. Alle verbindingen zijn versleuteld, het dashboard is alleen bereikbaar met een eigen account, en alleen de vennoten en medewerkers van Brantomics AI die de gegevens voor hun werk nodig hebben en aan geheimhouding gebonden zijn, hebben toegang tot de systemen met persoonsgegevens. Een datalek melden we binnen 48 uur aan het betrokken klantbedrijf, en waar wij zelf verantwoordelijke zijn, aan de Autoriteit Persoonsgegevens als dat wettelijk moet."
        }
      ]
    },
    {
      "num": "Artikel 11.",
      "titel": "Cookies",
      "blokken": [
        {
          "t": "p",
          "tekst": "Onze website en het prijsindicatie-systeem plaatsen geen analytische, tracking- of advertentiecookies. We gebruiken alleen functionele, technisch noodzakelijke opslag, bijvoorbeeld om je ingevulde stappen te onthouden of je ingelogd te houden in het dashboard. Daar is geen toestemming voor nodig. Gaan we ooit andere cookies gebruiken, dan passen we dit artikel eerst aan en vragen we je vooraf toestemming."
        }
      ]
    },
    {
      "num": "Artikel 12.",
      "titel": "Wijzigingen",
      "blokken": [
        {
          "t": "p",
          "tekst": "We kunnen dit privacybeleid aanpassen. De nieuwste versie staat altijd op brantomicsai.nl/privacybeleid. Grote wijzigingen melden we per e-mail aan onze klanten. Deze versie vervangt het privacybeleid van 19 september 2026."
        }
      ]
    }
  ]
};

export const ALGEMENE_VOORWAARDEN: JuridischDocument = {
  "titel": "Algemene Voorwaarden Brantomics AI",
  "meta": [
    "Versie 2.0, 19 november 2026",
    "Brantomics AI VOF, Maarnsegrindweg 21, Maarn",
    "KvK 42032331, btw NL869394964B01",
    "info@brantomicsai.nl, brantomicsai.nl"
  ],
  "artikelen": [
    {
      "num": "Artikel 1.",
      "titel": "Definities",
      "blokken": [
        {
          "t": "p",
          "tekst": "**1.1 Brantomics AI**: de vennootschap onder firma Brantomics AI, gevestigd aan de Maarnsegrindweg 21 in Maarn, ingeschreven bij de Kamer van Koophandel onder nummer 42032331."
        },
        {
          "t": "p",
          "tekst": "**1.2 Klant**: iedere natuurlijke persoon of rechtspersoon die handelt in de uitoefening van een beroep of bedrijf en een Overeenkomst sluit met Brantomics AI. Brantomics AI levert niet aan consumenten."
        },
        {
          "t": "p",
          "tekst": "**1.3 Eindklant**: iedere persoon of organisatie die contact heeft met de Klant of de website van de Klant gebruikt, zoals een bezoeker die via het Prijsindicatie-systeem een aanvraag doet, iemand die de Klant mailt, of een klant van de Klant die een reviewverzoek ontvangt."
        },
        {
          "t": "p",
          "tekst": "**1.4 Producten**: het Prijsindicatie-systeem, de Email Responder en Review-opvolging, en ieder ander product dat in de Overeenkomst is opgenomen. Waar deze voorwaarden spreken van de Dienst, gaat het om de Producten die de Klant afneemt, inclusief inrichting en beheer."
        },
        {
          "t": "p",
          "tekst": "**1.5 Prijsindicatie-systeem**: software die de Klant met een stuk code op zijn eigen website plaatst. Een Eindklant maakt daarmee foto's, vult gegevens over de klus in en ziet een prijsindicatie die is berekend uit de Tarieventabel. De Klant ontvangt de aanvraag per e-mail en in het Dashboard."
        },
        {
          "t": "p",
          "tekst": "**1.6 Tarieventabel**: de tarieven, minimumbedragen, toeslagen, het werkgebied en de andere rekenregels die de Klant zelf invult of aan Brantomics AI aanlevert."
        },
        {
          "t": "p",
          "tekst": "**1.7 Email Responder**: een AI-agent die inkomende e-mails in de mailbox van de Klant leest en daarvoor concept-antwoorden klaarzet in de schrijfstijl van de Klant."
        },
        {
          "t": "p",
          "tekst": "**1.8 Review-opvolging**: een Product dat na een afgeronde klus namens de Klant automatisch een verzoek om een review per e-mail verstuurt vanuit de mailbox van de Klant, en dat voor nieuwe reviews concept-antwoorden klaarzet."
        },
        {
          "t": "p",
          "tekst": "**1.9 Dashboard**: de beveiligde online omgeving waarin de Klant inlogt om instellingen te beheren en aanvragen te bekijken."
        },
        {
          "t": "p",
          "tekst": "**1.10 Overeenkomst**: iedere schriftelijke of digitale afspraak tussen Brantomics AI en de Klant over de levering van Producten, zoals een geaccepteerde offerte of een afgesloten abonnement, samen met deze voorwaarden en de verwerkersovereenkomst."
        }
      ]
    },
    {
      "num": "Artikel 2.",
      "titel": "Toepasselijkheid",
      "blokken": [
        {
          "t": "p",
          "tekst": "**2.1** Deze voorwaarden gelden voor alle aanbiedingen, offertes en Overeenkomsten waarbij Brantomics AI Producten levert."
        },
        {
          "t": "p",
          "tekst": "**2.2** Afwijkingen gelden alleen als ze schriftelijk zijn overeengekomen. Mondelinge afspraken binden Brantomics AI pas als ze schriftelijk zijn bevestigd. E-mail geldt in deze voorwaarden als schriftelijk."
        },
        {
          "t": "p",
          "tekst": "**2.3** Inkoop- of andere voorwaarden van de Klant gelden niet, tenzij Brantomics AI ze schriftelijk heeft aanvaard."
        },
        {
          "t": "p",
          "tekst": "**2.4** Bij strijd tussen de Overeenkomst en deze voorwaarden gaat de Overeenkomst voor. Voor de verwerking van persoonsgegevens gaat de verwerkersovereenkomst voor."
        }
      ]
    },
    {
      "num": "Artikel 3.",
      "titel": "Algemeen over de Producten",
      "blokken": [
        {
          "t": "p",
          "tekst": "**3.1** Brantomics AI levert vaste Producten. Ze worden ingericht op basis van de informatie die de Klant aanlevert, zoals bedrijfsgegevens, huisstijl, tarieven, veelgestelde vragen en voorbeeldmails."
        },
        {
          "t": "p",
          "tekst": "**3.2** Een deel van de Producten werkt met kunstmatige intelligentie van derden. Brantomics AI werkt naar beste inzicht en vermogen, maar garandeert niet dat uitkomsten van AI altijd juist, volledig of passend zijn. De kwaliteit hangt mede af van de informatie die de Klant en de Eindklant aanleveren."
        },
        {
          "t": "p",
          "tekst": "**3.3** De Klant blijft verantwoordelijk voor wat er via de Producten namens hem wordt getoond, klaargezet of verstuurd, en voor de afspraken die hij met Eindklanten maakt."
        },
        {
          "t": "p",
          "tekst": "**3.4** Na oplevering volgt een testfase waarin de Klant feedback geeft en Brantomics AI de nodige aanpassingen doet."
        },
        {
          "t": "p",
          "tekst": "**3.5** Brantomics AI mag de Producten verbeteren en technisch aanpassen. Een wijziging die een overeengekomen functie wezenlijk beperkt, kondigt Brantomics AI minimaal 30 dagen vooraf per e-mail aan. De Klant mag de Overeenkomst dan opzeggen tegen de ingangsdatum van die wijziging."
        },
        {
          "t": "p",
          "tekst": "**3.6** Het Prijsindicatie-systeem en Review-opvolging zijn op 19 november 2026 nog in ontwikkeling en worden nog niet geleverd. De bepalingen in deze voorwaarden die alleen over deze Producten gaan, gelden pas vanaf het moment dat een van deze Producten in een Overeenkomst wordt opgenomen en geleverd."
        }
      ]
    },
    {
      "num": "Artikel 4.",
      "titel": "Prijsindicatie-systeem",
      "blokken": [
        {
          "t": "p",
          "tekst": "**4.1** De prijsindicatie die een Eindklant te zien krijgt is uitsluitend een indicatie. Het is geen offerte en geen bindend aanbod van de Klant of van Brantomics AI. Het systeem vermeldt dit bij de indicatie en de Klant haalt die vermelding niet weg."
        },
        {
          "t": "p",
          "tekst": "**4.2** De AI schat alleen in wat er moet worden ontruimd en hoeveel, op basis van de foto's en gegevens van de Eindklant. Het bedrag komt uitsluitend uit de Tarieventabel van de Klant. Brantomics AI stelt zelf geen prijzen vast. Is de inschatting te onzeker, dan toont het systeem geen bedrag en stelt het een bezichtiging voor."
        },
        {
          "t": "p",
          "tekst": "**4.3** De Klant is verantwoordelijk voor de juistheid van de Tarieventabel, voor de manier waarop prijzen aan consumenten worden getoond (zoals vermelding inclusief btw) en voor de prijs die hij uiteindelijk met de Eindklant afspreekt. Brantomics AI staat er niet voor in dat een indicatie overeenkomt met de werkelijke kosten van een klus."
        },
        {
          "t": "p",
          "tekst": "**4.4** Woninggegevens zoals oppervlakte en bouwjaar haalt het systeem op uit de openbare registers van het Kadaster (via PDOK). Brantomics AI staat niet in voor de juistheid of beschikbaarheid van die gegevens."
        },
        {
          "t": "p",
          "tekst": "**4.5** De Klant plaatst de code op zijn eigen website en zorgt dat zijn website voldoet aan de wet, waaronder een privacyverklaring die de verwerking via het Prijsindicatie-systeem vermeldt. Brantomics AI helpt bij het plaatsen waar dat nodig is."
        },
        {
          "t": "p",
          "tekst": "**4.6** Het systeem vraagt Eindklanten om geen personen, identiteitsbewijzen, medische stukken of andere gevoelige documenten te fotograferen. Komen zulke gegevens toch mee, dan worden ze alleen gebruikt voor de inschatting en de aanvraag, en verder behandeld zoals in de verwerkersovereenkomst staat."
        },
        {
          "t": "p",
          "tekst": "**4.7** Het gebruik van de code is beperkt tot de websites van de Klant die in de Overeenkomst staan. Na het einde van de Overeenkomst werkt de code niet meer en verwijdert de Klant hem van zijn website."
        }
      ]
    },
    {
      "num": "Artikel 5.",
      "titel": "Email Responder",
      "blokken": [
        {
          "t": "p",
          "tekst": "**5.1** Tenzij schriftelijk anders overeengekomen, verstuurt de Email Responder geen e-mails zelfstandig. Hij zet concept-antwoorden klaar in de mailbox van de Klant, die de Klant zelf beoordeelt, eventueel aanpast en verstuurt."
        },
        {
          "t": "p",
          "tekst": "**5.2** Nieuwe klanten kunnen de Email Responder een week kosteloos en vrijblijvend proberen, zonder dat vooraf betaalgegevens worden gevraagd. Na deze proefweek gaat het gebruik niet automatisch en niet stilzwijgend over in een betaalde Overeenkomst: de Klant bevestigt actief of hij verder wil, waarna Brantomics AI een Overeenkomst en factuur opstelt. Ook tijdens de proefweek draait de Email Responder pas op echte e-mail nadat de verwerkersovereenkomst is getekend."
        },
        {
          "t": "p",
          "tekst": "**5.3** Voor de andere Producten geldt geen proefweek, tenzij schriftelijk anders overeengekomen."
        }
      ]
    },
    {
      "num": "Artikel 6.",
      "titel": "Review-opvolging",
      "blokken": [
        {
          "t": "p",
          "tekst": "**6.1** Review-opvolging verstuurt reviewverzoeken automatisch, zonder dat de Klant elk bericht vooraf controleert. Ze gaan per e-mail vanuit de mailbox van de Klant naar Eindklanten die de Klant als klant van een afgeronde klus aanwijst. De Klant keurt de tekst en het moment van verzenden vooraf goed bij het inrichten."
        },
        {
          "t": "p",
          "tekst": "**6.2** De Klant is de afzender van de reviewverzoeken. Hij is ervoor verantwoordelijk dat hij de Eindklant hiervoor mag mailen, dat hij alleen gegevens aanlevert van zijn eigen klanten, en dat hij zich houdt aan de regels voor elektronische berichten en reviews, waaronder de Telecommunicatiewet en de regels van het reviewplatform. De Klant vraagt niet om nep-reviews en biedt geen beloning voor een review zonder dat dit wordt vermeld."
        },
        {
          "t": "p",
          "tekst": "**6.3** Elk reviewverzoek bevat een eenvoudige manier om af te melden. Wie zich afmeldt, krijgt via de Dienst geen reviewverzoeken van die Klant meer."
        },
        {
          "t": "p",
          "tekst": "**6.4** Antwoorden op nieuwe reviews zet Review-opvolging als concept klaar. De Klant beoordeelt ze en plaatst ze zelf."
        },
        {
          "t": "p",
          "tekst": "**6.5** Brantomics AI garandeert geen aantal of soort reviews en heeft geen invloed op de inhoud van reviews of op het beleid van reviewplatforms."
        }
      ]
    },
    {
      "num": "Artikel 7.",
      "titel": "Verplichtingen van de Klant",
      "blokken": [
        {
          "t": "p",
          "tekst": "**7.1** De Klant levert tijdig juiste en volledige informatie aan die nodig is voor het inrichten van de Producten."
        },
        {
          "t": "p",
          "tekst": "**7.2** De Klant geeft Brantomics AI de toegang die nodig is tot zijn mailbox, website of andere systemen, en meldt wijzigingen in bedrijfsgegevens, tarieven of werkwijze die de werking van de Producten raken."
        },
        {
          "t": "p",
          "tekst": "**7.3** De Klant gebruikt de Producten niet voor spam, misleidende communicatie of andere inhoud of handelingen die in strijd zijn met de wet."
        },
        {
          "t": "p",
          "tekst": "**7.4** De Klant houdt inloggegevens voor het Dashboard geheim, geeft alleen eigen medewerkers toegang die dat nodig hebben, en meldt misbruik of vermoeden van misbruik direct aan Brantomics AI."
        }
      ]
    },
    {
      "num": "Artikel 8.",
      "titel": "Vergoeding en betaling",
      "blokken": [
        {
          "t": "p",
          "tekst": "**8.1** De vergoeding staat in de Overeenkomst. Dat kan een vast bedrag per maand of per jaar zijn, eventueel met eenmalige kosten voor inrichting. Alle bedragen zijn exclusief btw, tenzij anders vermeld."
        },
        {
          "t": "p",
          "tekst": "**8.2** Facturen worden binnen 14 dagen na factuurdatum betaald. Bij te late betaling mag Brantomics AI de Dienst opschorten totdat volledig is betaald."
        },
        {
          "t": "p",
          "tekst": "**8.3** De kosten van diensten van derden die Brantomics AI gebruikt, zoals hosting, Make.com en Anthropic, zijn bij normaal gebruik inbegrepen. Voor de Email Responder is normaal gebruik maximaal 2.000 inkomende e-mails per maand. Voor de andere Producten staat in de Overeenkomst wat normaal gebruik is. Wordt normaal gebruik in twee opeenvolgende maanden overschreden, dan overleggen partijen eerst. Brantomics AI brengt nooit extra kosten in rekening zonder voorafgaand schriftelijk akkoord van de Klant."
        },
        {
          "t": "p",
          "tekst": "**8.4** Kosten van diensten die de Klant zelf afneemt, zoals zijn mailbox bij Google of Microsoft en zijn eigen website en hosting, blijven voor rekening van de Klant."
        },
        {
          "t": "p",
          "tekst": "**8.5** Prijswijzigingen worden minimaal 30 dagen vooraf schriftelijk aangekondigd."
        },
        {
          "t": "p",
          "tekst": "**8.6** Bij een betalingsachterstand is de Klant naast het openstaande bedrag de wettelijke handelsrente verschuldigd vanaf de vervaldatum, en de buitengerechtelijke incassokosten volgens de Wet normering buitengerechtelijke incassokosten."
        }
      ]
    },
    {
      "num": "Artikel 9.",
      "titel": "Aansprakelijkheid",
      "blokken": [
        {
          "t": "p",
          "tekst": "**9.1** De totale aansprakelijkheid van Brantomics AI is beperkt tot het bedrag dat de Klant in de drie maanden voor het schadeveroorzakende feit aan Brantomics AI heeft betaald."
        },
        {
          "t": "p",
          "tekst": "**9.2** Brantomics AI is niet aansprakelijk voor indirecte schade, gevolgschade en gederfde winst. Brantomics AI is ook niet aansprakelijk voor schade door een verschil tussen een prijsindicatie en de werkelijke kosten of afgesproken prijs, door fouten in de Tarieventabel of in gegevens uit openbare registers, door onjuiste of onvolledige AI-uitkomsten, of door de inhoud van reviews en reacties van Eindklanten."
        },
        {
          "t": "p",
          "tekst": "**9.3** De Klant vrijwaart Brantomics AI voor aanspraken van Eindklanten en andere derden die voortkomen uit prijsindicaties, e-mails en reviewverzoeken die namens de Klant via de Producten zijn getoond of verstuurd, en uit gegevens die de Klant heeft aangeleverd."
        },
        {
          "t": "p",
          "tekst": "**9.4** De beperkingen in dit artikel gelden niet bij opzet of bewuste roekeloosheid van Brantomics AI."
        }
      ]
    },
    {
      "num": "Artikel 10.",
      "titel": "Privacy en gegevensverwerking",
      "blokken": [
        {
          "t": "p",
          "tekst": "**10.1** Voor persoonsgegevens van Eindklanten is de Klant verwerkingsverantwoordelijke en Brantomics AI verwerker in de zin van de AVG. Brantomics AI verwerkt die gegevens alleen op instructie van de Klant."
        },
        {
          "t": "p",
          "tekst": "**10.2** Partijen sluiten een verwerkersovereenkomst. Een Product draait pas op echte gegevens van Eindklanten nadat die is getekend."
        },
        {
          "t": "p",
          "tekst": "**10.3** Brantomics AI gebruikt de volgende sub-verwerkers: Hetzner Online GmbH (hosting, Duitsland), Anthropic PBC (AI, Verenigde Staten), Make.com (automatisering), en Google of Microsoft (de mailbox van de Klant). De actuele lijst staat in de verwerkersovereenkomst en het privacybeleid."
        },
        {
          "t": "p",
          "tekst": "**10.4** Bij een datalek dat de Dienst raakt, meldt Brantomics AI dit binnen 48 uur na ontdekking aan de Klant, zodat de Klant zijn wettelijke meldplicht kan nakomen."
        },
        {
          "t": "p",
          "tekst": "**10.5** Voor gegevens over de Klant zelf en zijn contactpersonen, zoals de klantadministratie en accounts voor het Dashboard, is Brantomics AI zelf verantwoordelijke. Hoe dat werkt staat in het privacybeleid op brantomicsai.nl."
        }
      ]
    },
    {
      "num": "Artikel 11.",
      "titel": "Geheimhouding",
      "blokken": [
        {
          "t": "p",
          "tekst": "**11.1** Beide partijen houden vertrouwelijke informatie van de ander geheim. Vertrouwelijk is informatie die zo is aangemerkt of waarvan de vertrouwelijkheid uit de aard volgt, zoals tarieven en klantgegevens van de Klant."
        },
        {
          "t": "p",
          "tekst": "**11.2** Dit geldt niet voor informatie die al openbaar was of die rechtmatig van een derde is verkregen."
        }
      ]
    },
    {
      "num": "Artikel 12.",
      "titel": "Beschikbaarheid",
      "blokken": [
        {
          "t": "p",
          "tekst": "**12.1** Brantomics AI spant zich in om de Producten beschikbaar te houden, maar garandeert geen ononderbroken beschikbaarheid. Gepland onderhoud wordt waar mogelijk vooraf aangekondigd."
        },
        {
          "t": "p",
          "tekst": "**12.2** Brantomics AI is niet aansprakelijk voor schade door tijdelijke onbeschikbaarheid, waaronder storingen bij externe aanbieders zoals Hetzner, Make.com, Anthropic, het Kadaster of e-mailproviders. Bij een storing van het Prijsindicatie-systeem blijft de rest van de website van de Klant werken."
        }
      ]
    },
    {
      "num": "Artikel 13.",
      "titel": "Duur en opzegging",
      "blokken": [
        {
          "t": "p",
          "tekst": "**13.1** De Overeenkomst loopt voor de periode die in de Overeenkomst staat. Bij een maandabonnement geldt een opzegtermijn van één maand. Bij een jaarabonnement geldt de termijn uit de Overeenkomst."
        },
        {
          "t": "p",
          "tekst": "**13.2** Opzeggen gebeurt schriftelijk. Betaalde bedragen en eenmalige inrichtingskosten worden niet terugbetaald, tenzij uitdrukkelijk anders overeengekomen."
        },
        {
          "t": "p",
          "tekst": "**13.3** Brantomics AI mag de Overeenkomst direct ontbinden als de Klant in verzuim is of in strijd met deze voorwaarden handelt."
        },
        {
          "t": "p",
          "tekst": "**13.4** Na het einde van de Overeenkomst stopt de verwerking en verwijdert of retourneert Brantomics AI persoonsgegevens zoals de verwerkersovereenkomst bepaalt."
        }
      ]
    },
    {
      "num": "Artikel 14.",
      "titel": "Intellectueel eigendom",
      "blokken": [
        {
          "t": "p",
          "tekst": "**14.1** Alle rechten op de Producten, de software, de code, werkwijzen en documentatie berusten bij Brantomics AI, tenzij schriftelijk anders overeengekomen."
        },
        {
          "t": "p",
          "tekst": "**14.2** De Klant krijgt tijdens de looptijd een niet-exclusief en niet-overdraagbaar gebruiksrecht. De Klant mag de Producten niet doorverkopen, in sublicentie geven of aan derden ter beschikking stellen."
        },
        {
          "t": "p",
          "tekst": "**14.3** Tarieven, logo, teksten en andere materialen die de Klant aanlevert blijven van de Klant. De Klant geeft Brantomics AI toestemming die te gebruiken voor zover nodig om de Producten te leveren."
        }
      ]
    },
    {
      "num": "Artikel 15.",
      "titel": "Overmacht",
      "blokken": [
        {
          "t": "p",
          "tekst": "**15.1** Brantomics AI hoeft een verplichting niet na te komen als dat door overmacht niet kan. Onder overmacht valt onder meer: storingen in internet, elektriciteit of telecommunicatie, storingen bij derde aanbieders, brand, overheidsmaatregelen en pandemieën."
        }
      ]
    },
    {
      "num": "Artikel 16.",
      "titel": "Toepasselijk recht en geschillen",
      "blokken": [
        {
          "t": "p",
          "tekst": "**16.1** Op alle Overeenkomsten is Nederlands recht van toepassing."
        },
        {
          "t": "p",
          "tekst": "**16.2** Geschillen worden voorgelegd aan de bevoegde rechter van de Rechtbank Midden-Nederland."
        }
      ]
    },
    {
      "num": "Artikel 17.",
      "titel": "Wijzigingen",
      "blokken": [
        {
          "t": "p",
          "tekst": "**17.1** Brantomics AI mag deze voorwaarden wijzigen. Wijzigingen worden minimaal 30 dagen vooraf per e-mail aan bestaande klanten en op de website bekendgemaakt. Wie de Dienst na de ingangsdatum blijft gebruiken, aanvaardt de gewijzigde voorwaarden. Is een wijziging wezenlijk nadelig voor de Klant, dan mag hij opzeggen tegen de ingangsdatum."
        },
        {
          "t": "p",
          "tekst": "**17.2** Deze versie 2.0 vervangt versie 1.2 van 23 september 2026. Voor nieuwe Overeenkomsten geldt versie 2.0 vanaf 19 november 2026. Voor Klanten met een Overeenkomst van vóór 19 november 2026 geldt versie 2.0 vanaf 19 december 2026, na bericht per e-mail. Tot die datum blijft voor hen versie 1.2 gelden."
        }
      ]
    }
  ]
};
