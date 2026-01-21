# Nastavení Ecomail integrace

## 1. Získání API klíče z Ecomail

1. Přihlaste se do svého Ecomail účtu
2. Přejděte do **Nastavení** → **API klíče**
3. Vytvořte nový API klíč nebo použijte existující
4. Zkopírujte API klíč

## 2. Nastavení environment proměnných

Vytvořte soubor `.env.local` v root složce projektu:

```env
# Ecomail API Configuration
ECOMAIL_API_KEY=your_actual_api_key_here
ECOMAIL_LIST_ID=1
```

**Příklad:**
```env
ECOMAIL_API_KEY=abc123def456ghi789
ECOMAIL_LIST_ID=1
```

**DŮLEŽITÉ:** 
- Nahraďte `your_actual_api_key_here` skutečným API klíčem z Ecomail
- Soubor `.env.local` je v `.gitignore`, takže se neuloží do repozitáře
- Nikdy nesdílejte API klíč veřejně

## 3. Vytvoření vlastního pole v Ecomail

1. V Ecomail přejděte do **Kontakty** → **Vlastní pole**
2. Vytvořte nové vlastní pole:
   - **Název vlastního pole:** `Co sbíráš`
   - **Název merge tagu:** `CO_SBIRAS`
   - **Typ vlastního pole:** `Text`

## 4. Testování

1. Spusťte vývojový server: `npm run dev`
2. Otevřete stránku a klikněte na tlačítko pro otevření modalu
3. Vyplňte formulář a odešlete
4. Zkontrolujte v Ecomail, zda se kontakt přidal do seznamu

## 5. Bezpečnost

- API klíč je chráněn na server-side
- Klient nikdy nevidí API klíč
- Všechna komunikace probíhá přes HTTPS
- Data jsou validována před odesláním

## 6. Troubleshooting

### Chyba: "API klíč není nastaven"
- Zkontrolujte, že máte soubor `.env.local` s platným API klíčem
- Restartujte vývojový server

### Chyba: "Neplatný e-mail"
- Zkontrolujte formát e-mailu
- Ujistěte se, že e-mail není prázdný

### Chyba: "Chyba při odesílání dat"
- Zkontrolujte, že API klíč je platný
- Zkontrolujte, že seznam s ID 1 existuje v Ecomail
- Zkontrolujte konzoli serveru pro více detailů

