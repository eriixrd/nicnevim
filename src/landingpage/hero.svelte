<div
    class="relative w-full flex flex-col items-center justify-center max-w-full sm:px-0"
>
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[198px] bg-[#FFBA00]/25 blur-[150px] pointer-events-none"
    ></div>
    <img
        src="/assets/addpics/logo.png"
        alt="Logo"
        class="h-[62px] w-auto z-10 mt-8 mb-2 select-none pointer-events-none"
        draggable="false"
        style="max-width:160px;"
    />

    <div class="flex justify-center items-center mt-3 mb-2 gap-0 px-[5px]">
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
        class="relative p-[1px] z-10 rounded-[10px] bg-gradient-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] mt-7 mx-auto w-fit"
    >
        <div
            class="bg-[#120b2e]/60 backdrop-blur-md rounded-[10px] py-2 px-6 flex items-center justify-center gap-4"
        >
            <img
                src="/assets/persons/Ppls 1.svg"
                alt="User"
                class="w-20 h-auto object-cover"
            />
            <span class="font-sans text-[18px] text-white leading-normal"
                >450+ Aktivních investorů</span
            >
        </div>
    </div>

    <div
        class="mt-5 text-center font-sans font-bold text-[32px] md:text-[42px] leading-[1.15] px-[5px]"
    >
        <span class="block md:hidden">
            <span class="text-[#FFFFFF]">Sledujte </span>
            <span class="text-[#FFBA00]">celé mé</span><br />
            <span class="text-[#FFBA00]">portfolio</span>
            <span class="text-[#FFFFFF]"> a všechny</span><br />
            <span class="text-[#FFFFFF]">obchody živě </span>
            <span class="text-[#FFBA00]">na</span><br />
            <span class="text-[#FFBA00]">Discordu</span>
        </span>
        <span class="hidden md:inline">
            <span class="text-[#FFFFFF]">Sledujte </span>
            <span class="text-[#FFBA00]">celé mé portfolio</span>
            <span class="text-[#FFFFFF]"> a všechny</span><br />
            <span class="text-[#FFFFFF]">obchody živě </span>
            <span class="text-[#FFBA00]">na Discordu</span>
        </span>
    </div>

    <div
        class="mt-5 md:mt-4 text-center font-inter font-regular text-[18px] md:text-[24px] leading-normal px-[5px] text-[#FFFFFF]"
    >
        <span class="block md:hidden">
            Naučte se moji opční strategii přímo z praxe<br />skrze reálné
            obchody, strukturu portfolia<br />a detailní myšlenkové procesy.
        </span>
        <span class="hidden md:inline">
            Naučte se moji opční strategii přímo z praxe skrze reálné obchody,<br
            />strukturu portfolia a detailní myšlenkové procesy.
        </span>
    </div>

    <div class="flex justify-center mt-5 md:mt-10 relative">
        <div
            class="relative z-10 w-[390px] h-[209px] max-w-[90%] md:max-w-full md:w-[755px] md:h-[425px] rounded-[25px] overflow-hidden shadow-[0_0_250px_0_rgba(102,51,238,0.5),0_0_10px_0px_rgba(0,0,0,0.10)]"
        >
            <iframe
                src=""
                title="Vimeo video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="w-full h-full object-cover rounded-[13px]"
            ></iframe>
        </div>
    </div>

    <div
        class="flex flex-wrap justify-center items-center gap-8 md:gap-20 mt-8 md:mt-16 px-5"
    >
        <img
            src="/assets/addpics/lclogo.png"
            alt="Partner Logo 1"
            class="h-12 md:h-9 w-auto opacity-80"
        />
        <img
            src="/assets/addpics/forbeslogo.png"
            alt="Partner Logo 2"
            class="h-9 md:h-9 w-auto opacity-80"
        />
        <img
            src="/assets/addpics/oklogo.png"
            alt="Partner Logo 3"
            class="h-9 md:h-9 w-auto opacity-80"
        />
    </div>

    <div class="flex justify-center mt-5">
        <button
            class="bg-[#FFC300] text-[#000000] font-bold rounded-[10px] mb-10 text-[18px] w-[220px] h-[50px] flex items-center justify-center shadow-[0_0_50px_rgba(255,195,0,0.5)]"
        >
            Chci vědět víc!
        </button>
    </div>
</div>
