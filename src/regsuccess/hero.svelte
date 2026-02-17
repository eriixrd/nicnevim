<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
</script>

<section class="relative flex flex-col items-center justify-center py-15">
    <div
        class="absolute top-0 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 bg-[#6633EE]/70 blur-[50px] pointer-events-none"
        style="filter: blur(70px); -webkit-filter: blur(70px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>

    <div class="relative p-px rounded-[10px]">
        <div
            class="absolute inset-0 rounded-[10px] bg-linear-to-tl from-white/20 via-transparent to-white/20 pointer-events-none"
        ></div>
        <div
            class="relative bg-linear-to-r from-[#0F2E10] via-[#216524] to-[#0F2E10] px-6 py-4 rounded-[9px] flex items-center gap-2 leading-[150%]"
        >
            <AppleEmoji symbol="✅" size={16} />
            <span class="text-white font-medium text-[16px]"
                >Registrace proběhla úspěšně</span
            >
        </div>
    </div>

    <h1
        class="z-10 mt-2 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
    >
        Na váš e-mail<br />
        jsme
        <span class="text-[#FFBA00] inline-block">odeslali zprávu</span><br />
        s dalšími kroky
    </h1>

    <img
        src="/assets/icons/Arrow.svg"
        alt="Arrow"
        class="z-10 mt-8 w-[68px] md:w-[85px] h-[72px] md:h-[90px] mx-auto select-none pointer-events-none"
        draggable="false"
    />

    <div class="relative w-full flex flex-col items-center">
        <!-- Background Glow behind image and rectangle -->
        <div
            class="absolute top-1/2 left-1/2 w-[340px] h-[340px] -mt-[120px] translate-y-1/2 bg-[#FFBA00]/25 blur-[150px] pointer-events-none rounded-full"
            style="filter: blur(150px); -webkit-filter: blur(150px); will-change: filter; transform: translate3d(-50%, -50%, 0);"
        ></div>

        <img
            src="/assets/addpics/Group 64.png"
            alt="Person"
            class="z-10 mt-10 w-[344px] md:w-[430px] h-auto rounded-[15px] mx-auto select-none pointer-events-none"
            draggable="false"
        />

        <div
            class="flex items-center justify-center w-full max-w-[370px] md:max-w-[480px] h-auto -mt-7 z-11 mx-auto rounded-[20px] px-6 py-8 md:px-10 md:py-12"
            style="background: linear-gradient(to bottom right, #C9A44A 0%, #D3C295 50%, #C9A44A 100%);"
        >
            <p
                class="text-[#000000] text-[22px] md:text-[28px] font-bold leading-[1.3] text-center"
            >
                Otevřete e-mail a potvrďte<br />
                členství. Následně budete<br />
                automaticky přesměrováni<br />
                na platební bránu.
            </p>
        </div>
    </div>

    <p
        class="z-10 mt-6 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-normal md:font-normal leading-[150%]"
    >
        Pokud e-mail neuvidíte během<br />
        několika minut,
        <span
            class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
            >zkontrolujte prosím</span
        ><br />
        <span
            class="bg-linear-to-br from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-bold inline-block"
            >složky Spam nebo Hromadné.</span
        >
    </p>
</section>
