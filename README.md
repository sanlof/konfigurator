# Spooky Lights Konfigurator

Spooky Lights är en 3D-konfigurator där man kan designa sin egen lavalampa genom att välja olika färger, metaller och om man vill ha ett spöke som hovrar över lampan. Denna applikation använder ```React```, ```Three.js``` och ```Spline``` för att skapa en unik och rolig användarupplevelse med 3D-visualiseringar.

## Funktioner

- Välj färg på lavan (blå eller orange)
- Välj metallfinish på lampfoten (svart, silver eller guld)
- Lägg till ett spöke som hovrar över lampan för en extra spooky effekt

Både 3D-objekten och konfigurations knappar uppdateras i realtid när användaren gör sina val.

## Tech Stack

- React: Frontend-ramverk för UI.
- Three.js: För rendering av 3D-grafik.
- Spline: För att skapa 3D-modellen.
- SplineTool: Verktyg för att använda Spline-modeller med animationer i React.

## Installation

Följ dessa steg för att sätta upp projektet lokalt:

1. Kloning av repository

```bash
git clone https://github.com/sanlof/konfigurator.git
cd konfigurator
```

2. Installera beroenden

```bash
npm install
```

3. Starta applikationen

```bash
npm run dev
```

## Demo

Det finns även en live demo här: https://spookylights.vercel.app
