<script lang="ts">
    import Tag from "../components/Tag.svelte";
    import AppleEmoji from "../components/AppleEmoji.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden"
>
    <!-- Background Glows -->
    <div
        class="absolute top-0 left-1/2 w-[280px] h-[200px] -translate-x-[150%] -translate-y-1/2 bg-[#8B33EE]/32 md:bg-[#8B33EE]/42 blur-[100px] pointer-events-none"
        style="filter: blur(100px); -webkit-filter: blur(100px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>
    <div
        class="absolute top-0 left-1/2 w-[280px] h-[200px] translate-x-[50%] -translate-y-1/2 bg-[#FFBA00]/32 md:bg-[#FFBA00]/35 blur-[100px] pointer-events-none"
        style="filter: blur(100px); -webkit-filter: blur(100px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>
    <div class="relative">
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="z-10 h-[85px] w-auto -mt-3 mb-2 select-none pointer-events-none"
            draggable="false"
            style="max-width:160px; image-rendering: -webkit-optimize-contrast;"
        />
        <div
            class="absolute inset-x-0 bottom-2 top-1/2 z-20 pointer-events-none bg-linear-to-b from-transparent to-black/100"
        ></div>
    </div>

    <h2
        class="z-30 -mt-7 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Proto si neustále<br />
        připomínám, že<br />
        <span class="text-[#FFBA00]">NIC NEVIM</span>
    </h2>

    <p
        class="z-10 mt-3 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        <span class="md:hidden">
            Přes 10 let profesionálního <br />
            pokeru mě naučilo pracovat s <br />
            rizikem, pravděpodobností <br />
            a emocemi.
        </span>
        <span class="hidden md:inline">
            Přes 10 let profesionálního <br />
            pokeru mě naučilo pracovat s rizikem, <br />
            pravděpodobností a emocemi.
        </span>
    </p>

    <div
        class="z-10 w-full max-w-[370px] md:max-w-[480px] h-auto border border-white/5 rounded-[20px] mt-8 flex flex-col items-center justify-start p-8 md:p-10"
    >
        <img
            src="/assets/icons/info.svg"
            alt="Info"
            class="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
        />
        <p
            class="text-white text-[20px] md:text-[24px] font-medium md:font-normal leading-[150%] text-center mt-4"
        >
            Zároveň mi každý den připomíná,<br />
            <span
                class="bg-linear-to-r from-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                >že učení nikdy nekončí</span
            >.
        </p>
    </div>

    <!-- Vertical separator line -->
    <div
        class="mt-10 w-px h-[80px] md:h-[120px] bg-white pointer-events-none"
        style="-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%);"
    ></div>

    <h2
        class="z-10 mt-10 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Z těchto zkušeností <br />
        vycházejí <span class="text-[#FFBA00]">3 pilíře</span>,
        <span class="hidden md:inline">kterými</span>
        <br />
        <span class="md:hidden">kterými </span>se řídím
    </h2>

    <div
        class="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-6 md:gap-8 mt-12 w-full max-w-[1850px] px-4"
    >
        {#each [{ icon: "/assets/icons/Check.svg", title: "Fundamentální analýza", desc: "Tvoří základ pro výběr titulů vhodných<br />k obchodování. Pomáhá nám pochopit,<br /><span class='text-[#C9A44A] font-bold'>jak firma skutečně vydělává</span>, jaká je<br />její vnitřní hodnota a v jaké fázi cyklu<br />se zrovna nachází." }, { icon: "/assets/icons/Tech.svg", title: "Technická analýza", desc: "Zde pracujeme s cenovými úrovněmi,<br />trendem a volatilitou, což nám<br />pomáhá <span class='text-[#C9A44A] font-bold'>správně načasovat vstupy</span><br />do jednotlivých pozic." }, { icon: "/assets/icons/Geo.svg", title: "Makro & Geopolitika", desc: "Pochopení celého kontextu dává<br />obchodům širší rámec. Pomáhá nám<br />pochopit, <span class='text-[#C9A44A] font-bold'>v jakém prostředí se<br />rozhodujeme</span> a jaké síly mohou ovlivnit<br />trhy a ceny aktiv." }] as pillar}
            <div
                class="flex flex-col items-start p-6 w-full max-w-[380px] h-auto rounded-[20px] bg-linear-to-br from-[#111116] via-[#1C2330] to-[#111116]"
            >
                <!-- Icon with Gradient Mask -->
                <div
                    class="w-8 h-8 bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A]"
                    style="-webkit-mask-image: url({pillar.icon}); mask-image: url({pillar.icon}); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-size: contain; mask-size: contain;"
                ></div>

                <h3
                    class="mt-1 text-[24px] text-white font-bold leading-[150%]"
                >
                    {pillar.title}
                </h3>

                <p class="text-[18px] text-white font-medium leading-[150%]">
                    {@html pillar.desc}
                </p>
            </div>
        {/each}
    </div>

    <p
        class="z-10 mt-8 text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        Přesně tento postup <span class="text-[#FFBA00] font-bold"
            >používáme<br />při správě kapitálu</span
        >.
    </p>

    <img
        src="/assets/icons/Arrow.svg"
        alt="Arrow"
        class="z-10 mt-16 w-[68px] md:w-[85px] h-[72px] md:h-[90px] mx-auto select-none pointer-events-none"
        draggable="false"
    />

    <h2
        class="z-10 mt-16 max-w-[950px] px-4 text-center text-[35px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Podílíme se na <span class="hidden md:inline">investicích</span>
        <br />
        <span class="md:hidden">investicích v řádech</span>
        <span class="hidden md:inline"
            >v řádech <span class="text-[#FFBA00]">stovek milionů</span></span
        >
        <br />
        <span class="text-[#FFBA00] md:hidden">stovek milionů</span>
        <span class="md:hidden"> korun</span>
        <span class="hidden md:inline text-white">korun</span>
    </h2>

    <p
        class="z-10 mt-2 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        A proto jsem se rozhodl zůstat <span class="hidden md:inline"
            >anonymní,</span
        >
        <br />
        <span class="md:hidden">anonymní, abych mohl </span>
        <span class="hidden md:inline"
            >abych mohl <span class="text-[#FFBA00] font-bold"
                >chránit své soukromí.</span
            ></span
        >
        <span class="text-[#FFBA00] font-bold md:hidden">chránit</span>
        <br class="md:hidden" />
        <span class="text-[#FFBA00] font-bold md:hidden">své soukromí.</span>
    </p>

    <img
        src="/assets/persons/theman.png"
        alt="Person"
        class="z-10 mt-10 w-[344px] md:w-[430px] h-auto rounded-[15px] mx-auto select-none pointer-events-none"
        draggable="false"
    />

    <div
        class="flex items-center justify-center w-fit h-fit -mt-5 z-11 mx-auto rounded-[15px] px-[25px] py-[25px] md:px-[38px]"
        style="background: linear-gradient(to bottom right, #E4A600 25%, #FFD972 50%, #E4A600 75%);"
    >
        <p
            class="text-[#000000] text-[24px] md:text-[30px] font-semibold leading-[150%] text-center"
        >
            Netoužím po slávě.<br />
            Chci vám přiblížit, jak může<br />
            vypadat správa kapitálu
            <span class="font-extrabold"
                >na<br />
                vyšší úrovni</span
            >.
        </p>
    </div>

    <Tag className="mx-auto mt-16">
        <AppleEmoji symbol="bell" size={18} />
        <span class="text-white text-[16px] md:text-[18px] font-medium ml-1"
            >A to přímo v praxi...</span
        >
    </Tag>

    <p
        class="z-10 mt-2 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        Na mých reálných obchodech<br />
        <span class="text-[#FFBA00] font-bold">v reálném čase</span>:
    </p>

    <div
        class="flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-8 mt-10 w-full max-w-[1600px] px-4"
    >
        {#each ["Nákup 1 1.png", "Nákup 2 1.png", "Nákup 3 1.png"] as img}
            <img
                src="/assets/addpics/{img}"
                alt="Nákup"
                class="z-10 w-[344px] md:w-[430px] h-auto rounded-[15px] select-none pointer-events-none"
                draggable="false"
            />
        {/each}
    </div>
    <button
        onclick={() => {
            document
                .getElementById("reviews")
                ?.scrollIntoView({ behavior: "smooth" });
        }}
        class="group mt-10 relative px-13 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
    >
        <span class="relative z-10">Chci se začít vzdělávat!</span>
        <div
            class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
        ></div>
    </button>
</section>
