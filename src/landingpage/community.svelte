<script lang="ts">
    import Tag from "../components/Tag.svelte";
    import AppleEmoji from "../components/AppleEmoji.svelte";

    const titles = [
        {
            image: "/assets/addpics/Group 65.png",
            title: 'Přístup ke všem mým<br />obchodům <span class="text-[#FFBA00] font-bold">v reálném čase</span>',
            features: [
                "Získáte přístup do sekce, kde sdílím<br />všechny své nákupy ihned jak je udělám.<br />O každém vstupu i výstupu z pozice jste<br />vždy informování oznámením na mobilu.",
                "Cílem je poskytnout vám transparentní<br />vhled do praxe, ze které se můžete<br />dlouhodobě učit.",
            ],
        },
        {
            image: "/assets/addpics/Group 64.png",
            title: 'Přístup k celému <span class="text-[#FFBA00] font-bold">veřejnému</span><br /><span class="text-[#FFBA00] font-bold">portfoliu</span> <span class="text-[18px] font-medium text-white/90">(~2.000.000 USD)</span>',
            features: [
                "Uvidíte celé portfolio přehledně na<br />jednom místě - všechny vypsané PUT<br />a CALL opce, akcie, které držím,<br />i dlouhodobé pozice včetně kryptoměn.",
                "Díky tomu získáte jasný kontext ke<br />každému obchodu a struktuře celého<br />portfolia.",
            ],
        },
        {
            image: "/assets/addpics/Group 62.png",
            title: '<span class="text-[#FFBA00] font-bold">Mini-portfolio:</span> Jak naši<br />opční strategii využít s<br /><span class="text-[#FFBA00] font-bold">menším kapitálem</span>',
            features: [
                "Jedná se o zcela nové portfolio, na<br />kterém vám přímo v praxi ukazujeme,<br />jak využívat opce i s menším kapitálem<br />(200.000 Kč).",
                "Vybrané obchody rozebíráme do<br />hloubky, abyste pochopili logiku<br />rozhodování, práci s rizikem a celý<br />proces. Nejen samotný výsledek.",
            ],
        },
        {
            image: "/assets/addpics/Group 63.png",
            title: '<span class="text-[#FFBA00] font-bold">Pravidelný update:</span> Náš<br />aktuální pohled na trhy<br />a portfolio',
            features: [
                "Pravidelný video-update, ve kterém<br />rozebíráme aktuální stav portfolia,<br />jednotlivé pozice a změny na trzích.",
                "Cílem je poskytnout vám jasný přehled a<br />kontext, abyste chápali logiku našich<br />rozhodnutí a další kroky do budoucna.",
            ],
        },
        {
            image: "/assets/addpics/Group 61.png",
            title: '<span class="text-[#FFBA00] font-bold">Watchlist zajímavých</span><br /><span class="text-[#FFBA00] font-bold">firem</span> a ceny, na kterých<br />plánujeme obchodovat',
            features: [
                "Získáte přístup k aktualizovanému<br />seznamu firem, které dlouhodobě<br />sledujeme a plánujeme vypsat opce.<br />Zároveň u nich uvádíme výpočet<br />vnitřní hodnoty.",
                "Watchlist nám pomáhá udržet si přehled<br />o potenciálních příležitostech na trhu.",
            ],
        },
        {
            image: "/assets/addpics/Group 60.png",
            title: '<span class="text-[#FFBA00] font-bold">Praktické návody:</span> Jak<br />obchodovat opce <span class="text-[#FFBA00] font-bold">krok za</span><br /><span class="text-[#FFBA00] font-bold">krokem</span>',
            features: [
                "Získáte strukturované návody, které<br />popisují celý proces práce s opcemi – od<br />výběru titulu až po řízení pozice.",
                "Cílem je, abyste chápali celý postup a<br />mohli ho sami přenést do praxe.",
            ],
        },
    ];
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden"
>
    <Tag className="mx-auto">
        <AppleEmoji symbol="fire" size={18} />
        <span class="text-white text-[16px] md:text-[18px] font-medium ml-1">
            Co získáte uvnitř komunity?
        </span>
    </Tag>

    <div class="relative flex flex-col items-center w-full">
        <div
            class="absolute top-1/2 left-1/2 w-[400px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6633EE]/20 blur-[80px] pointer-events-none"
            style="filter: blur(80px); -webkit-filter: blur(80px); will-change: filter, transform; transform: translate3d(0, 0, 0);"
        ></div>
        <h2
            class="z-10 mt-2 max-w-[950px] text-center text-[34px] md:text-[40px] text-white font-extrabold leading-[1.1]"
        >
            Pokud se dnes <br class="md:hidden" /> přidáte
            <br class="hidden md:block" />
            <span class="text-[#FFBA00]">do komunity</span>,
            <br class="md:hidden" />
            ihned získáte <br class="hidden md:block" />
            přístup <br class="md:hidden" /> ke
            <span class="text-[#FFBA00]">všemu obsahu</span>
        </h2>
    </div>

    <div
        class="z-10 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-[420px] md:max-w-[1375px] mx-auto"
    >
        {#each titles as pkg, i}
            <div class="relative w-full p-px rounded-[20px] bg-[#1C1D19]">
                <!-- Shadow Layer -->
                <div
                    class="absolute inset-0 rounded-[20px] z-[-1] shadow-yellow-glow"
                    style="will-change: filter, transform; transform: translate3d(0, 0, 0);"
                ></div>

                <!-- Corner Highlight / Border Stroke -->
                <div
                    class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-[#FFBA00]/50 via-transparent to-[#FFBA00]/50 pointer-events-none"
                ></div>

                <div
                    class="relative flex flex-col items-start w-full h-full px-5 pt-5 pb-8 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
                >
                    <div
                        class="relative w-full rounded-[15px] overflow-hidden bg-yellow-500/10 aspect-[1.44/1]"
                    >
                        <img
                            src={pkg.image}
                            alt={pkg.title.replace(/<[^>]*>?/gm, "")}
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <!-- Number Tag -->
                    <div class="relative p-px rounded-[10px] mt-4">
                        <!-- White Border Stroke -->
                        <div
                            class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
                        ></div>
                        <!-- Tag Background -->
                        <div
                            class="relative px-[12px] py-[4px] rounded-[9px] bg-linear-to-br from-[#040403] to-[#1C1D1B]"
                        >
                            <span class="text-white text-[16px] font-medium"
                                >#{i + 1}</span
                            >
                        </div>
                    </div>

                    <!-- Heading -->
                    <h3
                        class="mt-4 text-white text-[22px] md:text-[24px] font-bold leading-[1.5] text-left"
                    >
                        {@html pkg.title}
                    </h3>

                    <div class="flex flex-col w-full mt-4 gap-[15px]">
                        {#each pkg.features as feature}
                            <div class="flex items-start gap-2">
                                <img
                                    src="/assets/icons/Checkmark.png"
                                    alt="Check"
                                    class="shrink-0 w-[15px] h-[15px] mt-[3px] md:mt-[5.5px]"
                                />
                                <span
                                    class="text-[15px] md:text-[16px] text-white/90 font-medium leading-[1.5]"
                                >
                                    {@html feature}
                                </span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <button
        onclick={() => {
            document
                .getElementById("reviews")
                ?.scrollIntoView({ behavior: "smooth" });
        }}
        class="group relative px-13 mt-8 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
    >
        <span class="relative z-10">Chci se přidat!</span>
        <div
            class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
        ></div>
    </button>
</section>

<style>
    .shadow-yellow-glow {
        box-shadow: 0px 0px 79.4px 0px rgba(255, 186, 0, 0.12);
    }
    @media (min-width: 768px) {
        .shadow-yellow-glow {
            box-shadow: none;
        }
    }
</style>
