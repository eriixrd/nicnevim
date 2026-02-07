# Development & Refactoring Guide

Tento dokument slouží jako příručka pro udržení čistého, profesionálního a "ručně psaného" kódu v tomto projektu.

## 🎨 Pravidla pro Tailwind CSS (Class Ordering)
Pro zachování čitelnosti a profesionálního dojmu řadíme Tailwind třídy vždy v tomto pořadí:

1.  **Positioning & Z-index**  
    `relative`, `absolute`, `fixed`, `z-10`, `top-0`, `left-1/2`, `-translate-x-1/2`, atd.
2.  **Display & Flexbox/Grid**  
    `flex`, `grid`, `flex-col`, `items-center`, `justify-center`, `gap-4`, atd.
3.  **Spacing (Margin & Padding)**  
    `m-4`, `p-6`, `mt-2.5`, `px-4`, atd.
4.  **Sizing (Width & Height)**  
    `w-full`, `h-auto`, `max-w-[950px]`, `aspect-video`, atd.
5.  **Typography**  
    `text-[18px]`, `font-bold`, `leading-tight`, `text-center`, `text-white`, atd.
6.  **Visuals (Pozadí, Rámečky, Efekty)**  
    `bg-[#...]`, `rounded-[20px]`, `border`, `shadow-lg`, `opacity-70`, `blur-md`, atd.
7.  **Interactivity & Transitions**  
    `cursor-pointer`, `transition-all`, `duration-200`, `hover:scale-105`, atd.

> **Pravidlo pro responzivitu:** Modifikátory jako `md:`, `lg:` by měly ideálně následovat hned za svou základní třídou (např. `w-full md:w-1/2`) nebo být logicky seskupeny na konci dané kategorie.

---

## 🧩 Komponentizace a DRY (Don't Repeat Yourself)
*   **Znovupoužitelnost:** Pokud se nějaký UI prvek (např. skleněný štítek, speciální karta) opakuje více než 2x, vytvoříme z něj komponentu v `src/components/`.
*   **Čistota:** Hlavní sekce v `src/landingpage/` by měly být čisté a čitelné. Komplexní logiku nebo UI detaily schováváme do komponent.

---

## 🚀 Svelte 5 & TypeScript standardy
*   **Runy:** Používáme Svelte 5 Runy (`$state`, `$derived`, `$props`) pro veškerou reaktivitu.
*   **TypeScript:** Každý skript má `lang="ts"`. Pro složitější data (např. balíčky, feedy) definujeme `interface`.
*   **Data-Driven UI:** Vyhýbáme se ručnímu duplikování HTML. Obsah (texty, ikony) ukládáme do polí/objektů a vykreslujeme pomocí `{#each}`.

---

## 🔒 Apple Emojis
Pro zajištění prémiového vzhledu na všech platformách (Android, Windows, iOS) nepoužíváme standardní systémové emoji přímo v textu tam, kde záleží na designu. Místo toho používáme:
`<AppleEmoji symbol="🔥" size={17} />`

---

## 🛡️ Ochrana obsahu (Obrázky & Emoji)
Abychom zabránili neoprávněnému stahování ikon, log a emoji, jsou na všechny obrázky (`img`) aplikována tato pravidla v `src/app.css`:
*   **Zákaz označování:** Nelze je vybrat kurzorem (`user-select: none`).
*   **Zákaz dragování:** Nelze je přetahovat myší (`-webkit-user-drag: none`).
*   **Zákaz interakce:** Nelze na ně kliknout pravým tlačítkem pro uložení (`pointer-events: none`).

> **Poznámka:** Pokud potřebuješ, aby byl obrázek klikatelný jako odkaz, obal ho do tagu `<a>`. Kliknutí projde skrz obrázek na odkaz, ale obrázek samotný zůstane chráněn proti stažení.

---

## 🛠️ Zjednodušování a Čistota Kódu
*   **Svelte 5 Snippets:** Pro malé kousky opakujícího se HTML v rámci jedné komponenty používejte `{#snippet name()}...{/snippet}`. Snižuje to vizuální šum a usnadňuje údržbu.
*   **Logika v šablonách:** Složitější transformace dat nepište přímo do HTML. Použijte `$derived` runu pro přípravu dat a v šabloně je jen vytiskněte.
*   **Tailwind Šablony:** Pokud má prvek více než 10 tříd, zkontrolujte, zda nelze některé "hardcodované" hodnoty (např. barvy) přesunout do `tailwind.config.js` jako proměnné.
*   **TypeScript Utility:** Využívejte vestavěné typy jako `ComponentProps` ze Svelte pro správné typování props u wrapper komponent.

---

## 📱 Safari & iOS Kompatibilita
Safari (zejména na iOS) má svá specifika. Každá nová funkce musí splňovat:
*   **Backdrop Blur:** Chrome a Safari interpretují blur odlišně. Vždy kontrolujte, zda pod skleněným efektem není vidět "useknutá" hrana. U barevných přechodů s blurem přidávejte `-webkit-mask-image: linear-gradient(...)` pokud je to nutné pro vyhlazení.
*   **Mobilní Viewport:** Vždy používejte dynamické jednotky výšky: `h-[100dvh]` místo `h-screen` a `min-h-[100dvh]` pro sekce, které mají vyplnit celou obrazovku.
*   **Zákaz Zoomování:** U inputů zajistěte, aby `font-size` bylo minimálně `16px`, jinak iOS Safari automaticky přibližuje stránku při kliknutí do pole.
*   **Stínování a Glow:** Příliš mnoho `blur` efektů může na starších iPhonech zpomalit prohlížeč. Pokud element bliká, přidejte mu `will-change: filter` nebo `transform: translateZ(0)`.

---
*Vytvořeno během refaktoringu 6. 2. 2026 (Aktualizováno 7. 2. 2026)*
