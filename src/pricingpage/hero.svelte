<script lang="ts">
    import { onMount } from "svelte";
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
    import Stars from "../components/Stars.svelte";

    let { openModal = () => {} }: { openModal: () => void } = $props();

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

    // Carousel Logic
    let scrollContainer = $state<HTMLDivElement>();
    let currentIndex = $state(0);
    const allItems = [
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57,
    ];

    let isDesktop = $state(false);

    const itemGroups = $derived.by(() => {
        const groups: number[][] = [];
        const items = isDesktop ? allItems : allItems.slice(0, -2);
        const groupSize = isDesktop ? 2 : 3;

        for (let i = 0; i < items.length; i += groupSize) {
            const group = items.slice(i, i + groupSize);
            groups.push(group);
        }
        return groups;
    });

    const gap = $derived(isDesktop ? 24 : 12);
    const totalColumns = $derived(itemGroups.length);
    const totalPages = $derived(isDesktop ? totalColumns - 2 : totalColumns);

    onMount(() => {
        const checkScreenSize = () => {
            isDesktop = window.innerWidth >= 1280;
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    });

    let isScrollingProgrammatically = $state(false);
    function easeOutQuart(t: number) {
        return 1 - --t * t * t * t;
    }

    function animateScroll(target: number, duration: number) {
        if (!scrollContainer) return;
        const start = scrollContainer.scrollLeft;
        const change = target - start;
        let startTime: number | null = null;
        isScrollingProgrammatically = true;
        function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            if (scrollContainer) {
                scrollContainer.scrollLeft =
                    start + change * easeOutQuart(progress);
            }
            if (timeElapsed < duration) requestAnimationFrame(animation);
            else isScrollingProgrammatically = false;
        }
        requestAnimationFrame(animation);
    }

    function handleScroll() {
        if (isScrollingProgrammatically || !scrollContainer) return;
        const currentScroll = scrollContainer.scrollLeft;
        const itemWidth = (isDesktop ? 425 : 340) + gap;
        const newIndex = Math.round(currentScroll / itemWidth);
        if (
            newIndex !== currentIndex &&
            newIndex >= 0 &&
            newIndex < totalPages
        ) {
            currentIndex = newIndex;
        }
    }

    function scrollTo(index: number) {
        if (!scrollContainer) return;
        if (index < 0) index = totalPages - 1;
        if (index >= totalPages) index = 0;
        currentIndex = index;
        const currentWidth = isDesktop ? 425 : 340;
        const targetLeft = index * (currentWidth + gap);
        animateScroll(targetLeft, 600);
    }

    function next() {
        scrollTo(currentIndex + 1);
    }
    function prev() {
        scrollTo(currentIndex - 1);
    }
    function setPage(index: number) {
        scrollTo(index);
    }

    let isDragging = $state(false);
    let startX = 0;
    let scrollStart = 0;
    let wasDragging = $state(false);

    function handleMouseDown(e: MouseEvent) {
        if (!scrollContainer) return;
        isDragging = true;
        wasDragging = false;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollStart = scrollContainer.scrollLeft;
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseMove(e: MouseEvent) {
        if (!isDragging || !scrollContainer) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) wasDragging = true;
        scrollContainer.scrollLeft = scrollStart - walk;
    }

    function handleMouseUp() {
        if (!isDragging) return;
        isDragging = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        if (scrollContainer) {
            const currentScroll = scrollContainer.scrollLeft;
            const itemWidth = (isDesktop ? 425 : 340) + gap;
            const newIndex = Math.round(currentScroll / itemWidth);
            scrollTo(newIndex);
        }
        setTimeout(() => {
            wasDragging = false;
        }, 100);
    }
</script>

