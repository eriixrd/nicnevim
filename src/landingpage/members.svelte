<script lang="ts">
</script>

<section
    class="relative w-full flex flex-col items-center justify-center max-w-full sm:px-0 bg-[#111116] overflow-hidden isolate"
>
    <!-- Background Glow -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[650px] bg-[#AFAAFF]/10 blur-[150px] pointer-events-none -z-10"
    ></div>

    <div class="flex justify-center items-center mt-15 gap-0 px-[5px]">
        {#each Array(5) as _, i}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                class="w-[22.7px] h-[21.95px] md:w-[27.24px] md:h-[26.34px] select-none pointer-events-none"
                style="filter: drop-shadow(0 0 10px #FFBA00);"
                fill="#FFBA00"
            >
                <polygon
                    points="14,1 17.09,9.26 26,10.27 19,16.14 21.18,25.02 14,20.28 6.82,25.02 9,16.14 2,10.27 10.91,9.26"
                    fill="#FFBA00"
                />
            </svg>
        {/each}
    </div>

    <div
        class="mt-2 text-center font-sans font-bold text-[32px] md:text-[42px] leading-[1.15] px-[5px]"
    >
        <span class="text-[#FFFFFF]">Jak komunitu</span><br />
        <span class="text-[#FFFFFF]">hodnotí </span>
        <span class="text-[#FFBA00]">členové?</span>
    </div>

    <div
        class="mt-5 md:mt-4 text-center font-sans font-normal text-[18px] md:text-[24px] leading-normal px-[5px] text-[#FFFFFF]"
    >
        <span class="block md:hidden">
            Už více než 450 investorů se učí,<br />
            jak využít opce jako doplněk svého <br />portfolia -
            <span class="text-[#FFBA00]">a teď je řada na vás.</span>
        </span>
        <span class="hidden md:inline">
            Už více než 450 investorů se učí, jak využít opce jako doplněk svého
            portfolia - <span class="text-[#FFBA00]">a teď je řada na vás.</span
            >
        </span>
    </div>

    <div class="w-full max-w-[400px] mt-10 px-4 flex flex-col gap-4">
        <!-- Testimonial Images -->
        <img
            src="/assets/persons/review1.png"
            alt="Testimonial 1"
            class="w-full h-auto rounded-[20px] select-none pointer-events-none"
            draggable="false"
        />
        <img
            src="/assets/persons/review2.png"
            alt="Testimonial 2"
            class="w-full h-auto rounded-[20px] select-none pointer-events-none"
            draggable="false"
        />
        <img
            src="/assets/persons/review3.png"
            alt="Testimonial 3"
            class="w-full h-auto rounded-[20px] select-none pointer-events-none"
            draggable="false"
        />
    </div>

    <div class="flex flex-col items-center gap-6 mt-8 mb-20">
        <!-- Dots -->
        <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
            <div class="w-3 h-3 rounded-full bg-[#3c3c3c]"></div>
            <div class="w-3 h-3 rounded-full bg-[#3c3c3c]"></div>
            <div class="w-3 h-3 rounded-full bg-[#3c3c3c]"></div>
            <div class="w-3 h-3 rounded-full bg-[#3c3c3c]"></div>
        </div>

        <!-- Arrows -->
        <div class="flex gap-4">
            <button
                class="w-[60px] h-[60px] bg-[#3C3C3C] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors rounded-[5px]"
                aria-label="Previous"
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-[-3px]"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                class="w-[60px] h-[60px] bg-[#D9D9D9] flex items-center justify-center hover:bg-white transition-colors rounded-[5px]"
                aria-label="Next"
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-[3px]"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    </div>
</section>
