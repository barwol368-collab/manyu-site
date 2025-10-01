# SAMMY — Plasma Green

Strona statyczna inspirowana `https://www.sammygolden.vip/`, w kolorystyce Plasma (odcienie zieleni).

## Szybki start
- Otwórz plik `index.html` w przeglądarce (dwuklik lub przeciągnij na okno przeglądarki).
- Edytuj kolory/teksty w `styles.css` oraz `index.html`.

## Funkcje
- Sekcja hero z przyciskiem CTA oraz kopiowaniem adresu kontraktu (CA)
- Sekcja „SAMMY MEMES” (placeholdery — wstaw własne obrazki/emoji)
- Sekcja Tokenomics: 1B supply, LP locked, 0% tax
- Motyw w odcieniach zieleni Plasma (ciemne tło + neonowe akcenty)

## Edycja kontraktu (CA)
Zmień wartość w `index.html` w elemencie z id `contractValue`.

```html
<div class="contract-value" id="contractValue">0x36b3ee3227f5b1d1e72d58a5491031959a84624f</div>
```

## Kopiowanie CA
Obsługiwane przez `script.js` z wykorzystaniem `navigator.clipboard` i fallbacku.

## Deploy
Dowolny statyczny hosting (np. GitHub Pages, Netlify, Vercel). Wystarczy wrzucić pliki `index.html`, `styles.css`, `script.js`.

