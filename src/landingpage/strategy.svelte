<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#111116] overflow-hidden"
>
    <!-- Header Glow -->
    <div
        class="absolute top-[10%] left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[400px] -translate-x-1/2 rounded-full bg-[#AFAAFF]/10 blur-[120px] pointer-events-none z-0"
        style="filter: blur(120px); -webkit-filter: blur(120px); will-change: filter, transform;"
    ></div>
    <Tag className="mx-auto mt-2.5">
        <AppleEmoji symbol="📊" size={18} className="!w-auto" />
        <span class="text-[16px] text-white font-medium leading-none">
            Strategie mého portfolia
        </span>
    </Tag>

    <h1
        class="z-10 mt-2 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Cílem <span class="text-[#FFBA00]">mojí strategie</span><br />
        je dlouhodobé<br />
        zhodnocení v řádu<br />
        <span class="text-[#FFBA00]">20-30%</span> p.a.
    </h1>

    <p
        class="z-10 mt-2.5 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        Provádím <span class="text-[#FFBA00] font-bold"
            >vyšší stovky obchodů</span
        ><br />
        <span class="text-[#FFBA00] font-bold">ročně</span> a opce využívám k
        efektivní<br />
        práci s akciovým portfoliem.
    </p>

    <div class="flex flex-col gap-4 mt-6 items-center w-full">
        <!-- Security Card (Already implemented, kept for consistency) -->
        <div
            class="z-10 relative w-[440px] max-w-[90%] h-[100px] md:w-[660px] md:max-w-none md:h-[150px] bg-black/70 rounded-[20px] flex items-center overflow-hidden"
        >
            <h2
                class="z-20 ml-6 md:ml-10 text-[18px] md:text-[28px] text-white font-bold leading-tight text-left"
            >
                Dávají mi <span class="text-[#9F8BFF]">větší kontrolu</span><br
                />
                nad portfoliem
            </h2>
            <div class="absolute right-0 top-0 h-full w-[60%] z-10">
                <img
                    src="/assets/images/security.png"
                    alt="Security"
                    class="h-full w-full object-cover object-left"
                    style="mask-image: linear-gradient(to right, transparent, black 40%); -webkit-mask-image: linear-gradient(to right, transparent, black 40%);"
                />
            </div>
            <div
                class="absolute inset-0 border border-white/20 rounded-[20px] pointer-events-none z-30"
                style="mix-blend-mode: overlay;"
            ></div>
        </div>

        <!-- Fair Card (Volatility) -->
        <div
            class="z-10 relative w-[440px] max-w-[90%] h-[100px] md:w-[660px] md:max-w-none md:h-[150px] bg-black/70 rounded-[20px] flex items-center overflow-hidden"
        >
            <h2
                class="z-20 ml-6 md:ml-10 text-[18px] md:text-[28px] text-white font-bold leading-tight text-left"
            >
                Snižují <span class="text-[#9F8BFF]">volatilitu</span><br />
                <span class="text-[#9F8BFF]">a výkyvy</span> mého portfolia
            </h2>
            <div class="absolute right-0 top-0 h-full w-[60%] z-10">
                <img
                    src="/assets/images/fair.png"
                    alt="Fair"
                    class="h-full w-full object-cover object-left"
                    style="mask-image: linear-gradient(to right, transparent, black 40%); -webkit-mask-image: linear-gradient(to right, transparent, black 40%);"
                />
            </div>
            <div
                class="absolute inset-0 border border-white/20 rounded-[20px] pointer-events-none z-30"
                style="mix-blend-mode: overlay;"
            ></div>
        </div>

        <!-- Income Card -->
        <div
            class="z-10 relative w-[440px] max-w-[90%] h-[100px] md:w-[660px] md:max-w-none md:h-[150px] bg-black/70 rounded-[20px] flex items-center overflow-hidden"
        >
            <h2
                class="z-20 ml-6 md:ml-10 text-[18px] md:text-[28px] text-white font-bold leading-tight text-left"
            >
                Dlouhodobě mi <span class="text-[#9F8BFF]">zvyšují</span><br />
                <span class="text-[#9F8BFF]">výnos</span> portfolia
            </h2>
            <div class="absolute right-0 top-0 h-full w-[60%] z-10">
                <img
                    src="/assets/images/income.png"
                    alt="Income"
                    class="h-full w-full object-cover object-left"
                    style="mask-image: linear-gradient(to right, transparent, black 40%); -webkit-mask-image: linear-gradient(to right, transparent, black 40%);"
                />
            </div>
            <div
                class="absolute inset-0 border border-white/20 rounded-[20px] pointer-events-none z-30"
                style="mix-blend-mode: overlay;"
            ></div>
        </div>
    </div>

    <p
        class="z-10 mt-8 px-4 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
    >
        Výsledky z minulých let ukazují,<br />
        že <span class="text-[#FFBA00] font-bold">tato strategie funguje</span>,
        nicméně<br />
        i přes to dosažení mého cíle<br />
        nelze garantovat.
    </p>

    <!-- Graph Section -->
    <div class="z-10 relative w-full mt-6">
        <!-- Graph Glow -->
        <div
            class="absolute top-1/2 left-1/2 w-[350px] h-[250px] md:w-[700px] md:h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AFAAFF]/15 blur-[130px] pointer-events-none z-0"
            style="filter: blur(130px); -webkit-filter: blur(130px); will-change: filter, transform;"
        ></div>

        <div
            class="relative z-10 w-full overflow-x-auto no-scrollbar scroll-smooth"
        >
            <div
                class="flex justify-start md:justify-center w-max md:w-full max-w-[800px] mx-auto px-4 md:px-0"
            >
                <img
                    src="/assets/images/graph.png"
                    alt="Strategy Growth Graph"
                    class="w-[610px] h-auto md:w-full md:aspect-video rounded-[20px] shadow-2xl object-cover"
                    style="image-rendering: -webkit-optimize-contrast;"
                />
            </div>
        </div>
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
