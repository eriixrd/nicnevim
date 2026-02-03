<section>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] bg-[#FFBA00]/65 blur-[70px] pointer-events-none"
    ></div>
    <div
        class="relative w-full flex flex-col items-center justify-center max-w-full sm:px-0"
    >
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="h-[72px] w-[65px] z-10 mt-8 mb-2 select-none pointer-events-none"
            draggable="false"
            style="max-width:160px;"
        />

        <div class="flex justify-center mt-4 gap-[5px] z-10">
            {#each Array(5) as _}
                <img
                    src="/assets/icons/Star.svg"
                    alt="Star"
                    class="w-[16.47px] h-[15.92px] drop-shadow-[0_0_10px_rgba(255,186,0,0.6)]"
                />
            {/each}
        </div>

        <div
            class="relative p-[1px] z-10 rounded-[10px] bg-gradient-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] mt-2.5 mx-auto w-fit"
        >
            <div
                class="bg-[#120b2e]/60 backdrop-blur-md rounded-[10px] py-[4.5px] px-3 flex items-center justify-center gap-[5px]"
            >
                <img
                    src="/assets/persons/Ppls.svg"
                    alt="Group"
                    class="w-[40px] h-[17px]"
                />
                <span class="text-[#ffffff] font-medium text-[14px]"
                    >450+ Aktivních investorů</span
                >
            </div>
        </div>

        <h1
            class="text-white text-center font-bold text-[36px] md:text-[40px] mt-2.5 max-w-[950px] leading-tight z-10 px-4"
        >
            Sledujte <span class="text-[#FFBA00]">celé mé<br />portfolio</span>
            a všechny<br />obchody živě
            <span class="text-[#FFBA00]">na <br />Discordu</span>
        </h1>

        <p
            class="text-white text-center font-medium text-[20px] md:text-[24px] mt-2.5 max-w-[900px] leading-[150%] z-10 px-4"
        >
            Naučte se moji opční strategii<br />
            přímo z praxe skrze reálné obchody,<br />
            strukturu portfolia a detailní<br />
            myšlenkové procesy.
        </p>

        <div
            class="relative w-full md:w-full max-w-[800px] mt-4 z-10 mx-auto px-4"
        >
            <div
                class="absolute inset-0 bg-[#6633EE]/40 blur-[50px] -z-10"
            ></div>
            <div
                class="relative p-[1px] rounded-[20px] shadow-2xl overflow-hidden aspect-video"
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

        <div
            class="flex justify-center flex-wrap items-center gap-8 md:gap-16 mt-5 z-10 px-4"
        >
            <img
                src="/assets/addpics/lclogo.png"
                alt="Forbes Logo"
                class="h-[58px] md:h-[70px] w-auto opacity-70 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                draggable="false"
            />
            <img
                src="/assets/addpics/forbeslogo.png"
                alt="LC Logo"
                class="h-[44px] md:h-[45px] w-auto opacity-70 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                draggable="false"
            />
            <img
                src="/assets/addpics/oklogo.png"
                alt="OK Logo"
                class="h-[45px] md:h-[60px] w-auto opacity-70 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                draggable="false"
            />
        </div>

        <button
            class="mt-5 px-13 py-3.5 bg-[#FFC300] text-[#000000] font-bold text-[18px] rounded-[10px] hover:bg-[#FFD300] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 z-10 shadow-lg"
        >
            Chci vědět víc!
        </button>
    </div>
</section>
