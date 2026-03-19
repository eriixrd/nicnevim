<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";

    interface Package {
        type: "monthly" | "annual";
        price: string;
        label: string;
        buttonText: string;
        icon: string;
        tagSymbol?: string;
        tagText?: string;
        features: string[];
        accentColor: string;
        shadowClass: string;
        gradientBorder: string;
    }

    const packages: Package[] = [
        {
            type: "monthly",
            price: "3.770 Kč",
            label: "Měsíční členství",
            buttonText: "Pořídit měsíční členství",
            icon: "/assets/icons/Silver.png",
            tagSymbol: "🔥",
            tagText: "Nejoblíbenější",
            accentColor: "rgba(255, 255, 255, 0.12)",
            shadowClass: "shadow-white-glow",
            gradientBorder: "from-white/50 via-transparent to-white/50",
            features: [
                "Sledujte všechny mé obchody<br />v reálném čase",
                "Přístup k celému mému portfoliu",
                "Můj aktuální pohled na trhy<br />(týdenní video-update)",
                "Watchlist 50+ firem & Ceny<br />na kterých plánuji obchodovat",
                "Data z Bloomberg terminálu<br />(valuace, výhledy & Fundament)",
                "Návody, jak vše aplikovat v praxi",
                "Osobní přístup ode mě a mého týmu",
                "Komunita 450+ aktivních investorů",
            ],
        },
        {
            type: "annual",
            price: "37.770 Kč",
            label: "Roční členství",
            buttonText: "Pořídit roční členství",
            icon: "/assets/icons/Gold.png",
            tagSymbol: "💰",
            tagText: "2 měsíce zdarma",
            accentColor: "rgba(255, 186, 0, 0.12)",
            shadowClass: "shadow-yellow-glow",
            gradientBorder: "from-[#FFBA00]/50 via-transparent to-[#FFBA00]/50",
            features: [
                "Přístup do bonusové sekce, kde sdílím<br />své spekulativním pozice",
                "Přístup na pravidelná osobní setkání<br />(exkluzivní networking se mnou<br />a investory z komunity)",
            ],
        },
    ];

    const annualHeading = "Všechny výhody měsíčního<br />členství a navíc:";

    let { openModal } = $props();
</script>

<section class="relative w-full px-5 py-20 md:px-4">
    <div class="relative flex flex-col items-center w-full">
        <!-- Main Tag -->
        <div
            id="packages"
            class="z-10 mt-16 flex flex-col items-center w-full scroll-mt-[7px]"
        >
            <Tag className="mx-auto">
                <AppleEmoji symbol="🔒" size={18} className="!w-auto" />
                <span
                    class="text-[16px] md:text-[16px] text-white font-medium leading-none"
                    >Uzavřená komunita</span
                >
            </Tag>

            <!-- Heading Section -->
            <div class="relative flex flex-col items-center w-full mt-2">
                <div
                    class="absolute top-1/2 left-1/2 w-[340px] h-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFBA00]/15 blur-[50px] pointer-events-none"
                    style="filter: blur(50px); -webkit-filter: blur(50px); will-change: filter, transform; transform: translate3d(0, 0, 0);"
                ></div>
                <h1
                    class="z-10 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
                >
                    Zvolte si členství,<br />
                    které <span class="text-[#FFBA00]">vám vyhovuje</span>
                </h1>
            </div>

            <p
                class="z-10 mt-2.5 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
            >
                Komunita je zatím otevřená<br />
                pro nové členy
            </p>

            <!-- Package Cards Container -->
            <div
                class="z-10 flex flex-col md:flex-row items-center justify-center gap-8 mx-auto mt-5 w-full max-w-[400px] md:max-w-[900px]"
            >
                {#each packages as pkg}
                    <div
                        class="relative w-full p-px rounded-[20px] bg-[#1C1D19]"
                    >
                        <!-- Shadow Layer -->
                        <div
                            class="absolute inset-0 rounded-[20px] z-[-1] {pkg.shadowClass}"
                            style="will-change: filter, transform; transform: translate3d(0, 0, 0);"
                        ></div>

                        <!-- Corner Highlight / Border Stroke -->
                        <div
                            class="absolute inset-0 rounded-[20px] bg-linear-to-tl {pkg.gradientBorder} pointer-events-none"
                        ></div>

                        <div
                            class="relative flex flex-col items-center w-full h-full pt-8 pb-6 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
                        >
                            <img
                                src={pkg.icon}
                                alt={pkg.label}
                                class="w-[35px] h-auto"
                                style="image-rendering: -webkit-optimize-contrast;"
                            />
                            <h2
                                class="mt-1 text-[39px] md:text-[41px] text-white font-extrabold"
                            >
                                {pkg.price}
                            </h2>
                            <p
                                class="mt-[-8px] text-[16px] md:text-[18px] text-[#6F6F6F] font-medium"
                            >
                                {pkg.label}
                            </p>

                            <button
                                onclick={openModal}
                                class="group relative mt-5 w-[85%] py-2 bg-[#FFC300] text-black text-[18px] font-bold rounded-[10px] shadow-[0_0_20px_rgba(255,195,0,0.25)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
                            >
                                <span class="relative z-10"
                                    >{pkg.buttonText}</span
                                >
                                <div
                                    class="absolute top-0 -left-[125%] w-[50%] h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"
                                ></div>
                            </button>

                            {#if pkg.tagText}
                                <Tag className="mt-3">
                                    {#if pkg.tagSymbol}
                                        <AppleEmoji
                                            symbol={pkg.tagSymbol}
                                            size={18}
                                            className="!w-auto"
                                        />
                                    {/if}
                                    <span
                                        class="text-[16px] md:text-[16px] text-white font-medium leading-none"
                                        >{pkg.tagText}</span
                                    >
                                </Tag>
                            {/if}

                            <div class="flex flex-col w-[85%] mt-8 gap-[15px]">
                                {#if pkg.type === "annual"}
                                    <p
                                        class="mb-2 text-[16px] md:text-[18px] text-white font-medium leading-[1.25]"
                                    >
                                        {@html annualHeading}
                                    </p>
                                {/if}

                                {#each pkg.features as feature}
                                    <div class="flex items-start gap-2">
                                        <img
                                            src="/assets/icons/Checkmark.png"
                                            alt="Check"
                                            class="shrink-0 w-[15px] h-[15px] mt-[2.6px]"
                                        />
                                        <span
                                            class="text-[16px] md:text-[18px] text-white font-medium leading-[1.25]"
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
        </div>
    </div>
</section>

<style>
    .shadow-white-glow {
        box-shadow: 0px 0px 79.4px 0px rgba(255, 255, 255, 0.12);
    }
    .shadow-yellow-glow {
        box-shadow: 0px 0px 79.4px 0px rgba(255, 186, 0, 0.12);
    }
    @media (min-width: 768px) {
        .shadow-white-glow {
            box-shadow: 0px 0px 120px 0px rgba(255, 255, 255, 0.15);
        }
        .shadow-yellow-glow {
            box-shadow: 0px 0px 120px 0px rgba(255, 186, 0, 0.15);
        }
    }
</style>
