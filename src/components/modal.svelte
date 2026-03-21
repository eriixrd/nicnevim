<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { onMount } from "svelte";
    import AppleEmoji from "./AppleEmoji.svelte";
    import StripePayment from "./StripePayment.svelte";

    let { isOpen = $bindable(false), onClose = () => {} } = $props();

    let name = $state("");
    let email = $state("");
    let step = $state("info"); // 'info', 'payment', or 'success'

    function close() {
        isOpen = false;
        step = "info"; // Reset to first step on close
        if (onClose) onClose();
    }

    async function goToPayment() {
        if (name.trim() !== "" && email.trim() !== "") {
            // --- ECOMAIL PŘÍPRAVA (Jedná se o předlohu) ---
            // Zde voláme náš API endpoint, který se postará o odeslání do Ecomailu.
            try {
                const response = await fetch('/api/submit-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, source: 'modal_komunita' })
                });
                const result = await response.json();
                console.log("Předloha odeslání do Ecomailu:", result);
            } catch (error) {
                console.error("Chyba při přípravě do Ecomailu:", error);
            }
            
            step = "success";
        }
    }
</script>

{#if isOpen}
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6"
        transition:fade={{ duration: 200 }}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
    >
        <!-- Backdrop -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onclick={close}
        ></div>

        <!-- Modal Content -->
        <div
            class="relative w-full {step === 'payment'
                ? 'h-full'
                : 'max-h-[90vh] lg:max-h-none lg:max-w-[1100px] rounded-[25px] md:rounded-[30px]'} max-w-[500px] bg-black overflow-y-auto shadow-2xl transition-all duration-300"
            style={step === "payment" ? "max-width: 100%;" : ""}
            transition:scale={{ duration: 300, start: 0.95, opacity: 0 }}
        >
            <!-- Background Glow -->
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-[#6633EE]/10 blur-[80px] pointer-events-none"
            ></div>

            <div
                class="relative z-10 {step === 'payment'
                    ? ''
                    : 'p-6 md:p-10 flex flex-col items-center'} "
            >
                <!-- Close Button -->
                <button
                    onclick={close}
                    class="absolute top-5 right-5 {step === 'payment'
                        ? 'text-black/40 hover:text-black'
                        : 'text-white/40 hover:text-white'} transition-colors p-2 z-50 pointer-events-auto"
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
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {#if step === "info"}
                    <!-- Top Badge -->
                    <div
                        class="bg-linear-to-r from-[#4B1F7A] via-[#8A35C3] to-[#4B1F7A] px-3 py-2 rounded-[10px] mb-2 leading-[150%]"
                    >
                        <span class="text-white font-medium text-[16px]"
                            >Zbývá poslední krok</span
                        >
                    </div>

                    <!-- Step 1: Info Form -->
                    <h2
                        class="text-white text-[28px] md:text-[40px] font-extrabold text-center leading-tight mb-2"
                    >
                        Vyplňte údaje<br class="hidden md:block" />
                        <span class="text-[#FFBA00]">a rezervujte si své</span>
                        <br class="hidden md:block" />
                        <span class="text-[#FFBA00]">místo</span> v komunitě
                    </h2>

                    <p
                        class="text-white text-[18px] md:text-[24px] font-medium md:font-normal text-center leading-[150%] mb-6 md:mb-8"
                    >
                        <span class="md:hidden"
                            >Během pár minut vám odešleme další informace k
                            dokončení členství</span
                        >
                        <span class="hidden md:inline"
                            >Během pár minut vám odešleme<br />další informace k
                            dokončení<br />členství</span
                        >
                    </p>

                    <div class="w-full max-w-[450px] flex flex-col gap-4 mb-3">
                        <div class="relative group">
                            <input
                                type="text"
                                name="name"
                                autocomplete="name"
                                bind:value={name}
                                placeholder="Vaše jméno"
                                class="w-full bg-[#111] border border-white/10 rounded-[15px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/60 outline-none focus:border-[#FFBA00]/50 transition-all text-[16px] md:text-[18px]"
                            />
                        </div>
                        <div class="relative group">
                            <input
                                type="email"
                                name="email"
                                autocomplete="email"
                                bind:value={email}
                                placeholder="Váš e-mail"
                                class="w-full bg-[#111] border border-white/10 rounded-[15px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/60 outline-none focus:border-[#FFBA00]/50 transition-all text-[16px] md:text-[18px]"
                            />
                        </div>
                    </div>

                    <button
                        onclick={goToPayment}
                        disabled={!name || !email}
                        class="group relative w-full max-w-[450px] mt-2 md:mt-4 py-3.5 md:py-4 bg-[#FFC300] text-black text-[18px] md:text-[20px] font-bold rounded-[15px] shadow-[0_0_25px_rgba(255,195,0,0.3)] cursor-pointer transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                        <span class="relative z-10">Odeslat a rezervovat místo</span>
                        <div
                            class="absolute top-0 -left-[125%] w-[50%] h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"
                        ></div>
                    </button>

                    <div class="flex items-center justify-center pt-8 pb-2">
                        <img
                            src="/assets/addpics/formreview.png"
                            alt="Reviews and ratings"
                            class="w-full max-w-[220px] md:max-w-[250px] h-auto object-contain"
                        />
                    </div>

                    <p
                        class="text-white/40 text-[14px] leading-[150%] mt-8 mb-1"
                    >
                        Členství lze kdykoliv zrušit
                    </p>
                {:else if step === "payment"}
                    <!-- Step 2: Payment & Selection -->
                    <div class="w-full h-full min-h-screen lg:min-h-0">
                        <StripePayment
                            {name}
                            {email}
                            onStepBack={() => (step = "info")}
                        />
                    </div>
                {:else if step === "success"}
                    <!-- Final Step: Success Message -->
                    <div class="p-10 flex flex-col items-center">
                        <div class="w-16 h-16 bg-[#FFC300] rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <h2 class="text-white text-[28px] md:text-[34px] font-extrabold text-center leading-tight mb-4">
                            Úspěšně uloženo!
                        </h2>
                        <p class="text-white/60 text-[18px] md:text-[20px] text-center mb-8 leading-[150%]">
                            Vaše údaje byly zachyceny a brzy vás budeme kontaktovat s dalšími informacemi (předloha odeslání na ecomail).
                        </p>
                        <button
                            onclick={close}
                            class="px-10 py-3.5 bg-white/10 text-white font-bold rounded-[15px] hover:bg-white/20 transition-all"
                        >
                            Zavřít
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
</style>
