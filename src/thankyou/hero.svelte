<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
</script>

<section
    class="min-h-screen flex flex-col items-center justify-start bg-[#0C0515] py-15 text-center"
>
    <!-- Background Glow -->
    <div
        class="absolute top-0 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 bg-[#6633EE]/70 blur-[50px] pointer-events-none"
        style="filter: blur(70px); -webkit-filter: blur(70px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>

    <div class="max-w-[800px] w-full flex flex-col items-center">
        <div class="relative p-px rounded-[10px]">
            <div
                class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
            ></div>
            <div
                class="relative bg-linear-to-r from-[#0F2E10] via-[#216524] to-[#0F2E10] px-6 py-4 rounded-[9px] flex items-center gap-2 leading-[150%]"
            >
                <AppleEmoji symbol="✅" size={16} />
                <span class="text-white font-medium text-[16px]">
                    Platba proběhla úspěšně
                </span>
            </div>
        </div>

        <h1
            class="z-10 mt-6 max-w-[950px] text-center text-[38px] md:text-[42px] text-white font-extrabold leading-[1.1]"
        >
            Teď zbývá <span class="text-[#FFBA00]">poslední<br />krok</span> -
            Připojte se<br />na Discord
        </h1>

        <p
            class="z-10 mt-6 max-w-[800px] text-center text-[20px] md:text-[24px] text-white font-normal leading-[150%]"
        >
            Pro dokončení přístupu <span
                class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                >je potřeba</span
            ><br />
            <span
                class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                >propojit váš Discord účet s naším</span
            ><br />
            <span
                class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                >systémem.</span
            >
            Následně vám bude<br />
            automaticky přiřazena role a získáte<br />
            plný přístup do komunity.
        </p>
    </div>
    <img
        src="/assets/icons/Arrow.svg"
        alt="Arrow"
        class="z-10 mt-8 w-[68px] md:w-[85px] h-[72px] md:h-[90px] mx-auto select-none pointer-events-none"
        draggable="false"
    />

    <div class="relative w-full flex flex-col items-center">
        <img
            src="/assets/addpics/komunita.png"
            alt="Person"
            class="z-10 mt-10 w-[344px] md:w-[430px] h-auto rounded-[15px] mx-auto select-none pointer-events-none"
            draggable="false"
        />

        <div
            class="flex items-center justify-center w-full max-w-[370px] md:max-w-[480px] h-auto -mt-7 z-11 mx-auto rounded-[20px] px-6 py-8 md:px-10 md:py-12"
            style="background: linear-gradient(to bottom right, #111116 0%, #223B53 50%, #111116 100%);"
        >
            <p
                class="text-white text-[22px] md:text-[28px] font-semibold leading-tight whitespace-nowrap text-center"
            >
                Klikněte na tlačítko níže,<br />
                <span
                    class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent inline-block"
                    >přihlaste se ke svému Discord</span
                ><br />
                <span
                    class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent inline-block"
                    >účtu</span
                >
                a potvrďte propojení<br />
                s naším botem
            </p>
        </div>

        <button
            class="group relative mt-10 px-13 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden flex items-center gap-4"
        >
            <img
                src="/assets/icons/Discord.png"
                alt="Discord"
                class="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span class="relative z-10 whitespace-nowrap"
                >Připojit se na Discord</span
            >
            <div
                class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
            ></div>
        </button>

        <!-- Empty Rectangle with Stroke -->
        <div
            class="w-full max-w-[370px] md:max-w-[480px] h-auto border border-white/5 rounded-[20px] mt-10 flex flex-col items-center justify-start p-8 md:p-10"
        >
            <img
                src="/assets/icons/info.svg"
                alt="Info"
                class="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
            />
            <p
                class="text-white text-[20px] md:text-[22px] font-normal leading-[1.4] mt-4"
            >
                Role vám bude automaticky<br />
                přiřazena do 5 minut
                <span
                    class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                    >a získáte plný</span
                ><br />
                <span
                    class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
                    >přístup na Discord</span
                >.
            </p>
        </div>

        <p class="text-white text-[16px] md:text-[18px] font-normal mt-10">
            V případě potíží nás kontaktujte na<br />
            <a
                href="mailto:nicnevim@nicnevim.com"
                class="text-white underline hover:text-[#FFBA00] transition-colors"
            >
                nicnevim@nicnevim.com
            </a>
        </p>
    </div>
</section>
