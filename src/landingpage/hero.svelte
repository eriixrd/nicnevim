<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
</script>

<section>
    <div
        class="absolute top-0 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 bg-[#FFBA00]/50 blur-[70px] pointer-events-none"
    ></div>
    <div
        class="relative flex flex-col items-center justify-center w-full max-w-full sm:px-0"
    >
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="z-10 h-[72px] w-[65px] mt-8 mb-2 select-none pointer-events-none"
            draggable="false"
            style="max-width:160px;"
        />

        <div class="z-10 flex justify-center mt-4 gap-[5px]">
            {#each Array(5) as _}
                <img
                    src="/assets/icons/Star.svg"
                    alt="Star"
                    class="w-[16.47px] h-[15.92px] md:w-[17.29px] md:h-[16.72px] drop-shadow-[0_0_10px_rgba(255,186,0,0.6)]"
                />
            {/each}
        </div>

        <Tag className="mx-auto mt-2.5">
            <img
                src="/assets/persons/Ppls.svg"
                alt="Group"
                class="w-[40px] h-[17px] md:w-[42px] md:h-[17.85px]"
            />
            <span
                class="text-[14px] md:text-[14.7px] text-white font-medium leading-none"
                >450+ Aktivních investorů</span
            >
        </Tag>

        <h1
            class="z-10 mt-2.5 px-4 max-w-[950px] text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            Sledujte <span class="text-[#FFBA00]">celé mé<br />portfolio</span>
            a všechny<br />obchody živě
            <span class="text-[#FFBA00]">na <br />Discordu</span>
        </h1>

        <p
            class="z-10 mt-2.5 px-4 max-w-[900px] text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
        >
            Naučte se moji opční strategii<br />
            přímo z praxe skrze reálné obchody,<br />
            strukturu portfolia a detailní<br />
            myšlenkové procesy.
        </p>

        <div
            class="relative z-10 mx-auto mt-4 px-4 w-full md:w-full max-w-[800px]"
        >
            <div
                class="-z-10 absolute inset-0 bg-[#6633EE]/30 blur-[50px] md:blur-[80px] md:scale-100"
            ></div>
            <div
                class="relative rounded-[20px] overflow-hidden shadow-2xl aspect-video p-px"
            >
                <iframe
                    class="relative w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>

        <div class="z-10 flex flex-col items-center mt-5 mb-20 w-full px-4">
            <div class="flex items-center justify-center w-full mb-5">
                <div class="flex-1 flex justify-end">
                    <img
                        src="/assets/addpics/lclogo.png"
                        alt="LC Logo"
                        class="w-[53px] h-[80px] mr-[42px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>

                <div class="flex-none">
                    <img
                        src="/assets/addpics/forbeslogo.png"
                        alt="Forbes Logo"
                        class="w-[169px] h-[43px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>

                <div class="flex-1 flex justify-start">
                    <img
                        src="/assets/addpics/oklogo.png"
                        alt="OK Logo"
                        class="w-[63px] h-[44px] ml-[34px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>
            </div>

            <button
                class="px-13 py-3.5 bg-[#FFC300] hover:bg-[#DEAA00] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-lg cursor-pointer transition-all duration-200"
            >
                Chci vědět víc!
            </button>
        </div>
    </div>
</section>
