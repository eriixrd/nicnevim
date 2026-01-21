<script lang="ts">
  import Button from '../components/button.svelte';
  import { createEventDispatcher } from 'svelte';

  export let isOpen: boolean = false;
  const dispatch = createEventDispatcher();

  // Formulářové proměnné
  let firstName = '';
  let email = '';
  let collectingInfo = '';
  let isSubmitting = false;
  let submitMessage = '';
  let submitError = '';

  function closeModal() {
    isOpen = false;
    dispatch('close');
    resetForm();
  }

  function resetForm() {
    firstName = '';
    email = '';
    collectingInfo = '';
    submitMessage = '';
    submitError = '';
    isSubmitting = false;
  }

  function isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  function areAllFieldsValid(): boolean {
    return (
      firstName.trim().length > 0 &&
      collectingInfo.trim().length > 0 &&
      isEmailValid(email)
    );
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (isSubmitting) return;
    submitError = '';
    submitMessage = '';

    if (!firstName.trim() || !email.trim() || !collectingInfo.trim()) {
      submitError = 'Vyplň prosím všechna pole.';
      return;
    }
    if (!isEmailValid(email)) {
      submitError = 'Zadej platný e-mail (např. tvuj@email.cz)';
      return;
    }

    isSubmitting = true;

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          collectingInfo: collectingInfo.trim()
        })
      });
      const data = await res.json();

      if (data.success) {
        submitMessage = data.message || 'Přihlášení proběhlo úspěšně!';
        submitError = '';

        // GA event
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'submit_form', {
            event_category: 'Formulář',
            event_label: 'Přihlášení do programu',
            value: 1
          });
        }

        // 🔥 oznámí rodiči, že proběhl success
        dispatch('submitSuccess');

        // redirect
        setTimeout(() => {
          window.location.href = '/hotovo';
        }, 1200);
      } else {
        submitMessage = '';
        submitError = data.error || 'Nastala neznámá chyba při odesílání formuláře.';
      }
    } catch (error: any) {
      submitMessage = '';
      submitError = 'Chyba spojení se serverem. Zkuste to prosím později.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<style>
  @media (max-width: 640px) {
    .close-btn-modal {
      display: none !important;
    }
    .progress-row {
      justify-content: flex-start !important;
    }
    .progress-row .krok-label {
      justify-content: center !important;
      align-items: center !important;
      text-align: center !important;
      padding-left: 0 !important;
      width: 100%;
      height: 100%;
      display: flex !important;
    }
    .progress-row .mobile-close {
      display: block !important;
    }
  }
  .mobile-close {
    display: none;
  }
</style>

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-[#101010]/90 px-[5vw]"
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div class="bg-[#101010]/50 backdrop-blur-sm border border-[#222]/60 rounded-[25px] shadow-lg w-[720px] max-w-full max-h-[90vh] flex flex-col relative overflow-auto p-0">
      
      <!-- Horní progress bar řada -->
      <div class="w-full px-4 pt-6 pb-2 flex flex-col items-center">
        <div class="w-full max-w-[570px]">
          <div class="flex flex-row items-center justify-center progress-row relative">
            <div class="flex-1 rounded-[16px] border border-[#222] bg-white overflow-hidden mr-0">
              <div class="w-full h-[32px] flex items-center relative">
                <div class="absolute left-0 top-0 h-full bg-linear-to-r from-[#6EE7B7] via-[#34D399] to-[#4ADE80] rounded-[16px]" style="width: 87%;"></div>
                <div class="relative w-full h-full flex items-center justify-center krok-label z-10">
                  <span class="text-[#222] font-medium text-[clamp(12px,2.8vw,18px)]">Krok 2/2 - Vyplň údaje</span>
                </div>
              </div>
            </div>
            <button
              class="ml-2 text-2xl text-white cursor-pointer hover:text-[#DE9302] transition-colors z-10 mobile-close"
              aria-label="Zavřít"
              type="button"
              on:click={closeModal}
              style="display:none"
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      <button
        class="absolute top-4 right-4 text-2xl text-white cursor-pointer hover:text-[#DE9302] transition-colors z-10 close-btn-modal"
        aria-label="Zavřít"
        type="button"
        on:click={closeModal}
      >
        &times;
      </button>

      <div class="w-full flex flex-col items-center px-4 pb-2">
        <h1 class="text-[clamp(24px,5vw,32px)] font-bold text-center mb-1 mt-2 text-white">
          Odemkni svůj balíček <span class="text-white font-black">zdarma</span>
        </h1>
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="text-[#DE9302] text-[clamp(14px,3vw,18px)]">👉 Vyplň tvůj e-mail a já ti vše okamžitě pošlu.</span>
        </div>

        <form class="w-full max-w-[570px] flex flex-col gap-4" on:submit={handleSubmit}>
          <input
            type="text"
            placeholder="Tvé křestní jméno"
            class="w-full rounded-[12px] border border-[#222] bg-transparent px-4 py-3 text-[clamp(14px,3vw,17px)] text-white placeholder:text-[#E9EFFF]/80 focus:outline-none focus:ring-2 focus:ring-[#2639E0] transition"
            bind:value={firstName}
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Tvůj nejlepší e-mail"
            class="w-full rounded-[12px] border border-[#222] bg-transparent px-4 py-3 text-[clamp(14px,3vw,17px)] text-white placeholder:text-[#E9EFFF]/80 focus:outline-none focus:ring-2 focus:ring-[#2639E0] transition"
            bind:value={email}
            required
            disabled={isSubmitting}
          />
          <input
            type="text"
            placeholder="Co přesně sbíráš? (Jaký sport, tým nebo hráče)"
            class="w-full rounded-[12px] border border-[#222] bg-transparent px-4 py-3 text-[clamp(14px,3vw,17px)] text-white placeholder:text-[#E9EFFF]/80 focus:outline-none focus:ring-2 focus:ring-[#2639E0] transition"
            bind:value={collectingInfo}
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'ODESÍLÁM...' : 'JDEME NA TO!'}
          </Button>
        </form>

        {#if submitMessage}
          <div class="w-full max-w-[570px] mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
            <p class="text-center text-green-400 text-[clamp(12px,2.5vw,14px)] font-medium">
              ✅ {submitMessage}
            </p>
          </div>
        {/if}

        {#if submitError}
          <div class="w-full max-w-[570px] mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p class="text-center text-red-400 text-[clamp(12px,2.5vw,14px)] font-medium">
              ❌ {submitError}
            </p>
          </div>
        {/if}

        <div class="w-full max-w-[570px] mt-4 mb-2">
          <p class="text-center text-[#E9EFFF]/60 text-[clamp(11px,2.5vw,14px)]">
            Žádný spam. Kdykoliv se můžeš odhlásit jedním kliknutím.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}
