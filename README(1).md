# Kjellerpubnettverket - Nettside

Offisiell nettside for Kjellerpubnettverket ved Universitetet i Oslo. (JA jeg lagde alt med claude for å starte med jeg vil bare ha google workspace se første README.md)

## Om prosjektet

Dette er en enkel, moderne nettside laget for Kjellerpubnettverket - et samarbeid mellom de studentdrevne kjellerpubene ved UiO. Nettsiden presenterer nettverket, de ulike pubene, arrangementer og hvordan man kan bli involvert.

## Teknologi

- HTML5
- CSS3 (med custom properties/CSS variables)
- Vanilla JavaScript
- Google Fonts (Archivo Black & DM Sans)

## Funksjoner

- **Responsiv design**: Fungerer på alle enheter (mobil, tablet, desktop)
- **Smooth scrolling**: Elegant navigasjon mellom seksjoner
- **Animasjoner**: Dynamiske animasjoner når brukeren scroller
- **Interaktive elementer**: Hover-effekter og overganger
- **Moderne estetikk**: Varm, organisk design med jordnære farger

## Installasjon og bruk

### Enkel løsning (GitHub Pages)

1. Last opp filene til ditt GitHub repository
2. Gå til **Settings** → **Pages**
3. Under "Source", velg "main" branch
4. Nettsiden vil være tilgjengelig på `https://[ditt-brukernavn].github.io/[repo-navn]`

### Lokal testing

1. Klon eller last ned repositoryet
2. Åpne `index.html` i en nettleser

Eller bruk en lokal server (anbefalt):

```bash
# Med Python 3
python -m http.server 8000

# Med Node.js (npx)
npx serve

# Med PHP
php -S localhost:8000
```

Gå deretter til `http://localhost:8000` i nettleseren din.

## Filstruktur

```
kjellerpubnettverket/
├── index.html          # Hovedsiden
├── styles.css          # All styling
├── script.js           # Interaktivitet og animasjoner
└── README.md           # Denne filen
```

## Tilpasning

### Farger

Farger kan enkelt endres i `styles.css` ved å oppdatere CSS-variablene i `:root`:

```css
:root {
    --primary-color: #d94e28;      /* Hovedfarge (oransje/rød) */
    --secondary-color: #f7a046;    /* Sekundærfarge (gul/oransje) */
    --dark-brown: #2d1810;         /* Mørk brun */
    --cream: #f5ebe0;              /* Kremhvit */
    /* ... */
}
```

### Innhold

Rediger `index.html` for å oppdatere:
- Informasjon om pubene (i seksjonen `#puber`)
- Arrangementer og aktiviteter
- Kontaktinformasjon
- Footer-lenker

### Legg til nye puber

Kopier en `.pub-card` div i seksjonen `#puber` og tilpass innholdet:

```html
<div class="pub-card">
    <div class="pub-icon">🎵</div>
    <h3>Navn på pub</h3>
    <p class="pub-faculty">Fakultet</p>
    <p>Beskrivelse av puben.</p>
</div>
```

## Bidra

Ønsker du å bidra til nettsiden?

1. Fork repositoryet
2. Lag en ny branch (`git checkout -b feature/forbedring`)
3. Commit endringene dine (`git commit -m 'Legg til ny funksjon'`)
4. Push til branchen (`git push origin feature/forbedring`)
5. Åpne en Pull Request

## Lisens

Dette prosjektet er laget for Kjellerpubnettverket ved UiO. 

## Kontakt

For spørsmål om nettsiden, kontakt Kjellerpubnettverket.

---

**Drevet av frivillige studenter, for studenter** ☕🍺
