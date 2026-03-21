import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { name, email, source } = await request.json();

        // --- ECOMAIL PŘÍPRAVA (Jedná se o předlohu) ---
        // Pro zprovoznění doplňte vlastní API klíč a ID seznamu v Ecomailu.
        
        /* 
        const ECOMAIL_API_KEY = 'VLOZTE_VAS_API_KLIC';
        const LIST_ID = 'VLOZTE_ID_SEZNAMU';

        const ecomailResponse = await fetch(`https://api2.ecomailapp.cz/lists/${LIST_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'key': ECOMAIL_API_KEY
            },
            body: JSON.stringify({
                contact: {
                    email: email,
                    name: name,
                    // Zde můžete přidat další pole nebo tagy (např. zdroj odkazu)
                    vdf_zdroj: source || 'landing_page'
                },
                trigger_autoresponders: true, // Spustit automatizace (např. uvítací e-mail)
                update_existing: true        // Aktualizovat, pokud kontakt již existuje
            })
        });

        const result = await ecomailResponse.json();
        console.log('Ecomail API odpověď:', result);
        */

        console.log('Lead úspěšně zachycen (příprava pro Ecomail):', { name, email, source });

        return json({ 
            success: true, 
            message: 'Data byla připravena k odeslání do Ecomailu.' 
        });
    } catch (error) {
        console.error('Chyba při zpracování leadu:', error);
        return json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
};
