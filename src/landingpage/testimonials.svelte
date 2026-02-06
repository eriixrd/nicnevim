<script lang="ts">
    import { fade, fly } from "svelte/transition";

    import { onMount } from "svelte";

    let currentIndex = 0;
    const items = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]; // Ujistil jsem se, že je tu dostatek ID pro testování
    let itemsPerPage = 6;
    let totalPages = Math.ceil(items.length / itemsPerPage);

    onMount(() => {
        const updateItemsPerPage = () => {
            itemsPerPage = window.innerWidth < 768 ? 3 : 6;
            totalPages = Math.ceil(items.length / itemsPerPage);
            // Reset indexu pokud by byl mimo rozsah po změně velikosti
            if (currentIndex >= totalPages) currentIndex = 0;
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    });

    let direction = 1;

    $: visibleItems = items.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage,
    );

    function next() {
        direction = 1;
        currentIndex = (currentIndex + 1) % totalPages;
    }

    function prev() {
        direction = -1;
        currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    }

    function setPage(index: number) {
        direction = index > currentIndex ? 1 : -1;
        currentIndex = index;
    }
</script>

<section class="bg-[#111116] w-full">
    <div
        class="relative w-full flex flex-col items-center justify-center pt-[70px] pb-10 px-4"
    >
        <!-- Glow effect -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[750px] md:w-[750px] md:h-[250px] bg-[#AFAAFF]/25 blur-[150px] rounded-full pointer-events-none z-0"
        ></div>
        <div class="flex justify-center gap-[5px] z-10">
            {#each Array(5) as _}
                <img
                    src="/assets/icons/Star.svg"
                    alt="Star"
                    class="w-[16.47px] md:w-[17.29px] h-[15.92px] md:h-[16.72px] drop-shadow-[0_0_10px_rgba(255,186,0,0.6)]"
                />
            {/each}
        </div>

        <h1
            class="text-white text-center font-extrabold text-[36px] md:text-[40px] mt-2.5 max-w-[950px] leading-tight z-10"
        >
            Jak komunitu<br />hodnotí
            <span class="text-[#FFBA00]">členové?</span>
        </h1>

        <p
            class="text-white text-center font-medium md:font-normal text-[20px] md:text-[24px] mt-2.5 max-w-[900px] leading-[150%] z-10 px-4"
        >
            Už více než 450 investorů se učí,<br />
            jak využít opce jako doplněk svého<br />
            portfolia -
            <span class="text-[#FFBA00]">a teď je řada na vás</span>.
        </p>

        <div
            class="mt-8 w-full max-w-[98%] mx-auto grid grid-cols-1 grid-rows-1 overflow-visible z-10"
        >
            {#key currentIndex}
                <div
                    class="col-start-1 row-start-1 w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 max-w-[1200px] mx-auto"
                    in:fly={{ x: 40 * direction, duration: 500, opacity: 0 }}
                    out:fade={{ duration: 300 }}
                >
                    {#each visibleItems as id}
                        <div
                            class="w-full max-w-[1000px] md:max-w-full bg-[#000000] py-2.5 px-2 rounded-[25px] overflow-hidden"
                        >
                            <img
                                src="/assets/testimonials/Group {id}.png"
                                alt="Testimonial {id}"
                                class="w-full h-auto block select-none pointer-events-none"
                                draggable="false"
                            />
                        </div>
                    {/each}
                </div>
            {/key}
        </div>

        <!-- Pagination Controls -->
        <div class="mt-6 flex flex-col items-center gap-6 z-10">
            <!-- Dots -->
            <div class="flex gap-2.5">
                {#each Array(totalPages) as _, i}
                    <button
                        on:click={() => setPage(i)}
                        class="w-2.5 h-2.5 rounded-full transition-all duration-300 {currentIndex ===
                        i
                            ? 'bg-[#ffffff]/80 w-6'
                            : 'bg-[#ffffff]/20 hover:bg-white/40'}"
                        aria-label="Go to page {i + 1}"
                    ></button>
                {/each}
            </div>

            <!-- Arrows -->
            <div class="flex pb-5 gap-4">
                <button
                    on:click={prev}
                    class="hover:scale-110 active:scale-95 transition-all duration-200"
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
                    on:click={next}
                    class="hover:scale-110 active:scale-95 transition-all duration-200"
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
    </div>
</section>
