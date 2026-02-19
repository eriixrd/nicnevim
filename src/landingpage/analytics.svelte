<script lang="ts">
    import Tag from "../components/Tag.svelte";
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import { onMount } from "svelte";

    const team = [
        { name: "Colombo", role: "Analytik", img: "Colombo.svg" },
        { name: "Martin", role: "Analytik", img: "Martin.svg" },
        { name: "Mike", role: "Analytik", img: "Mike.svg" },
        { name: "Pavel", role: "Analytik", img: "Pavel.svg" },
        { name: "Stephen", role: "Analytik", img: "Stephen.svg" },
        { name: "Tyler", role: "Analytik", img: "Tyler.svg" },
    ];

    // Find Mike's index to start centered on him
    const mikeIndex = team.findIndex((m) => m.name === "Mike");
    let currentIndex = $state(mikeIndex);
    let isDesktop = $state(false);
    let startX = 0;
    let isDragging = $state(false);
    let wasDragging = $state(false);
    let dragDistance = $state(0);
    const dragThreshold = 50;

    onMount(() => {
        const checkScreen = () => (isDesktop = window.innerWidth >= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    });

    function next() {
        currentIndex = (currentIndex + 1) % team.length;
    }

    function prev() {
        currentIndex = (currentIndex - 1 + team.length) % team.length;
    }

    function setPage(i: number) {
        currentIndex = i;
    }

    function handleDragStart(e: MouseEvent | TouchEvent) {
        isDragging = true;
        wasDragging = false;
        startX = "touches" in e ? e.touches[0].clientX : e.clientX;
        dragDistance = 0;

        // Add window listeners to handle dragging outside the element
        if (!("touches" in e)) {
            window.addEventListener("mousemove", handleDragMove);
            window.addEventListener("mouseup", handleDragEnd);
        }
    }

    function handleDragMove(e: MouseEvent | TouchEvent) {
        if (!isDragging) return;
        const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const diff = currentX - startX;

        if (Math.abs(diff) > 5) {
            wasDragging = true;
            dragDistance = diff;
        }

        if (Math.abs(dragDistance) > 10) {
            if (e.cancelable) e.preventDefault();
        }
    }

    function handleDragEnd() {
        if (!isDragging) return;

        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);

        if (Math.abs(dragDistance) > dragThreshold) {
            if (dragDistance > 0) {
                prev();
            } else {
                next();
            }
        }

        isDragging = false;
        // The transition-all in the template will handle the smooth return to 0
        dragDistance = 0;

        setTimeout(() => {
            wasDragging = false;
        }, 100);
    }

    let refContainer = $state<HTMLDivElement | null>(null);
    let scrollThumbProgress = $state(0);
    let isDraggingThumb = $state(false);

    function handleRefScroll() {
        if (!refContainer || isDraggingThumb) return;
        const { scrollLeft, scrollWidth, clientWidth } = refContainer;
        scrollThumbProgress = scrollLeft / (scrollWidth - clientWidth);
    }

    function handleThumbDrag(e: MouseEvent | TouchEvent) {
        if (!isDraggingThumb || !refContainer) return;
        const track = document.getElementById("ref-track");
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        let progress = (clientX - rect.left) / rect.width;
        progress = Math.max(0, Math.min(1, progress));

        scrollThumbProgress = progress;
        const { scrollWidth, clientWidth } = refContainer;
        refContainer.scrollLeft = progress * (scrollWidth - clientWidth);
    }

    function startThumbDrag(e: MouseEvent | TouchEvent) {
        isDraggingThumb = true;
        if (!("touches" in e)) {
            window.addEventListener("mousemove", handleThumbDrag);
            window.addEventListener("mouseup", stopThumbDrag);
        }
    }

    function stopThumbDrag() {
        isDraggingThumb = false;
        window.removeEventListener("mousemove", handleThumbDrag);
        window.removeEventListener("mouseup", stopThumbDrag);
    }
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#111116] overflow-hidden"
>
    <Tag className="mx-auto">
        <AppleEmoji symbol="gear" size={18} />
        <span class="text-white text-[16px] md:text-[18px] font-medium ml-1"
            >Analytický tým</span
        >
    </Tag>

    <h1
        class="z-10 mt-2 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        <span class="md:hidden">
            Poznejte můj tým <br />
            <span class="text-[#FFBA00]">profesionálních</span> <br />
            <span class="text-[#FFBA00]">analytiků</span>, kteří pro <br />
            vás tvoří obsah společně se mnou
        </span>
        <span class="hidden md:inline">
            Poznejte můj tým <br />
            <span class="text-[#FFBA00]">profesionálních analytiků</span>,
            <br />
            kteří pro vás tvoří obsah <br />
            společně se mnou
        </span>
    </h1>

    <div class="relative w-full -mt-4 md:-mt-6 flex flex-col items-center">
        <!-- Slider Container -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div
            class="relative w-full flex items-center justify-center overflow-visible h-[450px] md:h-[630px]"
            role="region"
            aria-label="Team members slider"
            onmousedown={handleDragStart}
            ontouchstart={handleDragStart}
            ontouchmove={handleDragMove}
            ontouchend={handleDragEnd}
            style="touch-action: pan-y; cursor: {isDragging
                ? 'grabbing'
                : 'grab'};"
        >
            <!-- Background Glow (Exactly behind center card) -->
            <div
                class="absolute top-1/2 left-1/2 w-[340px] h-[432px] -translate-x-1/2 -translate-y-1/2 bg-[#AFAAFF]/15 blur-[150px] pointer-events-none z-0"
                style="filter: blur(150px); -webkit-filter: blur(150px); opacity: 0.8;"
            ></div>

            {#each team as member, i}
                {@const offset = (i - currentIndex + team.length) % team.length}
                {@const normalizedOffset =
                    offset > team.length / 2 ? offset - team.length : offset}
                {@const isVisible = Math.abs(normalizedOffset) <= 1}
                {@const isFar = Math.abs(normalizedOffset) > 1.5}

                <div
                    role="button"
                    tabindex="0"
                    class="absolute cursor-pointer select-none {isFar ||
                    isDragging
                        ? 'transition-none'
                        : 'transition-all duration-700 ease-out'}"
                    style="
                        transform: translateX({normalizedOffset *
                        (isDesktop ? 460 : 220) +
                        dragDistance}px) scale({normalizedOffset === 0
                        ? 1
                        : 0.8});
                        opacity: {normalizedOffset === 0
                        ? 1
                        : isVisible
                          ? 0.4
                          : 0};
                        z-index: {normalizedOffset === 0 ? 30 : 20};
                        pointer-events: {normalizedOffset === 0 && !wasDragging
                        ? 'auto'
                        : 'none'};
                    "
                    onclick={() => !wasDragging && setPage(i)}
                    onkeydown={(e) =>
                        e.key === "Enter" && !wasDragging && setPage(i)}
                >
                    <div
                        class="relative w-[270px] md:w-[388px] h-auto overflow-hidden"
                    >
                        <img
                            src="/assets/team/{member.img}"
                            alt={member.name}
                            class="w-full h-full object-cover select-none pointer-events-none"
                            draggable="false"
                        />
                    </div>
                </div>
            {/each}
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-2.5 -mt-6">
            {#each team as _, i}
                <button
                    onclick={() => setPage(i)}
                    class="h-2.5 rounded-full cursor-pointer transition-all duration-300 {currentIndex ===
                    i
                        ? 'w-6 bg-[#ffffff]/80'
                        : 'w-2.5 bg-[#ffffff]/20 hover:bg-white/40'}"
                    aria-label="Go to member {i + 1}"
                ></button>
            {/each}
        </div>

        <!-- Arrows -->
        <div class="flex gap-4 mt-10 mb-10">
            <button
                onclick={prev}
                class="cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 select-none"
                style="will-change: transform; transform: translate3d(0, 0, 0);"
                aria-label="Previous team member"
            >
                <img
                    src="/assets/icons/Arrow.png"
                    alt="Previous"
                    class="w-[50px] h-[50px] opacity-80 pointer-events-none"
                    style="filter: invert(1) brightness(1.8); transform: scaleX(-1)"
                />
            </button>
            <button
                onclick={next}
                class="cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 select-none"
                style="will-change: transform; transform: translate3d(0, 0, 0);"
                aria-label="Next team member"
            >
                <img
                    src="/assets/icons/Arrow.png"
                    alt="Next"
                    class="w-[50px] h-[50px] opacity-80 pointer-events-none"
                    style="filter: invert(1) brightness(1.8);"
                />
            </button>
        </div>

        <p
            class="z-10 -mt-2 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
        >
            <span class="md:hidden">
                Naším cílem je, vám každý den <br />
                přinášet profesionální pohled na <br />
                akciové trhy a
                <span class="text-[#FFBA00] font-bold"
                    >dělat dlouhodobě lepší</span
                > <br />
                <span class="text-[#FFBA00] font-bold"
                    >investiční rozhodnutí</span
                >
                než zbytek <br />
                trhu.
            </span>
            <span class="hidden md:inline">
                Naším cílem je, vám každý den přinášet profesionální <br />
                pohled na akciové trhy a
                <span class="text-[#FFBA00] font-bold"
                    >dělat dlouhodobě lepší</span
                > <br />
                <span class="text-[#FFBA00] font-bold"
                    >investiční rozhodnutí</span
                > než zbytek trhu.
            </span>
        </p>

        <!-- Feature Cards -->
        <div class="z-10 flex flex-col items-center gap-4 mt-4 w-full px-4">
            {#each [{ icon: "/assets/icons/globe.svg", textContent: "Pravidelný <span class='gold-gradient-text'>makro přehled</span><br />a kontext k vývoji trhů" }, { icon: "/assets/icons/graph.svg", textContent: "Aktuální analýzy více<br />než <span class='gold-gradient-text'>100+ sledovaných firem</span>" }, { icon: "/assets/icons/graphlines.svg", textContent: "Technická analýza" }, { icon: "/assets/icons/file.svg", textContent: "Přehled <span class='gold-gradient-text'>všech obchodů</span><br />a myšlenkového procesu" }, { icon: "/assets/icons/chat.svg", textContent: "Možnost <span class='gold-gradient-text'>doptávat se</span><br />na cokoliv" }] as card}
                <div
                    class="w-full max-w-[420px] md:max-w-[483px] h-[140px] md:h-[161px] rounded-[20px] flex flex-col items-center justify-center py-5 px-4 border border-white/5 bg-linear-to-br from-[#191A1D]/70 to-[#0A0A0B]/70 backdrop-blur-sm"
                >
                    <!-- Icon with Gradient -->
                    <div
                        class="w-7 h-7 md:w-8 md:h-8 bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A]"
                        style="-webkit-mask-image: url({card.icon}); mask-image: url({card.icon}); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-size: contain; mask-size: contain;"
                    ></div>

                    <p
                        class="mt-3 text-center text-[18px] md:text-[23px] text-white font-bold leading-[150%]"
                    >
                        {@html card.textContent}
                    </p>
                </div>
            {/each}
        </div>
    </div>

    <img
        src="/assets/icons/Arrow.svg"
        alt="Arrow"
        class="z-10 mt-16 w-[68px] md:w-[85px] h-[72px] md:h-[90px] mx-auto select-none pointer-events-none"
        draggable="false"
    />

    <div class="relative w-full flex justify-center mt-16">
        <!-- Background Glow behind the second heading -->
        <div
            class="absolute top-1/2 left-1/2 w-[400px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-[#AFAAFF]/15 blur-[150px] pointer-events-none z-0"
            style="filter: blur(150px); -webkit-filter: blur(150px); opacity: 0.8;"
        ></div>

        <h2
            class="z-10 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            <span class="md:hidden">
                Právě tato <br />
                kombinace zajišťuje <br />
                kvalitu obsahu a <br />
                <span class="text-[#FFBA00]">spokojenost</span> <br />
                <span class="text-[#FFBA00]">investorů</span> v komunitě
            </span>
            <span class="hidden md:inline">
                Právě tato kombinace <br />
                zajišťuje kvalitu obsahu <br />a
                <span class="text-[#FFBA00]"> spokojenost investorů</span>
                <br />
                v komunitě
            </span>
        </h2>
    </div>

    <!-- Reference Images with Safari-style Scrollbar on Mobile -->
    <div class="z-10 mt-4 w-full flex flex-col items-center overflow-hidden">
        <div
            bind:this={refContainer}
            onscroll={handleRefScroll}
            class="flex md:flex-col items-start md:items-center gap-4 md:gap-5 w-full px-5 md:px-4 overflow-x-auto md:overflow-x-visible no-scrollbar snap-x snap-mandatory"
        >
            <img
                src="/assets/addpics/reference 1 1.png"
                alt="Reference 1"
                class="w-[85vw] md:w-full md:max-w-[440px] shrink-0 snap-center rounded-[10px]"
            />
            <img
                src="/assets/addpics/Reference 2 1.png"
                alt="Reference 2"
                class="w-[85vw] md:w-full md:max-w-[440px] shrink-0 snap-center rounded-[10px]"
            />
            <img
                src="/assets/addpics/Reference 3 1.png"
                alt="Reference 3"
                class="w-[85vw] md:w-full md:max-w-[440px] shrink-0 snap-center rounded-[10px]"
            />
        </div>

        <!-- Safari-style Scrollbar (Mobile only) -->
        <div class="md:hidden w-full px-4 mt-8 mb-4 flex justify-center">
            <div
                id="ref-track"
                class="relative w-full max-w-[120px] h-[14px] bg-white/10 rounded-full p-[3px] cursor-pointer"
                onmousedown={startThumbDrag}
                ontouchstart={startThumbDrag}
                ontouchmove={handleThumbDrag}
                ontouchend={stopThumbDrag}
                role="slider"
                tabindex="0"
                aria-label="Scroll balance gallery"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={Math.round(scrollThumbProgress * 100)}
            >
                <div
                    class="h-full bg-[#999999] rounded-full"
                    style="width: 40%; margin-left: {scrollThumbProgress *
                        60}%; transition: {isDraggingThumb
                        ? 'none'
                        : 'margin-left 0.1s ease-out'};"
                ></div>
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
        <span class="relative z-10">Chci se přidat!</span>
        <div
            class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
        ></div>
    </button>
</section>

<style>
    :global(.gold-gradient-text) {
        background: linear-gradient(to bottom right, #c9a44a, #d3c295, #c9a44a);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        display: inline-block;
    }
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
