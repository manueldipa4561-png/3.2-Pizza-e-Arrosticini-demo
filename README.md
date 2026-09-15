# 3.2 Pizza & Arrosticini — Demo

Concept website demo progettato e sviluppato da Punto Due Studio per **3.2 Pizza & Arrosticini**, Chieti (CH).

> Concept dimostrativo non commissionato · Punto Due Studio

## Creative thesis

**Forno. Brace. Chieti.**

Il concept evita il classico sito da pizzeria rosso/verde e usa il nome `3.2` come sistema grafico, senza inventarne il significato. La direzione visiva nasce invece da un fatto verificato: il locale è riconosciuto soprattutto per **pizza e arrosticini**, quindi la pagina mette in relazione due gesti — forno e brace — attraverso numeri, griglie, materia, calore e una composizione editoriale contemporanea.

La hero utilizza artwork originale HTML/CSS: una pizza astratta e due linee di arrosticini. Nessuna fotografia di recensioni, directory o social viene re-hostata.

## Ricerca verificata

Verifica effettuata il **15/09/2026**.

### Dati recenti principali

- Nome corrente: **3.2 Pizza & Arrosticini**
- Indirizzo: **Via Arniense 13, 66100 Chieti CH**
- Telefono principale usato: **+39 0871 345206**
- Instagram verificato tramite fonti pubbliche: **@ristorante_3.2**
- URL Instagram: `https://www.instagram.com/ristorante_3.2`
- Categorie ricorrenti: ristorante, pizzeria, italiana, barbecue
- Restaurant Guru (agg. 24/08/2026): Google **4,5/5 su 224 recensioni**, fascia indicativa **€10–20**
- Tripadvisor: **4,4/5 su 48 recensioni**, profilo ancora indicizzato con il vecchio nome “3.2 Eat Gustando”
- Servizi riportati da fonti recenti: takeaway, delivery, prenotazioni, carte, accessibilità
- Presenza web: Restaurant Guru indica Facebook come “sito”; altre fonti recenti indicano Instagram. Non è emerso un sito proprietario standalone forte durante la ricerca.

### Offerta documentata

Elementi ricorrenti nelle fonti e recensioni pubbliche:

- pizza
- arrosticini
- impasto leggero / ben lievitato nelle recensioni
- patatine fritte sfogliate artigianali
- supplì e crocchette
- focacce
- opzioni vegetariane
- opzioni senza glutine riportate da Tripadvisor

La demo NON pubblica un menu corrente e non inventa prezzi.

### Elementi citati come archivio, non come menu attuale

La sezione “Citati dalle recensioni” utilizza solo esempi comparsi pubblicamente, chiarendo che disponibilità e ricette possono cambiare:

- pizza con cornicione ripieno di ricotta (recensione Tripadvisor 2025)
- patatine fritte sfogliate artigianali (recensione Google riportata da Restaurant Guru 2026)
- supplì e crocchette fatti in casa (recensioni pubbliche)
- focaccia semintegrale ai carboni vegetali (recensione Tripadvisor 2025)

## Conflitti tra fonti

### Telefono

Le fonti più recenti convergono su **0871 345206** (Restaurant Guru, Wanderlog, LocalShop24, directory 2026).

Tripadvisor continua a mostrare il vecchio numero mobile **338 8376861** nel profilo “3.2 Eat Gustando”. La demo usa quindi `0871 345206` e documenta il numero mobile solo come dato storico/conflittuale.

### Orari

Restaurant Guru, Wanderlog e OrariDiApertura24 aggiornati nel 2026 convergono su:

- lunedì: 19:00–22:00
- martedì: chiuso
- mercoledì–domenica: 19:00–22:00

Altre fonti mostrano orari più vecchi o diversi (19:00–23:00, 19:00–00:00 e, in alcune directory, fasce diurne). Per questo la demo mostra gli orari recenti con un invito esplicito a verificarli su Instagram o telefonicamente.

## Fonti principali

