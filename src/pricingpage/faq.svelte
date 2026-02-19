<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";

    let openIndex = $state(-1);

    const faqs = [
        {
            question: "Pro koho je komunita vhodná?",
            answer: "Komunita je určená pro investory, kteří<br class='md:hidden' /> chtějí využít opce jako doplněk pro <br class='hidden md:block' /> své dlouhodobé akciové portfolio.<br /><br />Důraz je kladen na celý proces,<br class='md:hidden' /> rozhodování a práci s rizikem, ne na<br class='md:hidden' /> tipy <br class='hidden md:block' /> nebo zaručené výsledky.",
        },
        {
            question: "Využiju komunitu i když mám menší kapitál?",
            answer: "Ano. Součástí komunity je samostatné<br class='md:hidden' /> mini-portfolio, kde ukazujeme, jak naši<br class='md:hidden' /> <br class='hidden md:block' /> strategii využít i s menším kapitálem.<br /><br />Mini-portfolio začíná s částkou 200.000<br class='md:hidden' /> Kč a na reálných obchodech ukazujeme<br class='md:hidden' /> <br class='hidden md:block' /> celý proces – od výběru titulu, přes<br class='md:hidden' /> řízení pozice, až po realiování zisků.",
        },
        {
            question: "Jak často sdílíte nové obchody?",
            answer: "Sdílím kolem 200 obchodů za rok.<br class='md:hidden' /> V některých dnech jde o jeden obchod,<br class='md:hidden' /><br class='hidden md:block' /> ale někdy sdílím klidně i 3+ obchody<br class='md:hidden' /> za den.<br /><br />Mojí prioritou není kvantita, ale kvalita<br class='md:hidden' /> rozhodnutí.",
        },
        {
            question: "Mohu se ptát na konkrétní obchody nebo strategie?",
            answer: "Ano, můžete se na cokoliv doptávat<br class='md:hidden' /> mě, mého týmu i ostatních<br class='hidden md:block' />investorů<br class='md:hidden' /> z komunity.<br /><br />Rádi vám vysvětlíme myšlenkový<br class='md:hidden' /> proces za jakýmkoliv obchodem.<br class='md:hidden' /> <br class='hidden md:block' />Nicméně na otázky typu “Mám koupit<br class='md:hidden' /> X” nebo “Vyplatí se teď Y”,<br class='md:hidden' /> neodpovídám.<br /><br />Nejde o finanční poradenství, ale o<br class='md:hidden' /> pochopení procesu, abyste ho zvládli<br class='md:hidden' /> <br class='hidden md:block' />sami aplikovat v praxi.",
        },
        {
            question:
                "Je komunita vhodná i<br class='md:hidden' /> pro dlouhodobé investory?",
            answer: "Ano, opce jsou skvělý doplněk pro<br class='md:hidden' /> dlouhodobé investory.<br /><br />Poskytují nám větší kontrolu nad<br class='md:hidden' /> portfoliem, snižují volatilitu a<br class='md:hidden' /> <br class='hidden md:block' />dlouhodobě zvyšují výnos portfolia.",
        },
        {
            question:
                "Potřebuji mít předchozí<br class='md:hidden' /> zkušenosti s opcemi?",
            answer: "Ne, předchozí zkušenosti s opcemi<br class='md:hidden' /> nejsou nutné.<br /><br />Součástí komunity jsou praktické<br class='md:hidden' /> návody, díky kterým pochopíte, jak<br class='md:hidden' /> opce <br class='hidden md:block' />fungují v praxi a jak zapadají<br class='md:hidden' /> do správy portfolia.<br /><br />Nicméně stále platí, že komunita je<br class='md:hidden' /> postavená na aktivním přístupu a<br class='md:hidden' /> ochotě <br class='hidden md:block' />učit se – nejde o rychlý kurz<br class='md:hidden' /> ani hotová řešení.",
        },
        {
            question: "Přijímáte aktuálně nové členy?",
            answer: "Zatím ano, ale komunitu už brzy<br class='md:hidden' /> uzavřeme, abychom zachovali kvalitu<br class='md:hidden' /> <br class='hidden md:block' />obsahu a osobní přístup ke všem<br class='md:hidden' /> členům uvnitř.",
        },
    ];

    function toggle(index: number) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#111116] overflow-hidden"
>
    <Tag className="mx-auto">
        <AppleEmoji symbol="🚀" size={18} className="w-auto!" />
        <span class="text-[16px] text-white font-medium leading-none ml-1">
            Nejčastější dotazy
        </span>
    </Tag>

    <h2
        class="z-10 mt-2 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Ujistěte se, že děláte<br />
        <span class="text-[#FFBA00]">správné rozhodnutí</span>
    </h2>

    <div class="z-10 mt-12 flex flex-col gap-4 w-full px-4 max-w-[800px]">
        {#each faqs as faq, i}
            <div
                class="relative w-full p-px rounded-[20px] bg-[#1C1D19] transition-all duration-300"
            >
                <div
                    class="relative w-full rounded-[19px] overflow-hidden bg-linear-to-br from-[#191A1D] to-[#0A0A0B]"
                >
                    <button
                        onclick={() => toggle(i)}
                        class="w-full flex items-center justify-between px-6 py-6 text-left cursor-pointer transition-colors"
                    >
                        <span class="text-white text-[18px] font-bold pr-8">
                            {@html faq.question}
                        </span>

                        <!-- Toggle Icon -->
                        <div
                            class="relative shrink-0 w-8 h-8 flex items-center justify-center"
                        >
                            {#if openIndex === i}
                                <!-- Close Icon (X) -->
                                <div
                                    class="w-full h-full flex items-center justify-center transition-all duration-300"
                                >
                                    <div
                                        class="absolute w-5 h-0.5 bg-white/60 rounded-full rotate-45"
                                    ></div>
                                    <div
                                        class="absolute w-5 h-0.5 bg-white/60 rounded-full -rotate-45"
                                    ></div>
                                </div>
                            {:else}
                                <!-- Plus Icon -->
                                <div
                                    class="w-full h-full flex items-center justify-center transition-all duration-300"
                                >
                                    <div
                                        class="absolute w-5 h-0.5 bg-white/60 rounded-full"
                                    ></div>
                                    <div
                                        class="absolute w-0.5 h-5 bg-white/60 rounded-full"
                                    ></div>
                                </div>
                            {/if}
                        </div>
                    </button>

                    <div
                        class="overflow-hidden transition-all duration-300 ease-in-out {openIndex ===
                        i
                            ? 'max-h-[500px] opacity-100 pb-8'
                            : 'max-h-0 opacity-0'}"
                    >
                        <div
                            class="px-6 text-white text-[16px] leading-[1.6] font-medium"
                        >
                            {@html faq.answer}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
        <button
            onclick={() => {
                const element = document.getElementById("packages");
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const offset = window.innerWidth < 768 ? 20 : 140;
                    window.scrollTo({
                        top: window.pageYOffset + rect.top - offset,
                        behavior: "smooth",
                    });
                }
            }}
            class="group relative px-13 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
        >
            <span class="relative z-10">Přidat se do komunity</span>
            <div
                class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
            ></div>
        </button>
    </div>
</section>
