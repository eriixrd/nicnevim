<script lang="ts">
    import { onMount } from "svelte";
    import { fly, slide } from "svelte/transition";
    import AppleEmoji from "./AppleEmoji.svelte";

    let visible = $state(false);
    let showSettings = $state(false);

    let categories = $state({
        necessary: true,
        analytical: true,
        marketing: true,
        personalization: true,
    });

    onMount(() => {
        // Create a global function to open settings
        window.openCookieSettings = () => {
            visible = true;
            showSettings = true;
        };

        const consent = localStorage.getItem("cookie-consent-v10");
        if (!consent) {
            visible = true;
        }
    });

    function acceptAll() {
        localStorage.setItem("cookie-consent-v10", "all");
        visible = false;
    }

    function toggleSettings() {
        showSettings = !showSettings;
    }

    function confirmSettings() {
        localStorage.setItem("cookie-consent-v10", JSON.stringify(categories));
        visible = false;
    }
</script>

{#if visible}
    <!-- Container s pevnou pozicí -->
    <div
        class="fixed bottom-6 right-6 z-1000000 hidden md:block"
        transition:fly={{ y: 50, duration: 600, opacity: 0 }}
    >
        <!-- Obal s přesnou šířkou 581px -->
        <div
            class="relative w-[581px] p-px rounded-[20px] bg-[#1C1D19] transition-all duration-500 ease-in-out"
        >
            <!-- Border Stroke -->
            <div
                class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-[#FFBA00]/50 via-transparent to-[#FFBA00]/50 pointer-events-none"
            ></div>

            <div
                class="relative flex flex-col pt-[34px] pr-[40px] pb-[34px] pl-[40px] rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A] transition-all duration-500 ease-in-out"
            >
                <!-- Hlavní content (stále viditelný) -->
                <div class="flex flex-col items-start gap-[10px]">
                    <h2
                        class="flex items-center text-white text-[26px] font-semibold m-0 leading-[1.1] tracking-[-0.01em]"
                    >
                        <span class="mr-3 shrink-0"
                            ><AppleEmoji symbol="🍪" size={28} /></span
                        >
                        Chcete povolit cookies?
                    </h2>

                    <p
                        class="text-white text-[12.5px] font-normal whitespace-nowrap leading-[1.45] m-0 opacity-90 pr-4"
                    >
                        Nejsou k jídlu, ale pomáhají nám ladit web k
                        dokonalosti. Kliknutím na „Povolit vše“<br
                            class="hidden md:block"
                        />
                        souhlasíte s ukládáním souborů cookie, které nám pomáhají
                        s analýzou a cílením<br class="hidden md:block" />
                        marketingových služeb. Data nám umožňují lépe porozumět vašim
                        potřebám a neustále<br class="hidden md:block" />
                        zvyšovat standard našich digitálních služeb.
                    </p>

                    <div class="flex gap-[12px] mt-4 w-full">
                        <button
                            type="button"
                            class="flex-1 flex items-center justify-center text-white text-[16px] font-bold py-[10px] rounded-[12px] cursor-pointer transition-all duration-200 bg-[#7B00E6] shadow-[0_10px_20px_rgba(123,0,230,0.2)] hover:scale-[1.02] hover:bg-[#8e1aff]"
                            onclick={acceptAll}
                        >
                            Povolit vše
                        </button>

                        <button
                            type="button"
                            class="flex-1 flex items-center justify-center text-white text-[16px] font-bold py-[8.5px] m-px border border-white/60 rounded-[12px] cursor-pointer transition-all duration-200 bg-transparent hover:bg-white/10 hover:border-white"
                            onclick={toggleSettings}
                        >
                            {showSettings
                                ? "Zavřít nastavení"
                                : "Nastavit preference"}
                        </button>
                    </div>
                </div>

                <!-- Nastavení (slide-in pod hlavním obsahem) -->
                {#if showSettings}
                    <div
                        transition:slide={{ duration: 500 }}
                        class="flex flex-col gap-6 mt-8 pt-6 border-t border-white/10 w-full"
                    >
                        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                            {#each [{ key: "necessary", label: "Nezbytné", desc: "(Vždy aktivní)" }, { key: "analytical", label: "Analytické" }, { key: "marketing", label: "Marketingové" }, { key: "personalization", label: "Personalizované" }] as item}
                                <label
                                    class="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-2"
                                >
                                    <div class="flex flex-col">
                                        <span
                                            class="text-white text-[14px] font-medium transition-colors group-hover:text-[#FFBA00]"
                                            >{item.label}</span
                                        >
                                        {#if item.desc}
                                            <span
                                                class="text-white/40 text-[10px] font-normal"
                                                >{item.desc}</span
                                            >
                                        {/if}
                                    </div>
                                    <input
                                        type="checkbox"
                                        bind:checked={
                                            categories[
                                                item.key as keyof typeof categories
                                            ]
                                        }
                                        disabled={item.key === "necessary"}
                                        class="w-5 h-5 accent-[#7B00E6] cursor-pointer"
                                    />
                                </label>
                            {/each}
                        </div>

                        <button
                            type="button"
                            class="w-full h-[45px] flex items-center justify-center text-white text-[16px] font-bold rounded-[12px] cursor-pointer transition-all duration-200 bg-[#7B00E6] shadow-[0_10px_20px_rgba(123,0,230,0.2)] hover:scale-[1.02] hover:bg-[#8e1aff]"
                            onclick={confirmSettings}
                        >
                            Potvrdit výběr a zavřít
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <!-- Mobilní verze -->
    <div
        class="fixed bottom-4 left-4 right-4 z-1000000 md:hidden"
        transition:fly={{ y: 50, duration: 600, opacity: 0 }}
    >
        <div
            class="relative p-px rounded-[20px] bg-[#1C1D19] transition-all duration-500"
        >
            <div
                class="absolute inset-0 rounded-[20px] bg-linear-to-tl from-[#FFBA00]/50 via-transparent to-[#FFBA00]/50 pointer-events-none"
            ></div>
            <div
                class="relative flex flex-col p-7 rounded-[19px] bg-linear-to-br from-[#1C1D19] to-[#0B0B0A]"
            >
                <div class="flex flex-col">
                    <h2
                        class="flex items-center text-white text-[22px] font-semibold m-0 leading-[1.1] tracking-[-0.01em]"
                    >
                        <span class="mr-2 shrink-0"
                            ><AppleEmoji symbol="🍪" size={24} /></span
                        >
                        Chcete povolit cookies?
                    </h2>

                    <!-- Popisek neustále viditelný - zkrátí se jen při otevřeném nastavení -->
                    <p
                        class="text-white text-[14px] font-normal leading-[1.45] mt-4 mb-6 opacity-90"
                    >
                        {#if showSettings}
                            Nejsou k jídlu, ale pomáhají nám ladit web k
                            dokonalosti. Kliknutím na „Povolit vše“...
                        {:else}
                            Nejsou k jídlu, ale pomáhají nám ladit web k
                            dokonalosti. Kliknutím na „Povolit vše“ souhlasíte s
                            ukládáním souborů cookie, které nám pomáhají s
                            analýzou a cílením marketingových služeb. Data nám
                            umožňují lépe porozumět vašim potřebám a neustále
                            zvyšovat standard našich digitálních služeb.
                        {/if}
                    </p>

                    <div class="flex flex-col gap-3">
                        <button
                            type="button"
                            class="w-full py-4 rounded-xl text-white font-bold bg-[#7B00E6]"
                            onclick={acceptAll}
                        >
                            Povolit vše
                        </button>
                        <button
                            type="button"
                            class="w-full py-3.5 m-px border border-white/60 rounded-xl text-white font-bold bg-transparent"
                            onclick={toggleSettings}
                        >
                            {showSettings ? "Zavřít" : "Nastavení preference"}
                        </button>
                    </div>
                </div>

                {#if showSettings}
                    <div
                        transition:slide={{ duration: 400 }}
                        class="flex flex-col gap-5 mt-8 pt-6 border-t border-white/10"
                    >
                        {#each [{ key: "necessary", label: "Nezbytné" }, { key: "analytical", label: "Analytické" }, { key: "marketing", label: "Marketingové" }, { key: "personalization", label: "Personalizované" }] as item}
                            <label
                                class="flex justify-between items-center bg-white/5 p-3 rounded-lg"
                            >
                                <span class="text-white font-medium"
                                    >{item.label}</span
                                >
                                <input
                                    type="checkbox"
                                    bind:checked={
                                        categories[
                                            item.key as keyof typeof categories
                                        ]
                                    }
                                    disabled={item.key === "necessary"}
                                    class="w-6 h-6 accent-[#7B00E6]"
                                />
                            </label>
                        {/each}

                        <button
                            type="button"
                            class="w-full py-4 rounded-xl text-white font-bold bg-[#7B00E6]"
                            onclick={confirmSettings}
                        >
                            Potvrdit výběr a zavřít
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
