# Kjellerpubnettverket - Nettside

Offisiell nettside for Kjellerpubnettverket ved Universitetet i Oslo.

## Om prosjektet

Dette er en moderne, mobilvennlig nettside laget for Kjellerpubnettverket - et samarbeid mellom de studentdrevne kjellerpubene ved UiO.

**Organisasjonsnummer:** 936 799 124  
**Kontakt:** kordinator@kjellerpubnettverket.no

## Design

**Fargetema:** Svart, gull og lilla
- Svart bakgrunn (#0a0a0a) for moderne, elegant utseende
- Gull (#FFD700) som primærfarge for overskrifter og lenker
- Lilla (#9370DB / #6A0DAD) som sekundærfarge for aksenter

**Responsivt design:**
- Fullt optimalisert for mobil, tablet og desktop
- Tekst flyter naturlig innenfor kort-elementer
- Mindre kort-elementer for bedre oversikt
- Alle font-størrelser skalerer med clamp() for perfekt lesbarhet

## Medlemsforeninger

Nettsiden presenterer følgende medlemsforeninger:

1. **Realistforeningen** - [foreninger.uio.no/rf](https://foreninger.uio.no/rf/)
2. **Cybernetisk Selskab** - [cyb.no](https://cyb.no/)
3. **SVFF** - [svff.no](https://svff.no/)
4. **Traugot's kjeller (Kjellern)** - Utdanningsvitenskapelig fakultet
5. **Uglebo** - Juridisk fakultet
6. **Anestesien** - Medisin og helsefag
7. **Amatøren** - Humanistisk fakultet
8. **Tappetårnet + Det Norske Studentersamfund** - Studentsamfunnet

## Teknologi

- HTML5
- CSS3 (med CSS custom properties)
- Minimal JavaScript (smooth scrolling)
- Google Fonts (Archivo Black & DM Sans)
- Ingen tunge animasjoner eller dependencies

## Installasjon

### GitHub Pages (Anbefalt)

1. Last opp alle filene til GitHub repository
2. Gå til **Settings** → **Pages**
3. Velg "main" branch under "Source"
4. Nettsiden vil være live på: `https://[brukernavn].github.io/[repo-navn]`

### Lokal testing

```bash
# Åpne rett i nettleser
# Bare dobbeltklikk index.html

# Eller bruk lokal server:
python -m http.server 8000
# Gå til http://localhost:8000
```

## Filstruktur

```
kjellerpubnettverket/
├── index.html              # Norsk versjon
├── index-en.html           # Engelsk versjon
├── styles.css              # All styling
├── script.js               # Minimal JavaScript
├── logos/                  # Mappen for medlems-logoer (opprett selv)
│   ├── realistforeningen.png
│   ├── cyb.png
│   ├── svff.png
│   └── ...
├── LOGO-GUIDE.md           # Guide for å legge til logoer
├── EXAMPLE-om.html         # Eksempel på multi-page struktur
├── .gitignore
├── LICENSE
└── README.md
```

## Legg til logoer

Nettsiden har plass til logo for hver medlemsforening!

1. Opprett en `logos/` mappe i repository
2. Legg logoer der (PNG/SVG format)
3. Følg instruksjonene i `LOGO-GUIDE.md`

Logoene vil vises i sirkel-placeholders som er 80x80px.

## Språk

- **Norsk:** `index.html`
- **Engelsk:** `index-en.html`

Brukere kan bytte mellom språk via knappen i navigasjonen.

## Tilpasning

### Endre farger

Rediger CSS-variablene i `styles.css`:

```css
:root {
    --primary-gold: #FFD700;        /* Hovedfarge */
    --secondary-purple: #9370DB;    /* Sekundærfarge */
    --dark-purple: #6A0DAD;         /* Mørk lilla */
    --black: #0a0a0a;               /* Bakgrunn */
}
```

### Oppdatere medlemmer

Rediger `.member-card` elementene i HTML:

```html
<div class="member-card">
    <div class="member-logo">
        <img src="logos/din-logo.png" alt="Logo">
    </div>
    <h3>Foreningsnavn</h3>
    <p class="member-faculty">Fakultet</p>
    <p>Beskrivelse av foreningen.</p>
    <a href="https://nettside.no" class="member-link">Besøk nettside →</a>
</div>
```

### Endre kontaktinfo

Finn `#kontakt` seksjonen og oppdater:

```html
<p class="contact-info">📧 E-post: <a href="mailto:din@epost.no">synlig@epost.no</a></p>
<p class="contact-info">🏢 Org.nr: 123 456 789</p>
```

## Mobilvennlighet

- Alle elementer er responsiv og skalerer automatisk
- Navigasjon tilpasser seg skjermstørrelse
- Tekst bruker `clamp()` for perfekt lesbarhet på alle enheter
- Member-kort går fra grid til full bredde på mobil
- Touch-vennlige knapper og lenker

## Bidra

1. Fork repositoryet
2. Lag en ny branch: `git checkout -b feature/ny-funksjon`
3. Commit endringer: `git commit -m 'Legg til ny funksjon'`
4. Push: `git push origin feature/ny-funksjon`
5. Åpne en Pull Request

## Kontakt

- **E-post:** kordinator@kjellerpubnettverket.no
- **Org.nr:** 936 799 124

## Lisens

MIT License - Se LICENSE-filen for detaljer.

---

**Kjellerpubnettverket ved UiO** ✨  
*Drevet av frivillige studenter, for studenter*
