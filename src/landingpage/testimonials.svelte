<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let currentIndex = $state(0);
    const items = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
    let itemsPerPage = $state(6);
    let totalPages = $derived(Math.ceil(items.length / itemsPerPage));

    onMount(() => {
        const updateItemsPerPage = () => {
            itemsPerPage = window.innerWidth < 768 ? 3 : 6;
            // currentIndex reset if out of bounds
            if (currentIndex >= Math.ceil(items.length / itemsPerPage)) {
                currentIndex = 0;
            }
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    });

    let direction = $state(1);

    let visibleItems = $derived(
        items.slice(
            currentIndex * itemsPerPage,
            currentIndex * itemsPerPage + itemsPerPage,
        ),
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

<section class="z-10 w-full bg-[#111116] overflow-hidden">
    <div
        class="relative flex flex-col items-center justify-center w-full px-4 pt-[70px] pb-10"
    >
        <!-- Glow effect -->
        <div
            class="absolute top-1/2 left-1/2 w-[250px] h-[750px] md:w-[750px] md:h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AFAAFF]/25 blur-[150px] pointer-events-none z-0"
        ></div>

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

        <div
            class="z-10 grid grid-cols-1 grid-rows-1 w-full max-w-[98%] mx-auto mt-8 overflow-visible"
        >
            {#key currentIndex}
                <div
                    class="col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-3 justify-items-center w-full max-w-[1200px] mx-auto gap-6"
                    in:fly={{ x: 40 * direction, duration: 500, opacity: 0 }}
                    out:fade={{ duration: 300 }}
                >
                    {#each visibleItems as id}
                        <div
                            class="w-full max-w-[1000px] md:max-w-full py-2.5 px-2 rounded-[25px] bg-[#000000] overflow-hidden"
                        >
                            <img
                                src="/assets/testimonials/Group {id}.png"
                                alt="Testimonial {id}"
                                class="block w-full h-auto select-none pointer-events-none"
                                draggable="false"
                            />
                        </div>
                    {/each}
                </div>
            {/key}
        </div>

        <!-- Pagination Controls -->
        <div class="z-10 flex flex-col items-center mt-6 gap-6">
            <!-- Dots -->
            <div class="flex gap-2.5">
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
                    class="cursor-pointer transition-all duration-200"
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
                    class="cursor-pointer transition-all duration-200"
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
