<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#0C0914] overflow-hidden"
>
    <Tag className="mx-auto mt-2.5">
        <AppleEmoji symbol="🎁" size={18} className="w-auto!" />
        <span class="text-[16px] text-white font-medium leading-none ml-1">
            Bonusy pro členy komunity
        </span>
    </Tag>

    <h1
        class="z-10 mt-2 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Členové komunity<br />
        získají přístup k<br />
        dalším <span class="text-[#FFBA00]">doplňkovým<br />
        výhodám</span>
    </h1>

    <div
        class="z-10 mt-12 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-8 w-full px-4 max-w-[420px] md:max-w-[910px] lg:max-w-[1300px] mx-auto"
    >
        <!-- Bonus #1 -->
        <div class="relative w-full p-px rounded-[20px] bg-[#1C1D19]">
            <!-- Shadow Layer -->
            <div
                class="absolute inset-0 rounded-[20px] z-[-1] shadow-white-glow"
                style="will-change: filter, transform; transform: translate3d(0, 0, 0);"
            ></div>
            <!-- Wall Highlight / Border Stroke (White) -->
            <div
                class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
            ></div>

            <div
                class="relative flex flex-col items-start w-full h-full px-5 pt-5 pb-8 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
            >
                <!-- Image -->
                <div
                    class="relative w-full rounded-[15px] overflow-hidden bg-white/5"
                    style="aspect-ratio: 1.44 / 1;"
                >
                    <img
                        src="/assets/addpics/Group 58.png"
                        alt="Komunita investorů"
                        class="w-full h-full object-cover"
                    />
                </div>

                <!-- Number Tag -->
                <div class="relative p-px rounded-[10px] mt-4">
                    <div
                        class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
                    ></div>
                    <div
                        class="relative px-[12px] py-[4px] rounded-[9px] bg-linear-to-br from-[#040403] to-[#1C1D1B]"
                    >
                        <span class="text-white text-[16px] font-medium"
                            >Bonus #1</span
                        >
                    </div>
                </div>

                <!-- Heading -->
                <h3
                    class="mt-4 text-white text-[22px] md:text-[24px] font-bold leading-[1.3] text-left"
                >
                    Přístup ke <span class="text-[#FFBA00] font-bold"
                        >450+ zkušeným<br />investorům</span
                    > v komunitě
                </h3>

                <div class="flex flex-col w-full mt-4 gap-[15px]">
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Stanete se součástí komunity více než 450 investorů,
                            kde máte prostor pro diskuzi, otázky a sdílení
                            zkušeností s ostatními členy.
                        </span>
                    </div>
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Zároveň se můžete na cokoliv doptávat mě i mého
                            týmu.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bonus #2 -->
        <div class="relative w-full p-px rounded-[20px] bg-[#1C1D19]">
            <!-- Shadow Layer -->
            <div
                class="absolute inset-0 rounded-[20px] z-[-1] shadow-white-glow"
                style="will-change: filter, transform; transform: translate3d(0, 0, 0);"
            ></div>
            <!-- Wall Highlight / Border Stroke (White) -->
            <div
                class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
            ></div>

            <div
                class="relative flex flex-col items-start w-full h-full px-5 pt-5 pb-8 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
            >
                <!-- Image -->
                <div
                    class="relative w-full rounded-[15px] overflow-hidden bg-white/5"
                    style="aspect-ratio: 1.44 / 1;"
                >
                    <img
                        src="/assets/addpics/Group 59.png"
                        alt="Bloomberg výhledy"
                        class="w-full h-full object-cover"
                    />
                </div>

                <!-- Number Tag -->
                <div class="relative p-px rounded-[10px] mt-4">
                    <div
                        class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
                    ></div>
                    <div
                        class="relative px-[12px] py-[4px] rounded-[9px] bg-linear-to-br from-[#040403] to-[#1C1D1B]"
                    >
                        <span class="text-white text-[16px] font-medium"
                            >Bonus #2</span
                        >
                    </div>
                </div>

                <!-- Heading -->
                <h3
                    class="mt-4 text-white text-[22px] md:text-[24px] font-bold leading-[1.3] text-left"
                >
                    <span class="text-[#FFBA00] font-bold"
                        >Bloomberg výhledy,<br />valuace & fundament</span
                    >
                    k<br />firmám z watchlistu
                </h3>

                <div class="flex flex-col w-full mt-4 gap-[15px]">
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Ke každé firmě z watchlistu získáte přístup k
                            valuacím, fundamentálním datům a výhledům z
                            Bloomberg zdrojů.
                        </span>
                    </div>
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Cílem je poskytnout vám kvalitní a aktuální data,
                            abyste mohli dělat správná rozhodnutí.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bonus #3 -->
        <div class="relative w-full p-px rounded-[20px] bg-[#1C1D19]">
            <!-- Shadow Layer -->
            <div
                class="absolute inset-0 rounded-[20px] z-[-1] shadow-white-glow"
                style="will-change: filter, transform; transform: translate3d(0, 0, 0);"
            ></div>
            <!-- Wall Highlight / Border Stroke (White) -->
            <div
                class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
            ></div>

            <div
                class="relative flex flex-col items-start w-full h-full px-5 pt-5 pb-8 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
            >
                <!-- Image -->
                <div
                    class="relative w-full rounded-[15px] overflow-hidden bg-white/5"
                    style="aspect-ratio: 1.44 / 1;"
                >
                    <img
                        src="/assets/addpics/Mike deníky 1.png"
                        alt="Deníky profesionálních investorů"
                        class="w-full h-full object-cover"
                    />
                </div>

                <!-- Number Tag -->
                <div class="relative p-px rounded-[10px] mt-4">
                    <div
                        class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
                    ></div>
                    <div
                        class="relative px-[12px] py-[4px] rounded-[9px] bg-linear-to-br from-[#040403] to-[#1C1D1B]"
                    >
                        <span class="text-white text-[16px] font-medium"
                            >Bonus #3</span
                        >
                    </div>
                </div>

                <!-- Heading -->
                <h3
                    class="mt-4 text-white text-[22px] md:text-[24px] font-bold leading-[1.3] text-left"
                >
                    Deníky <span class="text-[#FFBA00] font-bold"
                        >profesionálních<br />investorů</span
                    > z našeho týmu
                </h3>

                <div class="flex flex-col w-full mt-4 gap-[15px]">
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Získáte přístup k deníkům našich
                            analytiků, ve kterých sdílí své aktuální
                            úvahy, rozhodování i obchody.
                        </span>
                    </div>
                    <div class="flex items-start gap-2">
                        <img
                            src="/assets/icons/Checkmark.png"
                            alt="Check"
                            class="shrink-0 w-[15px] h-[15px] mt-[5.5px]"
                        />
                        <span
                            class="text-[16px] text-white/90 font-medium leading-[1.5]"
                        >
                            Díky tomu můžete sledovat myšlenkový
                            proces analytiků se zaměřením na
                            technickou a fundamentální analýzu,
                            makro i geopolitiku a uvidíte, jak přemýšlí
                            nad trhem v reálném čase.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button
        onclick={() => {
            document
                .getElementById("reviews")
                ?.scrollIntoView({ behavior: "smooth" });
        }}
        class="group relative px-13 mt-8 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
    >
        <span class="relative z-10">Chci členství s výhodami!</span>
        <div
            class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
        ></div>
    </button>
</section>

<style>
    .shadow-white-glow {
        box-shadow: 0px 0px 79.4px 0px rgba(255, 255, 255, 0.12);
    }
    @media (min-width: 768px) {
        .shadow-white-glow {
            box-shadow: 0px 0px 120px 0px rgba(255, 255, 255, 0.12);
        }
    }
</style>
