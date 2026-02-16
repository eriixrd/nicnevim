<script lang="ts">
    import Tag from "../components/Tag.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden"
>
    <Tag className="mx-auto mt-2.5">
        <span class="text-[18px] -mt-1">💎</span>
        <span class="text-[16px] text-white font-medium leading-none ml-1">
            Teď je řada na vás
        </span>
    </Tag>

    <h2
        class="z-10 mt-2 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Naučte se moji<br />
        opční strategii
        <span class="text-[#FFBA00]">přímo<br />z praxe</span>
    </h2>

    <p
        class="z-10 mt-2 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        Skrze reálné obchody, strukturu<br />
        portfolia a detailní myšlenkové<br />
        procesy
    </p>

    <div
        class="relative mt-15 md:-mt-10 flex items-center justify-center w-full max-w-[1100px] px-4 mx-auto"
    >
        <!-- Background Glow -->
        <div
            class="absolute top-1/2 left-1/2 w-[340px] h-[241px] md:w-[540px] md:h-[441px] -translate-y-1/20 rounded-full bg-[#6633EE]/20 blur-[80px] pointer-events-none z-0"
            style="filter: blur(80px); -webkit-filter: blur(80px); will-change: filter, transform; transform: translate3d(-50%, -50%, 0);"
        ></div>
        <!-- Left Image (Vertical) -->
        <div
            class="relative z-20 w-[152px] scale-[120%] md:scale-[70%] h-[203px] md:w-[480px] md:h-auto -mr-[30px] md:-mr-[270px]"
        >
            <img
                src="/assets/addpics/BB23CC5D-9AB2-41A6-A02C-29AAFBAFA68B_1_105_c 1.png"
                alt="Přednáška"
                class="w-full h-full md:h-auto object-cover rounded-[10px] rotate-[-6.19deg] md:-rotate-6 shadow-2xl"
            />
        </div>

        <!-- Right Image (Horizontal) -->
        <div
            class="relative z-10 w-[203px] scale-[120%] md:scale-[70%] h-[152px] md:w-[580px] md:h-auto"
        >
            <img
                src="/assets/addpics/E167A2C6-518F-4CE0-8B00-6F4231DB5EA7_1_105_c 1.png"
                alt="Komunita"
                class="w-full h-full md:h-auto object-cover rounded-[10px] rotate-[1.47deg] md:rotate-[4deg] shadow-2xl"
            />
        </div>
    </div>
    <button
        class="group relative mt-15 md:-mt-10 px-13 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
    >
        <span class="relative z-10">Přidat se do komunity</span>
        <div
            class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
        ></div>
    </button>
    <p
        class="font-medium italic text-[16px] leading-[150%] text-[#434343] mt-2"
    >
        Členství lze kdykoliv zrušit
    </p>
</section>