- Restaurant Guru — 3.2 Pizza & Arrosticini, Chieti
- Tripadvisor — 3.2 Eat Gustando, Chieti
- Wanderlog — 3.2 Pizza & Arrosticini
- LocalShop24 — 3.2 Pizza & Arrosticini
- OrariDiApertura24 — 3.2 Pizza & Arrosticini
- Piatti.menu — archivio menu / recensioni storiche
- Il Centro — articolo storico sull'apertura del progetto familiare “3.2 Eat Gustando”

## Fact / inference / creative separation

### Fatti usati nel sito

- nome, indirizzo, telefono e social recenti
- pizza e arrosticini come proposta centrale
- categorie/servizi documentati
- rating pubblici con fonte e data
- esempi di prodotti solo quando citati pubblicamente
- orari recenti con avvertenza sul conflitto

### Inferenze controllate

- “piccolo locale / grande cura” deriva dal carattere raccolto del locale e dai temi ricorrenti nelle recensioni; non è presentato come claim ufficiale dell'attività.
- il tono “casa” sintetizza recensioni che citano accoglienza, gentilezza e atmosfera familiare.

### Scelte creative

- `3.2` usato come grammatica tipografica e modulare
- dualità forno / brace
- griglia tecnica + materia calda
- artwork CSS originale di pizza e arrosticini

La demo NON attribuisce un significato inventato al nome “3.2”.

## Portfolio distance

La direzione è progettata per non replicare:

- Vicolo Stretto: nightlife / gig-poster / alley
- Crudo & Cotto: thermal/raw-vs-cooked
- La Buca dei Diavoli: sotterraneo / camera di fuoco
- Da Sergio: tavola emiliana classica
- Sanafollia: farina / pasta / organico
- Sój: architettura / pianta / intimità

3.2 usa invece **numeri, due gesti di cottura, griglia editoriale e calore abruzzese contemporaneo**.

## Funzionalità

- responsive navigation
- click-to-call
- Google Maps
- Instagram
- mobile action dock
- scroll progress
- hero CSS artwork con micro-interazione pointer desktop
- progressive reveal con fail-safe
- `prefers-reduced-motion`
- keyboard focus states
- Schema.org `Restaurant`
- SEO / Open Graph base
- custom 404
- Netlify config
- security headers

## QA responsive

QA browser-rendered eseguito il 15/09/2026 con Chromium sulla build finale, caricando gli stessi HTML/CSS/JS tramite DevTools `Page.setDocumentContent` perché l'ambiente blocca le URL `file://`.

Viewport verificati:

- 320 px
- 360 px
- 375 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1440 px

Controlli eseguiti:

- nessun overflow orizzontale reale del documento
- nessun reveal rimasto nascosto dopo scroll completo
- zero errori JavaScript catturati
- nessun anchor interno mancante
- menu mobile verificato a 320–768 px
- menu mobile allineato esattamente sotto l'header
- mobile dock completamente dentro viewport
- touch target mobile >= circa 44 px
- `prefers-reduced-motion` verificato
- rendering visuale controllato a 320, 768 e 1440 px
- hero, artwork, sezioni duali, archivio, reputazione, contatti e footer verificati

### Fix applicato durante il QA

Il link “Maps” nel footer mobile aveva una larghezza inferiore a 44 px pur avendo altezza corretta. I link footer ora hanno `min-width: 44px` e `min-height: 44px`.

Esito finale: **PASS** sugli 8 viewport indicati.

Nota: questo QA riguarda la build locale finale. Dopo la pubblicazione Netlify è consigliato un ultimo controllo live sull'URL pubblico per verificare comportamento della CDN, header e 404 nel deployment reale.

## Deploy Netlify

Sito statico senza build step.

- Production branch: `main`
- Base directory: vuota
- Build command: vuoto
- Publish directory: `.`
- Functions directory: vuota
- Environment variables: nessuna

`netlify.toml`, `_headers`, `robots.txt` e `404.html` sono già inclusi.

Dopo il deploy definitivo aggiungere, se necessario:

- canonical URL
- `og:url`
- sitemap.xml
- dichiarazione sitemap in `robots.txt`
- eventuale `og:image` definitivo
