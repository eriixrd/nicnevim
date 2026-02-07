<script lang="ts">
    import { onMount } from "svelte";

    let scrollContainer: HTMLDivElement;
    let currentIndex = $state(0);

    // Data
    const allItems = [
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57,
    ];

    // Responsive item grouping:
    // - Mobile: 3 items per group, exclude last 2 images (56, 57)
    // - Desktop: 2 items per group, show all images
    let isDesktop = $state(false);

    const itemGroups = $derived.by(() => {
        const groups: number[][] = [];
        // On mobile, exclude last 2 items (56, 57)
        const items = isDesktop ? allItems : allItems.slice(0, -2);
        const groupSize = isDesktop ? 2 : 3;

        for (let i = 0; i < items.length; i += groupSize) {
            const group = items.slice(i, i + groupSize);
            groups.push(group);
        }

        return groups;
    });

    // Config
    const colWidth = 340;
    const gap = 24;
    const totalColumns = $derived(itemGroups.length);

    // Responsive totalPages: all items on mobile, peek effect on desktop
    const totalPages = $derived(isDesktop ? totalColumns - 2 : totalColumns);

    onMount(() => {
        // Check if screen is desktop size (xl breakpoint = 1280px)
        const checkScreenSize = () => {
            isDesktop = window.innerWidth >= 1280;
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    });

    function scrollTo(index: number) {
        if (!scrollContainer) return;

        // Loop index
        if (index < 0) index = totalPages - 1;
        if (index >= totalPages) index = 0;

        currentIndex = index;

        const targetLeft = index * (colWidth + gap);

        scrollContainer.scrollTo({
            left: targetLeft,
            behavior: "smooth",
        });
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
</script>

<section class="z-10 w-full bg-[#111116] overflow-hidden">
    <div
        class="relative flex flex-col items-center justify-center w-full pt-[70px] pb-10"
    >
        <!-- Background Glow -->
        <div
            class="absolute top-1/2 left-1/2 w-[250px] h-[750px] md:w-[750px] md:h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AFAAFF]/25 blur-[150px] pointer-events-none z-0"
        ></div>

        <!-- Header Content -->
        <div class="z-10 flex justify-center gap-[5px]">
            {#each Array(5) as _}
                <img
                    src="/assets/icons/Star.svg"
                    alt="Star"
                    class="w-[16.47px] h-[15.92px] md:w-[17.29px] md:h-[16.72px] drop-shadow-[0_0_10px_rgba(255,186,0,0.6)]"
                />
            {/each}
        </div>

        <h1
            class="z-10 mt-2.5 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            Jak komunitu<br />hodnotí
            <span class="text-[#FFBA00]">členové?</span>
        </h1>

        <p
            class="z-10 mt-2.5 px-4 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
        >
            Už více než 450 investorů se učí,<br />
            jak využít opce jako doplněk svého<br />
            portfolia -
            <span class="text-[#FFBA00]">a teď je řada na vás</span>.
        </p>

        <!-- FlyonUI Carousel Structure -->
        <div class="relative w-full mt-10 z-10 group px-0">
            <!-- Carousel container with native scroll and snap -->
            <div
                bind:this={scrollContainer}
                class="carousel flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4"
            >
                <!-- 
                    Padding Calc: 
                    Mobile: pl/pr-[calc(50%-170px)] centers first and last items with equal padding on both sides
                    XL: pl/pr-[max(0px,calc(50%-534px))] shows peek effect (Item 0 visible left, Item N visible right)
                -->
                <div
                    class="carousel-body flex gap-6 w-max pl-[calc(50%-170px)] pr-[calc(50%-170px)] xl:pl-[max(0px,calc(50%-534px))] xl:pr-[max(0px,calc(50%-534px))] opacity-100"
                >
                    {#each itemGroups as group, i}
                        <!-- Slide -->
                        <div
                            class="carousel-slide snap-center shrink-0 w-[340px] flex flex-col gap-6"
                        >
                            {#each group as itemNumber}
                                <!-- Image -->
                                <div
                                    class="w-full h-[200px] px-5 py-2 rounded-[25px] overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#000000] flex items-center justify-center"
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

        <!-- Controls (Bottom) -->
        <div class="z-10 flex flex-col items-center mt-6 gap-6 mb-10">
            <!-- Pagination Dots -->
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

            <!-- Arrows -->
            <div class="flex gap-4 pb-5">
                <button
                    onclick={prev}
                    class="cursor-pointer transition-all duration-200 hover:scale-105"
                    aria-label="Previous testimonials"
                >
                    <img
                        src="/assets/icons/Arrow.png"
                        alt="Previous"
                        class="w-[50px] h-[50px] opacity-80"
                        style="filter: invert(1) brightness(1.8); transform: scaleX(-1)"
                    />
                </button>
                <button
                    onclick={next}
                    class="cursor-pointer transition-all duration-200 hover:scale-105"
                    aria-label="Next testimonials"
                >
                    <img
                        src="/assets/icons/Arrow.png"
                        alt="Next"
                        class="w-[50px] h-[50px] opacity-80"
                        style="filter: invert(1) brightness(1.8);"
                    />
                </button>
            </div>
        </div>

        <div class="h-10"></div>
    </div>
</section>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
