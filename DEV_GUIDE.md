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
*Vytvořeno během refaktoringu 6. 2. 2026*
