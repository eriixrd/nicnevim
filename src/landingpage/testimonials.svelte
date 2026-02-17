<script lang="ts">
    import { onMount } from "svelte";
    import Stars from "../components/Stars.svelte";

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
    const colWidth = $derived(isDesktop ? 425 : 340);
    const gap = $derived(isDesktop ? 24 : 12);
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

    let isScrollingProgrammatically = $state(false);

    // Custom easing function for a premium slide feel
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

            scrollContainer.scrollLeft =
                start + change * easeOutQuart(progress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isScrollingProgrammatically = false;
            }
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

        // Loop index
        if (index < 0) index = totalPages - 1;
        if (index >= totalPages) index = 0;

        currentIndex = index;

        const currentWidth = isDesktop ? 425 : 340;
        const targetLeft = index * (currentWidth + gap);

        animateScroll(targetLeft, 600); // 600ms for visible slide animation
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
        const walk = (x - startX) * 1.5; // Scroll speed

        if (Math.abs(walk) > 5) {
            wasDragging = true;
        }

        scrollContainer.scrollLeft = scrollStart - walk;
    }

    function handleMouseUp() {
        if (!isDragging) return;
        isDragging = false;

        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);

        // Snap to nearest page after drag using our custom animation
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

<section class="z-10 w-full bg-[#111116] overflow-hidden">
    <div
        class="relative flex flex-col items-center justify-center w-full pt-[70px] pb-10"
    >
        <!-- Background Glow -->
        <div
            class="absolute top-1/2 left-1/2 w-[250px] h-[750px] md:w-[750px] md:h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AFAAFF]/25 blur-[150px] pointer-events-none z-0"
            style="filter: blur(150px); -webkit-filter: blur(150px); will-change: filter, transform; transform: translate3d(0, 0, 0);"
        ></div>

        <!-- Header Content -->
        <Stars />

        <h1
            class="z-10 mt-2.5 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            Jak komunitu<br />hodnotí
            <span class="text-[#FFBA00]">členové?</span>
        </h1>

        <p
            class="z-10 mt-2.5 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
        >
            Už více než 450 investorů se učí,<br />
            jak využít opce jako doplněk svého<br />
            portfolia -
            <span class="text-[#FFBA00] font-bold">a teď je řada na vás</span>.
        </p>

        <!-- FlyonUI Carousel Structure -->
        <div class="relative w-full mt-10 z-10 group px-0">
            <!-- Carousel container with native scroll and snap -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <div
                bind:this={scrollContainer}
                class="carousel flex overflow-x-auto no-scrollbar py-4"
                onmousedown={handleMouseDown}
                onscroll={handleScroll}
                role="region"
                aria-label="Testimonials carousel"
                style="overflow-x: overlay; cursor: {isDragging
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
                        <!-- Slide -->
                        <div
                            class="carousel-slide shrink-0 w-[340px] xl:w-[425px] flex flex-col gap-3 xl:gap-6"
                            style="scroll-snap-align: center;"
                        >
                            {#each group as itemNumber}
                                <!-- Image -->
                                <div
                                    class="w-full h-[200px] md:h-[250px] py-2 md:px-6.5 md:py-2.5 overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#000000] flex items-center justify-center"
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
