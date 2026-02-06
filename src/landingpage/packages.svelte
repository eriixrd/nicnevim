<script lang="ts">
    const monthlyFeatures = [
        "Sledujte všechny mé obchody<br />v reálném čase",
        "Přístup k celému mému portfoliu",
        "Můj aktuální pohled na trhy<br />(týdenní video-update)",
        "Watchlist 100+ firem & Ceny<br />na kterých plánuji obchodovat",
        "Data z Bloomberg terminálu<br />(valuace, výhledy & Fundament)",
        "Návody, jak vše aplikovat v praxi",
        "Osobní přístup ode mě a mého týmu",
        "Komunita 450+ aktivních investorů",
    ];

    const annualFeatures = [
        "Přístup do bonusové sekce, kde sdílím<br />své spekulativním pozice",
        "Přístup na pravidelná osobní setkání<br />(exkluzivní networking se mnou<br />a investory z komunity)",
    ];
</script>

<section class="w-full py-20 relative">
    <div
        class="relative w-full flex flex-col items-center justify-center px-5 md:px-4"
    >
        <div
            class="relative p-px z-10 rounded-[10px] bg-linear-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] mx-auto w-fit"
        >
            <div
                class="bg-[#120b2e]/60 backdrop-blur-md rounded-[10px] py-[4.5px] md:py-[4.725px] px-3 md:px-[12.6px] flex items-center justify-center gap-[5px] md:gap-[5.25px]"
            >
                <img
                    src="/assets/icons/Lock.png"
                    alt="Group"
                    class="w-[17px] h-[17px] md:w-[18px] md:h-[18px]"
                />
                <span
                    class="text-[#ffffff] font-medium text-[14px] md:text-[14.7px]"
                    >Uzavřená komunita</span
                >
            </div>
        </div>

        <div class="relative w-full flex flex-col items-center justify-center">
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[150px] bg-[#FFBA00]/15 blur-[50px] rounded-full pointer-events-none z-0"
            ></div>
            <h1
                class="text-white text-center font-extrabold text-[36px] md:text-[40px] mt-2.5 max-w-[950px] leading-tight z-10 px-4"
            >
                Zvolte si členství,<br />
                které <span class="text-[#FFBA00]">vám vyhovuje</span>
            </h1>
        </div>

        <p
            class="text-white text-center font-medium md:font-normal text-[20px] md:text-[24px] mt-2.5 max-w-[900px] leading-[150%] z-10 px-4"
        >
            Komunita je zatím otevřená<br />
            pro nové členy
        </p>

        <div
            class="mt-5 flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 w-full max-w-[400px] md:max-w-[900px] mx-auto z-10"
        >
            <!-- First Rectangle -->
            <div
                class="relative p-px rounded-[20px] bg-[#1C1D19] shadow-white-glow w-full"
            >
                <div
                    class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-white/50 via-transparent to-white/50 pointer-events-none"
                ></div>
                <div
                    class="relative w-full h-full rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A] flex flex-col items-center pt-8 pb-6"
                >
                    <style>
                        .shadow-white-glow {
                            box-shadow: 0px 0px 79.4px 0px
                                rgba(255, 255, 255, 0.12);
                        }
                        @media (min-width: 768px) {
                            .shadow-white-glow {
                                box-shadow: 0px 0px 120px 0px
                                    rgba(255, 255, 255, 0.15);
                            }
                        }
                    </style>
                    <img
                        src="/assets/icons/Silver.png"
                        alt="Silver crown"
                        class="w-[35px] h-auto"
                    />
                    <h2
                        class="text-white font-extrabold text-[39px] md:text-[41px] mt-1"
                    >
                        3.770 Kč
                    </h2>
                    <p
                        class="text-[#6F6F6F] font-medium text-[16px] md:text-[17px] -mt-2"
                    >
                        Měsíční členství
                    </p>
                    <button
                        class="mt-5 w-[85%] py-2 bg-[#FFC300] text-black font-bold text-[18px] rounded-[10px] cursor-pointer transition-all duration-200 shadow-[0_0_20px_rgba(255,195,0,0.25)]"
                    >
                        Pořídit měsíční členství
                    </button>

                    <!-- Tag -->
                    <div
                        class="relative p-px z-10 rounded-[10px] bg-linear-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] mt-3 w-fit"
                    >
                        <div
                            class="bg-[#120b2e]/60 backdrop-blur-md rounded-[10px] py-[4px] px-3 flex items-center justify-center gap-1.5"
                        >
                            <span class="text-[14px]">🔥</span>
                            <span
                                class="text-[#ffffff] font-medium text-[13px] md:text-[14px]"
                                >Nejoblíbenější</span
                            >
                        </div>
                    </div>

                    <!-- Features -->
                    <div class="mt-8 w-[85%] flex flex-col gap-[15px]">
                        {#each monthlyFeatures as feature}
                            <div class="flex items-start gap-2">
                                <img
                                    src="/assets/icons/Checkmark.png"
                                    alt="Check"
                                    class="w-[15px] h-[15px] mt-[3px] shrink-0"
                                />
                                <span
                                    class="text-white font-medium text-[14px] md:text-[15px] leading-[1.25]"
                                >
                                    {@html feature}
                                </span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Second Rectangle -->
            <div
                class="relative p-px rounded-[20px] bg-[#1C1D19] shadow-yellow-glow w-full"
            >
                <div
                    class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-[#FFBA00]/50 via-transparent to-[#FFBA00]/50 pointer-events-none"
                ></div>
                <div
                    class="relative w-full h-full rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A] flex flex-col items-center pt-8 pb-6"
                >
                    <style>
                        .shadow-yellow-glow {
                            box-shadow: 0px 0px 79.4px 0px
                                rgba(255, 186, 0, 0.12);
                        }
                        @media (min-width: 768px) {
                            .shadow-yellow-glow {
                                box-shadow: 0px 0px 120px 0px
                                    rgba(255, 186, 0, 0.15);
                            }
                        }
                    </style>
                    <img
                        src="/assets/icons/Gold.png"
                        alt="Gold crown"
                        class="w-[35px] h-auto"
                    />
                    <h2
                        class="text-white font-extrabold text-[39px] md:text-[41px] mt-1"
                    >
                        37.770 Kč
                    </h2>
                    <p
                        class="text-[#6F6F6F] font-medium text-[16px] md:text-[17px] -mt-2"
                    >
                        Roční členství
                    </p>
                    <button
                        class="mt-5 w-[85%] py-2 bg-[#FFC300] text-black font-bold text-[18px] rounded-[10px] cursor-pointer transition-all duration-200 shadow-[0_0_20px_rgba(255,195,0,0.25)]"
                    >
                        Pořídit roční členství
                    </button>

                    <!-- Tag -->
                    <div
                        class="relative p-px z-10 rounded-[10px] bg-linear-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] mt-3 w-fit"
                    >
                        <div
                            class="bg-[#120b2e]/60 backdrop-blur-md rounded-[10px] py-[4px] px-3 flex items-center justify-center gap-1.5"
                        >
                            <span class="text-[14px]">💰</span>
                            <span
                                class="text-[#ffffff] font-medium text-[13px] md:text-[14px]"
                                >Ušetříte 18%</span
                            >
                        </div>
                    </div>

                    <!-- Features -->
                    <div class="mt-8 w-[85%] flex flex-col gap-[15px]">
                        <p
                            class="text-white font-medium text-[16px] md:text-[17px] leading-[1.25] mb-2"
                        >
                            Všechny výhody měsíčního<br />členství a navíc:
                        </p>
                        {#each annualFeatures as feature}
                            <div class="flex items-start gap-2">
                                <img
                                    src="/assets/icons/Checkmark.png"
                                    alt="Check"
                                    class="w-[15px] h-[15px] mt-[3px] shrink-0"
                                />
                                <span
                                    class="text-white font-medium text-[14px] md:text-[15px] leading-[1.25]"
                                >
                                    {@html feature}
                                </span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