<section class="relative flex flex-col items-center justify-center pt-10 pb-15">
    <div
        class="absolute top-0 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 bg-[#6633EE]/70 blur-[50px] pointer-events-none"
        style="filter: blur(70px); -webkit-filter: blur(70px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>

    <div
        class="relative flex flex-col items-center justify-center w-full max-w-full"
    >
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="z-10 h-[80px] w-auto select-none pointer-events-none"
            draggable="false"
            style="max-width:160px; image-rendering: -webkit-optimize-contrast;"
        />

        <Tag className="mx-auto -mt-1">
            <img
                src="/assets/persons/Ppls.png"
                alt="Group"
                class="w-[40px] h-[18px] md:w-[42px] md:h-[18px]"
            />
            <span class="text-[16px] text-white font-medium leading-none"
                >450+ Aktivních investorů</span
            >
        </Tag>

        <h1
            class="z-10 mt-5 max-w-[950px] px-4 text-center text-[33px] md:text-[40px] text-white font-extrabold leading-[1.1]"
        >
            Potvrďte členství,<br />
            které <span class="text-[#FFBA00]">si chcete pořídit</span>
        </h1>

        <p
            class="z-10 mt-3 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-semibold md:font-medium leading-[1.3]"
        >
            Následně budete přesměrováni<br />
            <span class="gold-gradient-text">na platební bránu</span>
        </p>

        <!-- Package Cards Container -->
        <div
            id="packages"
            class="z-10 flex flex-col md:flex-row items-center justify-center gap-8 mx-auto mt-10 w-full max-w-[400px] md:max-w-[900px]"
        >
            {#each packages as pkg}
                <div class="relative w-full p-px rounded-[20px] bg-[#1C1D19]">
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
                            <span class="relative z-10">{pkg.buttonText}</span>
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
                                        className="w-auto!"
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
                                        class="text-[16px] md:text-[18px] text-white font-medium leading-tight"
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
        <Stars className="mt-15" />

        <h2
            class="z-10 mt-4 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            Přečtěte si, jak<br />
            komunitu hodnotí<br />
            <span class="text-[#FFBA00]">členové</span>
        </h2>

        <!-- Testimonials Carousel -->
        <div class="relative w-full mt-2 z-10 group px-0">
            <div
                bind:this={scrollContainer}
                class="carousel flex overflow-x-auto no-scrollbar py-4"
                onmousedown={handleMouseDown}
                onscroll={handleScroll}
                role="region"
                aria-label="Testimonials carousel"
                style="cursor: {isDragging
                    ? 'grabbing'
                    : 'grab'}; user-select: none; scroll-snap-type: {isDragging ||
                isScrollingProgrammatically
                    ? 'none'
                    : 'x mandatory'};"
            >
                <div
                    class="carousel-body flex gap-3 xl:gap-6 w-max pl-5 pr-5 xl:pl-[max(0px,calc(50%-650px))] xl:pr-[max(0px,calc(50%-650px))] opacity-100"
                >
                    {#each itemGroups as group, i}
                        <div
                            class="carousel-slide shrink-0 w-[340px] xl:w-[425px] flex flex-col gap-3 xl:gap-6"
                            style="scroll-snap-align: center;"
                        >
                            {#each group as itemNumber}
                                <div
                                    class="w-full h-[200px] md:h-[250px] py-2 px-4 md:px-6.5 md:py-2.5 overflow-hidden bg-linear-to-b from-[#0A0A0A] to-[#000000] flex items-center justify-center"
                                >
                                    <img
                                        src="/assets/testimonials/Group {itemNumber}.png"
                                        alt="Testimonial {itemNumber}"
                                        class="block max-w-full h-auto max-h-full select-none pointer-events-none mix-blend-lighten"
                                        style="image-rendering: -webkit-optimize-contrast; image-rendering: auto;"
                                        draggable="false"
                                    />
                                </div>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <div class="z-10 flex flex-col items-center mt-6 gap-6 mb-10">
            <div class="flex justify-center gap-2.5">
                {#each Array(totalPages) as _, i}
                    <button
                        onclick={() => setPage(i)}
                        class="h-2.5 rounded-full cursor-pointer transition-all duration-300 {currentIndex ===
                        i
                            ? 'w-6 bg-[#ffffff]/80'
                            : 'w-2.5 bg-[#ffffff]/20 hover:bg-white/40'}"
                        aria-label="Go to page {i + 1}"
                    ></button>
                {/each}
            </div>

            <div class="flex gap-4 pb-5">
                <button
                    onclick={prev}
                    class="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 select-none outline-none focus:outline-none"
                    aria-label="Previous testimonials"
                >
                    <img
                        src="/assets/icons/Arrow.png"
                        alt="Previous"
                        class="w-[50px] h-[50px] opacity-80 pointer-events-none"
                        style="filter: invert(1) brightness(1.8); transform: scaleX(-1);"
                    />
                </button>
                <button
                    onclick={next}
                    class="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 select-none outline-none focus:outline-none"
                    aria-label="Next testimonials"
                >
                    <img
                        src="/assets/icons/Arrow.png"
                        alt="Next"
                        class="w-[50px] h-[50px] opacity-80 pointer-events-none"
                        style="filter: invert(1) brightness(1.8);"
                    />
                </button>
            </div>
        </div>

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
            <span class="relative z-10">Chci se taky přidat</span>
            <div
                class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
            ></div>
        </button>
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
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .gold-gradient-text {
        background: linear-gradient(to bottom, #d3c295, #c9a44a);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        display: inline-block;
    }
</style>
