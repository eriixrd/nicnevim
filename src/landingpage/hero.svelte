<script lang="ts">
    import Tag from "../components/Tag.svelte";
    import Stars from "../components/Stars.svelte";
</script>

<svelte:head>
    <script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<section>
    <div
        class="absolute top-0 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 bg-[#FFBA00]/50 blur-[70px] pointer-events-none"
        style="filter: blur(70px); -webkit-filter: blur(70px); will-change: filter; transform: translate3d(0, 0, 0);"
    ></div>
    <div
        class="relative flex flex-col items-center justify-center w-full max-w-full"
    >
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="z-10 h-[80px] w-auto mt-8 mb-2 select-none pointer-events-none"
            draggable="false"
            style="max-width:160px; image-rendering: -webkit-optimize-contrast;"
        />

        <Stars className="mt-4" />

        <Tag className="mx-auto mt-2.5">
            <img
                src="/assets/persons/Ppls.png"
                alt="Group"
                class="w-[40px] h-[18px] md:w-[42px] md:h-[18px]"
            />
            <span class="text-[16px] text-white font-medium leading-none"
                >450+ Aktivních investorů</span
            >
        </Tag>

        <h1
            class="z-10 mt-2 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
        >
            Sledujte <span class="text-[#FFBA00]"
                >celé mé <br class="md:hidden" /> portfolio</span
            >
            <br class="hidden md:block" />
            a všechny <br class="md:hidden" />
            obchody živě
            <br class="hidden md:block" />
            <span class="text-[#FFBA00]"
                >na <br class="md:hidden" /> Discordu</span
            >
        </h1>

        <p
            class="z-10 mt-2.5 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-medium md:font-normal leading-[150%]"
        >
            Naučte se moji opční strategii <br />
            přímo z praxe skrze reálné obchody, <br class="md:hidden" />
            strukturu <br class="hidden md:block" />
            portfolia a detailní <br class="md:hidden" /> myšlenkové procesy.
        </p>

        <div class="relative z-10 mx-auto mt-4 px-4 w-full md:max-w-[880px]">
            <div
                class="-z-10 absolute inset-0 bg-[#6633EE]/30 blur-[50px] md:blur-[80px] md:scale-100"
                style="filter: blur(50px); -webkit-filter: blur(50px); will-change: transform; transform: translate3d(0, 0, 0);"
            ></div>
            <div
                class="relative rounded-[20px] overflow-hidden shadow-2xl aspect-video p-px"
                style="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); will-change: transform; transform: translate3d(0, 0, 0);"
            >
                <iframe
                    src="https://player.vimeo.com/video/1174355198?h=c858363e39&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    class="absolute top-0 left-0 w-full h-full"
                    title="NicNevim VSL Landing Page Komunita"
                ></iframe>
            </div>
        </div>

        <div class="z-10 flex flex-col items-center mt-5 mb-20 w-full px-4">
            <div class="flex items-center justify-center w-full mb-5">
                <div class="flex-1 flex justify-end">
                    <img
                        src="/assets/addpics/cclogo.png"
                        alt="Czech Crunch Logo"
                        class="h-[30px] md:h-[40px] w-auto mr-[25px] md:mr-[130px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>

                <div class="flex-none">
                    <img
                        src="/assets/addpics/forbeslogo.png"
                        alt="Forbes Logo"
                        class="w-[152px] h-[39px] md:w-[169px] md:h-[43px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>

                <div class="flex-1 flex justify-start">
                    <img
                        src="/assets/addpics/oklogo.png"
                        alt="OK Logo"
                        class="w-[57px] h-[40px] md:w-[63px] md:h-[44px] ml-[34px] md:ml-[120px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                        draggable="false"
                    />
                </div>
            </div>

            <button
                onclick={() => {
                    document
                        .getElementById("packages")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                class="group relative px-13 py-3.5 bg-[#FFC300] text-[#000000] text-[18px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
            >
                <span class="relative z-10">Chci vědět víc!</span>
                <div
                    class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
                ></div>
            </button>
        </div>
    </div>
</section>
