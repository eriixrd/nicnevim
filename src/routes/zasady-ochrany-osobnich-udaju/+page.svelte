<script lang="ts">
    import Footer from "../../landingpage/footer.svelte";
</script>

<svelte:head>
    <title>Zásady ochrany osobních údajů - NIC NEVIM</title>
</svelte:head>

<div class="min-h-screen bg-[#0C0914] flex flex-col pt-12">
    <!-- Simple Header / Back Link -->
    <div class="max-w-4xl mx-auto w-full px-6 mb-12">
        <a href="/" class="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm font-medium">Zpět na hlavní stránku</span>
        </a>
    </div>

    <!-- Content Card -->
    <div class="max-w-4xl mx-auto w-full px-6 mb-24">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 class="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
                Zásady ochrany <br />
                <span class="text-[#FFBA00]">osobních údajů</span>
            </h1>

            <div class="prose prose-invert prose-amber max-w-none">
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">1. Správce osobních údajů</h2>
                    <div class="space-y-2 text-white/70 leading-relaxed">
                        <p class="font-bold text-white">Slow down s.r.o.</p>
                        <p>IČO: 21721271</p>
                        <p>DIČ: CZ21721271</p>
                        <p>Sídlo: Revoluční 1403/28, Nové Město, 110 00 Praha 1</p>
                        <p>Email: nanoczm@gmail.com</p>
                        <p class="mt-4 italic text-sm">(dále jen „správce“)</p>
                        <p>Správce zpracovává osobní údaje v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).</p>
                    </div>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">2. Jaké osobní údaje zpracováváme</h2>
                    <p class="text-white/70 mb-4">Správce může zpracovávat zejména následující osobní údaje:</p>
                    <ul class="list-disc list-inside space-y-2 text-white/70 ml-2">
                        <li>jméno a příjmení</li>
                        <li>emailovou adresu</li>
                        <li>platební údaje</li>
                        <li>informace o zakoupeném členství</li>
                        <li>komunikaci mezi členem a správcem</li>
                    </ul>
                    <p class="text-white/70 mt-4 italic">Platební údaje mohou být zpracovávány prostřednictvím platební brány třetí strany.</p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">3. Účel zpracování osobních údajů</h2>
                    <p class="text-white/70 mb-4">Osobní údaje jsou zpracovávány za účelem:</p>
                    <ul class="list-disc list-inside space-y-2 text-white/70 ml-2">
                        <li>poskytování přístupu do online komunity</li>
                        <li>správy členství</li>
                        <li>zpracování plateb</li>
                        <li>komunikace se členy komunity</li>
                        <li>plnění zákonných povinností</li>
                    </ul>
                    <p class="text-white/70 mt-4">Právním základem zpracování je zejména plnění smlouvy mezi správcem a členem.</p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">4. Příjemci osobních údajů</h2>
                    <p class="text-white/70 mb-4">Osobní údaje mohou být předány poskytovatelům služeb, kteří zajišťují provoz služby, například:</p>
                    <ul class="list-disc list-inside space-y-2 text-white/70 ml-2">
                        <li>poskytovatelé platebních služeb (např. Stripe)</li>
                        <li>poskytovatelé komunikačních platforem (např. Discord)</li>
                        <li>poskytovatelé IT služeb</li>
                    </ul>
                    <p class="text-white/70 mt-4 text-sm opacity-60">Tyto subjekty zpracovávají osobní údaje pouze v rozsahu nezbytném pro poskytování služby.</p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">5. Doba uchování údajů</h2>
                    <p class="text-white/70">Osobní údaje jsou uchovávány po dobu trvání smluvního vztahu a dále po dobu nezbytnou pro splnění zákonných povinností nebo ochranu práv správce.</p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">6. Práva subjektu údajů</h2>
                    <p class="text-white/70 mb-4">Uživatel má právo:</p>
                    <ul class="list-disc list-inside space-y-2 text-white/70 ml-2">
                        <li>požadovat přístup ke svým osobním údajům</li>
                        <li>požadovat opravu nepřesných údajů</li>
                        <li>požadovat výmaz osobních údajů</li>
                        <li>požadovat omezení zpracování</li>
                        <li>vznést námitku proti zpracování</li>
                        <li>podat stížnost u dozorového úřadu</li>
                    </ul>
                    <p class="text-white/70 mt-4">Dozorovým orgánem v České republice je Úřad pro ochranu osobních údajů.</p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-white mb-4">7. Zabezpečení osobních údajů</h2>
                    <p class="text-white/70">Správce přijímá technická a organizační opatření k ochraně osobních údajů před neoprávněným přístupem nebo zneužitím.</p>
                </section>

                <section class="mb-6">
                    <h2 class="text-2xl font-bold text-white mb-4">8. Změny zásad ochrany osobních údajů</h2>
                    <p class="text-white/70">Správce si vyhrazuje právo tyto zásady ochrany osobních údajů kdykoliv upravit.</p>
                </section>
            </div>
        </div>
    </div>

    <Footer />
</div>

<style>
    .prose h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .prose h2::before {
        content: '';
        display: block;
        width: 4px;
        height: 1.5rem;
        background: #FFBA00;
        border-radius: 2px;
    }
</style>
