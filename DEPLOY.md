# Deploy — Brantomics AI hoofdwebsite op Hetzner

Statische marketingsite (React/Vite), gedeployed naast de bestaande Kitchen-stack
(`chef-dash-assist`) op dezelfde Hetzner-server (167.233.238.11).

## Belangrijk: poort-conflict met de Kitchen-stack

Kitchen's Caddy-instance (`chef-dash-assist/docker-compose.yml`) claimt al poorten `80` en `443`
op deze server. Deze site draait daarom **niet** met zijn eigen publieke Caddy — in plaats
daarvan publiceert `docker-compose.yml` hier alleen de interne poort `8080`, en wordt de `web`-
container **ook aangesloten op Kitchen's eigen Docker-netwerk (`kitchen_default`)**. Daardoor kan
Kitchen's Caddy — de enige instantie die naar buiten toe op 80/443 luistert — deze site
rechtstreeks als container bereiken (`brantomics-website-web-1:80`), zonder om te hoeven wegen via
de host-poort of `host.docker.internal`.

Voeg in `/opt/kitchen/Caddyfile` een los blok toe naast het bestaande:

```
brantomicsai.nl, www.brantomicsai.nl {
    encode zstd gzip
    reverse_proxy brantomics-website-web-1:80
}
```

Herstart Kitchen's Caddy-container na deze wijziging. Een reload (`caddy reload --config
/etc/caddy/Caddyfile`, uitgevoerd via `docker exec kitchen-caddy-1 ...`) volstaat voor het
oppikken van het nieuwe site-blok; alleen bij problemen met certificaat-acquisitie is een volledige
`docker compose restart caddy` (in `/opt/kitchen`) nodig om Caddy's DNS-cache te verversen.

## 1. Code uitrollen

```bash
git clone https://github.com/bramvanveldhuisen/brantomicsai-website.git /opt/brantomics-website
cd /opt/brantomics-website
cp .env.example.deploy .env
nano .env   # DOMAIN=brantomicsai.nl
```

## 2. Eerste start

```bash
docker compose up -d --build
```

Dit start de `web`-service (nginx, statische bestanden), gepubliceerd op hostpoort 8080 (niet
80/443 — die zijn al in gebruik door Kitchen's Caddy) én aangesloten op het externe
`kitchen_default`-netwerk, zoals gedefinieerd onderaan `docker-compose.yml`:

```yaml
networks:
  default: {}
  kitchen_default:
    external: true
```

Dit netwerk moet al bestaan (het wordt aangemaakt door Kitchen's eigen `docker compose up`) —
als Kitchen nog niet draait op de server, start die stack eerst.

## 3. DNS

Zet bij de domeinregistrar (TransIP) een A-record voor `brantomicsai.nl` (`@`) en
`www.brantomicsai.nl` (`www`) naar hetzelfde Hetzner-IP (167.233.238.11) — dit IP is al in
gebruik voor `brantomicsaikitchen.nl`, dus dit voegt gewoon een tweede domeinnaam toe die naar
dezelfde server wijst. Let op: als er nog een oud A-record op `@` of een CNAME op `www` van een
vorige hosting-poging staat, verwijder die eerst — een naam kan niet twee A-records of een CNAME
plus een ander recordtype tegelijk hebben, en Let's Encrypt pakt anders willekeurig het verkeerde
IP op.

Caddy vraagt bij een DNS-wijziging niet automatisch een nieuw certificaat aan zolang het intern al
een mislukte poging in de retry-wachtrij heeft staan (met oplopende back-off). Na het corrigeren
van de DNS is het sneller om `docker compose restart caddy` (in `/opt/kitchen`) te draaien, zodat
Caddy de DNS vers opvraagt in plaats van te wachten op de eerstvolgende geplande retry.

## 4. Updates uitrollen

```bash
cd /opt/brantomics-website
git pull
docker compose up -d --build
```

Dit herbouwt en herstart alleen de `web`-container van deze site; Kitchen's eigen stack en Caddy
blijven ongemoeid.

## Verificatie

- `https://brantomicsai.nl` en `https://www.brantomicsai.nl` tonen de nieuwe homepage met een
  geldig Let's Encrypt-certificaat (`docker logs kitchen-caddy-1 | grep brantomicsai` toont de
  obtain-poging).
- Alle 8 routes (`/`, `/diensten`, `/demo-responder`, `/prijzen`, `/over-ons`, `/contact`,
  `/privacybeleid`, `/algemene-voorwaarden`) laden correct, ook bij een directe URL-load (test de
  nginx `try_files`-fallback voor client-side routing).
- `https://brantomicsai.nl/sitemap.xml`, `/robots.txt` en `/googlec1623a3124cd9dca.html` zijn
  bereikbaar (belangrijk voor de bestaande Google Search Console-koppeling).
- `docker ps --filter name=brantomics-website` toont de container als `healthy` (niet
  `unhealthy` — de healthcheck gebruikt bewust `127.0.0.1` i.p.v. `localhost`, omdat `wget`
  anders eerst `::1` probeert terwijl nginx alleen op IPv4 luistert).
- Kitchen zelf (`https://brantomicsaikitchen.nl`) blijft na elke wijziging aan deze site
  ongestoord bereikbaar — een Caddy-reload/restart raakt beide sites, dus altijd even
  controleren.
