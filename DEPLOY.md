# Deploy — Brantomics AI hoofdwebsite op Hetzner

Statische marketingsite (React/Vite), gedeployed naast de bestaande Kitchen-stack
(`chef-dash-assist`) op dezelfde Hetzner-server (167.233.238.11).

## Belangrijk: poort-conflict met de Kitchen-stack

Kitchen's Caddy-instance (`chef-dash-assist/docker-compose.yml`) claimt al poorten `80` en `443`
op deze server. Deze site draait daarom **niet** met zijn eigen publieke Caddy op de standaard
poorten — in plaats daarvan gebruikt `docker-compose.yml` hier de interne poorten `8080`/`8443`,
en registreer je deze site als een **extra site-blok in Kitchen's bestaande Caddyfile** (dat is
al de enige instantie die echt naar buiten toe op 80/443 luistert). Twee routes om dit te doen:

**Optie A — extra site-blok in Kitchen's Caddyfile (aanbevolen, geen tweede publieke Caddy nodig):**

Voeg in `/opt/kitchen/Caddyfile` een los blok toe naast het bestaande:

```
brantomicsai.nl, www.brantomicsai.nl {
    encode zstd gzip
    reverse_proxy localhost:8080
}
```

Herstart Kitchen's Caddy-container (`docker compose restart caddy`, in `/opt/kitchen`) na deze
wijziging. Deze site (`brantomics-website`) draait dan alleen intern op poort 8080, bereikbaar
voor Kitchen's Caddy via `localhost:8080` (of het Docker-netwerkadres, afhankelijk van de
netwerkconfiguratie — zie stap 4 hieronder als beide stacks in hetzelfde Docker-netwerk moeten
zitten).

**Optie B — deze site draait zijn eigen Caddy op een ander publiek poortpaar:**
Alleen zinvol als je bewust twee losse TLS-eindpunten wilt; ingewikkelder zonder voordeel hier.
Niet de aanbevolen route.

## 1. Code uitrollen

```bash
git clone <repo-url> /opt/brantomics-website
cd /opt/brantomics-website
cp .env.example.deploy .env
nano .env   # DOMAIN=brantomicsai.nl
```

## 2. Eerste start

```bash
docker compose up -d --build
```

Dit start de `web`-service (nginx, statische bestanden), gepubliceerd op hostpoort 8080 (niet
80/443 — die zijn al in gebruik door Kitchen's Caddy).

## 3. DNS

Zet bij de domeinregistrar (TransIP) een A-record voor `brantomicsai.nl` en `www.brantomicsai.nl`
naar hetzelfde Hetzner-IP (167.233.238.11) — dit IP is al in gebruik voor
`brantomicsaikitchen.nl`, dus dit voegt gewoon een tweede domeinnaam toe die naar dezelfde server
wijst.

## 4. Netwerk

`web` publiceert al op hostpoort 8080 (`ports: ["8080:80"]`), dus Kitchen's Caddy-container kan
'm bereiken via `host.docker.internal:8080`, of via het interne netwerk-gateway-IP als
`host.docker.internal` niet werkt op je Docker-versie — vervang in dat geval
`reverse_proxy localhost:8080` in het Caddyfile-blok (stap "Optie A" hierboven) door
`reverse_proxy host.docker.internal:8080` of het daadwerkelijke host-IP.

## 5. Updates uitrollen

```bash
cd /opt/brantomics-website
git pull
docker compose up -d --build
```

## Verificatie

- `https://brantomicsai.nl` toont de nieuwe homepage.
- Alle 8 routes (`/`, `/diensten`, `/demo-responder`, `/prijzen`, `/over-ons`, `/contact`,
  `/privacybeleid`, `/algemene-voorwaarden`) laden correct, ook bij een directe URL-load (test de
  nginx `try_files`-fallback voor client-side routing).
- `https://brantomicsai.nl/sitemap.xml`, `/robots.txt` en `/googlec1623a3124cd9dca.html` zijn
  bereikbaar (belangrijk voor de bestaande Google Search Console-koppeling).
