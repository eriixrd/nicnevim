<script>
	import Marquee from 'svelte-fast-marquee';
	let play = true;
	let repeat = 5; // Počet opakování obrázků v marquée

	// Nahraj obrázky dynamicky z public složky. Import jako výše nebude fungovat v některých build procesech.
	const proofImgs = [
		'/proof/Proof-01.png',
		'/proof/Proof-02.png',
		'/proof/Proof-03.png',
		'/proof/Proof-04.png',
		'/proof/Proof-05.png',
		'/proof/Proof-06.png',
		'/proof/Proof-07.png',
		'/proof/Proof-08.png',
        '/proof/Proof-09.png',
        '/proof/Proof-10.png',
        '/proof/Proof-11.png',
	];
</script>

<!-- Desktop (md+) variant -->
<div class="relative hidden md:block max-w-[1300px] mask-x-from-70% mask-x-to-100% w-full mb-5">
    <Marquee speed={25} play={play}>
        {#each Array(repeat) as _, r}
            {#each proofImgs as src, i}
                <img 
                    src={src} 
                    alt={`Proof ${i + 1} repeat ${r + 1}`}
                    loading="lazy"
                    class="h-[230px] w-auto mx-2.5 my-0 object-contain block"
                />
            {/each}
        {/each}
    </Marquee>
</div>
<div class="relative hidden md:block max-w-[1300px] mask-x-from-70% mask-x-to-100% w-full">
    <Marquee speed={23} play={play}>
        <div class="flex flex-row-reverse">
            {#each Array(repeat) as _, r}
                {#each proofImgs.slice(5).reverse() as src, i}
                    <img 
                        src={src} 
                        alt={`Proof ${proofImgs.length - i} repeat ${r + 1}`}
                        loading="lazy"
                        class="h-[230px] w-auto mx-2.5 my-0 object-contain block"
                    />
                {/each}
            {/each}
        </div>
    </Marquee>
</div>

<!-- Mobile variant -->
<div class="relative block md:hidden w-screen max-w-[420px] mask-x-from-70% mask-x-to-100% mb-3">
    <Marquee speed={25} play={play}>
        {#each Array(repeat) as _, r}
            {#each proofImgs as src, i}
                <img 
                    src={src}
                    alt={`Proof ${i + 1} repeat ${r + 1}`}
                    loading="lazy"
                    class="h-[200px] w-auto mx-1.5 my-0 object-contain block"
                />
            {/each}
        {/each}
    </Marquee>
</div>
<div class="relative block md:hidden w-screen max-w-[420px] mx-auto mask-x-from-70% mask-x-to-100% pb-2">
    <Marquee speed={23} play={play}>
        <div class="flex flex-row-reverse ml-auto">
            {#each Array(repeat) as _, r}
                {#each proofImgs.slice(5).reverse() as src, i}
                    <img 
                        src={src}
                        alt={`Proof ${proofImgs.length - 3 - i} repeat ${r + 1}`}
                        loading="lazy"
                        class="h-[200px] w-auto mx-1.5 my-0 object-contain block"
                    />
                {/each}
            {/each}
        </div>
    </Marquee>
</div>