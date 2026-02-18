<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { onMount } from "svelte";
    import AppleEmoji from "./AppleEmoji.svelte";

    let { isOpen = $bindable(false), onClose = () => {} } = $props();

    let name = $state("");
    let email = $state("");

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") {
            close();
        }
    }

    function close() {
        isOpen = false;
        if (onClose) onClose();
    }
</script>

{#if isOpen}
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        transition:fade={{ duration: 200 }}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
    >
        <!-- Backdrop -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
            class="relative w-full max-w-[500px] bg-[#0A0A0A] rounded-[30px] border border-white/10 overflow-hidden shadow-2xl"
            transition:scale={{ duration: 300, start: 0.95, opacity: 0 }}
        >
            <!-- Background Glow -->
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-[#6633EE]/10 blur-[80px] pointer-events-none"
            ></div>

            <div class="relative z-10 p-8 md:p-10 flex flex-col items-center">
                <!-- Close Button -->
                <button
                    onclick={close}
                    class="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-2"
                    aria-label="Close modal"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><line x1="18" y1="6" x2="6" y2="18"></line><line
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                        ></line></svg
                    >
                </button>

                <!-- Top Badge -->
                <div
                    class="bg-linear-to-r from-[#4B1F7A] via-[#8A35C3] to-[#4B1F7A] px-3 py-2 rounded-[10px] mb-2 leading-[150%]"
                >
                    <span class="text-white font-medium text-[16px]"
                        >Zbývá poslední krok</span
                    >
                </div>

                <!-- Heading -->
                <h2
                    class="text-white text-[36px] md:text-[40px] font-extrabold text-center leading-tight mb-2"
                >
                    Vyplňte údaje<br />
                    <span class="text-[#FFBA00]">a rezervujte si své</span><br
                    />
                    <span class="text-[#FFBA00]">místo</span> v komunitě
                </h2>

                <!-- Subheading -->
                <p
                    class="text-white text-[20px] md:text-[24px] font-medium md:font-normal text-center leading-[150%] mb-8"
                >
                    Během pár minut vám odešleme<br />
                    další informace k dokončení<br />
                    členství
                </p>

                <!-- Form -->
                <div class="w-full flex flex-col gap-4 mb-3">
                    <div class="relative group">
                        <input
                            type="text"
                            name="name"
                            autocomplete="name"
                            bind:value={name}
                            placeholder="Vaše jméno"
                            class="w-full bg-[#111] border border-white/10 rounded-[15px] px-6 py-4 text-white placeholder:text-white/60 outline-none focus:border-[#FFBA00]/50 transition-all text-[18px]"
                        />
                    </div>
                    <div class="relative group">
                        <input
                            type="email"
                            name="email"
                            autocomplete="email"
                            bind:value={email}
                            placeholder="Váš e-mail"
                            class="w-full bg-[#111] border border-white/10 rounded-[15px] px-6 py-4 text-white placeholder:text-white/60 outline-none focus:border-[#FFBA00]/50 transition-all text-[18px]"
                        />
                    </div>
                </div>

                <!-- Button -->
                <button
                    class="group relative w-full mt-4 py-4 bg-[#FFC300] text-black text-[20px] font-bold rounded-[15px] shadow-[0_0_25px_rgba(255,195,0,0.3)] cursor-pointer transition-all duration-200 hover:scale-[1.02] overflow-hidden"
                >
                    <span class="relative z-10">Pokračovat k platbě</span>
                    <div
                        class="absolute top-0 -left-[125%] w-[50%] h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"
                    ></div>
                </button>

                <!-- Small text -->
                <p class="text-white/40 text-[14px] leading-[150%] mt-6 mb-1">
                    Členství lze kdykoliv zrušit
                </p>

                <!-- Footer -->
                <div class="flex items-center justify-center pt-4 pb-2">
                    <img
                        src="/assets/addpics/formreview.png"
                        alt="Reviews and ratings"
                        class="w-full max-w-[220px] md:max-w-[250px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    /* Add any custom animations or tweaks here */
</style>
