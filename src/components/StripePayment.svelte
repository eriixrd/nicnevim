<script lang="ts">
    import { onMount, untrack } from "svelte";
    import {
        loadStripe,
        type Stripe,
        type StripeElements,
    } from "@stripe/stripe-js";
    import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from "$env/static/public";
    import { slide, fade } from "svelte/transition";

    let {
        name = "",
        email = "jan.novak@example.cz",
        onStepBack = (() => {}) as () => void,
        selectedPlan: initialPlan = "monthly",
    }: {
        name?: string;
        email?: string;
        onStepBack?: () => void;
        selectedPlan?: "monthly" | "annual";
    } = $props();

    // State
    let selectedPlan = $state<"monthly" | "annual">(initialPlan);
    let stripe = $state<Stripe | null>(null);
    let elements = $state<StripeElements | null>(null);
    let message = $state("");
    let isLoading = $state(false);
    let promoCode = $state("");
    let showDetails = $state(false);
    let isCountryDropdownOpen = $state(false);

    $effect(() => {
        // Sync internal state if prop changes
        selectedPlan = initialPlan;
    });

    // Form fields
    let fullName = $state("");
    let addressLine1 = $state("");
    let addressLine2 = $state("");
    let city = $state("");
    let zipCode = $state("");
    let country = $state("Czech Republic");
    let buysForCompany = $state(false);
    let companyName = $state("");
    let taxId = $state("");
    let termsAccepted = $state(false);
    let saveInfo = $state(false);

    // Completion status
    let cardNumberComplete = $state(false);
    let cardExpiryComplete = $state(false);
    let cardCvcComplete = $state(false);

    const prices = {
        monthly: 3770,
        annual: 37770,
    };

    const vatConfig: Record<string, { label: string; placeholder: string }> = {
        "Czech Republic": {
            label: "DIČ",
            placeholder: "DIČ (např. CZ12345678)",
        },
        Slovakia: {
            label: "IČ DPH / DIČ",
            placeholder: "IČ DPH / DIČ (napr. SK2021234567)",
        },
        Germany: { label: "USt-IdNr.", placeholder: "USt-IdNr. (z. B. DE123456789)" },
        Austria: { label: "UID-Nummer", placeholder: "UID-Nummer (z. B. ATU12345678)" },
        Poland: { label: "NIP", placeholder: "NIP (np. PL1234567890)" },
        "United Kingdom": { label: "VAT Number", placeholder: "VAT Number (e.g. GB123456789)" },
        France: { label: "N° de TVA", placeholder: "N° de TVA (p. ex. FR12345678901)" },
        Italy: { label: "Partita IVA", placeholder: "Partita IVA (es. IT12345678901)" },
        Spain: { label: "NIF/CIF", placeholder: "NIF/CIF (ej. ESX1234567L)" },
        "United States": { label: "EIN / Tax ID", placeholder: "EIN / Tax ID (e.g. 12-3456789)" },
    };

    const countries = [
        { code: "AF", name: "Afghanistan" },
        { code: "AX", name: "Aland Islands" },
        { code: "AL", name: "Albania" },
        { code: "DZ", name: "Algeria" },
        { code: "AS", name: "American Samoa" },
        { code: "AD", name: "Andorra" },
        { code: "AO", name: "Angola" },
        { code: "AI", name: "Anguilla" },
        { code: "AQ", name: "Antarctica" },
        { code: "AG", name: "Antigua and Barbuda" },
        { code: "AR", name: "Argentina" },
        { code: "AM", name: "Armenia" },
        { code: "AW", name: "Aruba" },
        { code: "AU", name: "Australia" },
        { code: "AT", name: "Austria" },
        { code: "AZ", name: "Azerbaijan" },
        { code: "BS", name: "Bahamas" },
        { code: "BH", name: "Bahrain" },
        { code: "BD", name: "Bangladesh" },
        { code: "BB", name: "Barbados" },
        { code: "BY", name: "Belarus" },
        { code: "BE", name: "Belgium" },
        { code: "BZ", name: "Belize" },
        { code: "BJ", name: "Benin" },
        { code: "BM", name: "Bermuda" },
        { code: "BT", name: "Bhutan" },
        { code: "BO", name: "Bolivia" },
        { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
        { code: "BA", name: "Bosnia and Herzegovina" },
        { code: "BW", name: "Botswana" },
        { code: "BV", name: "Bouvet Island" },
        { code: "BR", name: "Brazil" },
        { code: "IO", name: "British Indian Ocean Territory" },
        { code: "BN", name: "Brunei Darussalam" },
        { code: "BG", name: "Bulgaria" },
        { code: "BF", name: "Burkina Faso" },
        { code: "BI", name: "Burundi" },
        { code: "KH", name: "Cambodia" },
        { code: "CM", name: "Cameroon" },
        { code: "CA", name: "Canada" },
        { code: "CV", name: "Cape Verde" },
        { code: "KY", name: "Cayman Islands" },
        { code: "CF", name: "Central African Republic" },
        { code: "TD", name: "Chad" },
        { code: "CL", name: "Chile" },
        { code: "CN", name: "China" },
        { code: "CX", name: "Christmas Island" },
        { code: "CC", name: "Cocos (Keeling) Islands" },
        { code: "CO", name: "Colombia" },
        { code: "KM", name: "Comoros" },
        { code: "CG", name: "Congo" },
        { code: "CD", name: "Congo, Democratic Republic of the Congo" },
        { code: "CK", name: "Cook Islands" },
        { code: "CR", name: "Costa Rica" },
        { code: "CI", name: "Cote D'Ivoire" },
        { code: "HR", name: "Croatia" },
        { code: "CU", name: "Cuba" },
        { code: "CW", name: "Curacao" },
        { code: "CY", name: "Cyprus" },
        { code: "CZ", name: "Czech Republic" },
        { code: "DK", name: "Denmark" },
        { code: "DJ", name: "Djibouti" },
        { code: "DM", name: "Dominica" },
        { code: "DO", name: "Dominican Republic" },
        { code: "EC", name: "Ecuador" },
        { code: "EG", name: "Egypt" },
        { code: "SV", name: "El Salvador" },
        { code: "GQ", name: "Equatorial Guinea" },
        { code: "ER", name: "Eritrea" },
        { code: "EE", name: "Estonia" },
        { code: "ET", name: "Ethiopia" },
        { code: "FK", name: "Falkland Islands (Malvinas)" },
        { code: "FO", name: "Faroe Islands" },
        { code: "FJ", name: "Fiji" },
        { code: "FI", name: "Finland" },
        { code: "FR", name: "France" },
        { code: "GF", name: "French Guiana" },
        { code: "PF", name: "French Polynesia" },
        { code: "TF", name: "French Southern Territories" },
        { code: "GA", name: "Gabon" },
        { code: "GM", name: "Gambia" },
        { code: "GE", name: "Georgia" },
        { code: "DE", name: "Germany" },
        { code: "GH", name: "Ghana" },
        { code: "GI", name: "Gibraltar" },
        { code: "GR", name: "Greece" },
        { code: "GL", name: "Greenland" },
        { code: "GD", name: "Grenada" },
        { code: "GP", name: "Guadeloupe" },
        { code: "GU", name: "Guam" },
        { code: "GT", name: "Guatemala" },
        { code: "GG", name: "Guernsey" },
        { code: "GN", name: "Guinea" },
        { code: "GW", name: "Guinea-Bissau" },
        { code: "GY", name: "Guyana" },
        { code: "HT", name: "Haiti" },
        { code: "HM", name: "Heard Island and Mcdonald Islands" },
        { code: "VA", name: "Holy See (Vatican City State)" },
        { code: "HN", name: "Honduras" },
        { code: "HK", name: "Hong Kong" },
        { code: "HU", name: "Hungary" },
        { code: "IS", name: "Iceland" },
        { code: "IN", name: "India" },
        { code: "ID", name: "Indonesia" },
        { code: "IR", name: "Iran, Islamic Republic of" },
        { code: "IQ", name: "Iraq" },
        { code: "IE", name: "Ireland" },
        { code: "IM", name: "Isle of Man" },
        { code: "IL", name: "Israel" },
        { code: "IT", name: "Italy" },
        { code: "JM", name: "Jamaica" },
        { code: "JP", name: "Japan" },
        { code: "JE", name: "Jersey" },
        { code: "JO", name: "Jordan" },
        { code: "KZ", name: "Kazakhstan" },
        { code: "KE", name: "Kenya" },
        { code: "KI", name: "Kiribati" },
        { code: "KP", name: "Korea, Democratic People's Republic of" },
        { code: "KR", name: "Korea, Republic of" },
        { code: "XK", name: "Kosovo" },
        { code: "KW", name: "Kuwait" },
        { code: "KG", name: "Kyrgyzstan" },
        { code: "LA", name: "Lao People's Democratic Republic" },
        { code: "LV", name: "Latvia" },
        { code: "LB", name: "Lebanon" },
        { code: "LS", name: "Lesotho" },
        { code: "LR", name: "Liberia" },
        { code: "LY", name: "Libyan Arab Jamahiriya" },
        { code: "LI", name: "Liechtenstein" },
        { code: "LT", name: "Lithuania" },
        { code: "LU", name: "Luxembourg" },
        { code: "MO", name: "Macao" },
        { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
        { code: "MG", name: "Madagascar" },
        { code: "MW", name: "Malawi" },
        { code: "MY", name: "Malaysia" },
        { code: "MV", name: "Maldives" },
        { code: "ML", name: "Mali" },
        { code: "MT", name: "Malta" },
        { code: "MH", name: "Marshall Islands" },
        { code: "MQ", name: "Martinique" },
        { code: "MR", name: "Mauritania" },
        { code: "MU", name: "Mauritius" },
        { code: "YT", name: "Mayotte" },
        { code: "MX", name: "Mexico" },
        { code: "FM", name: "Micronesia, Federated States of" },
        { code: "MD", name: "Moldova, Republic of" },
        { code: "MC", name: "Monaco" },
        { code: "MN", name: "Mongolia" },
        { code: "ME", name: "Montenegro" },
        { code: "MS", name: "Montserrat" },
        { code: "MA", name: "Morocco" },
        { code: "MZ", name: "Mozambique" },
        { code: "MM", name: "Myanmar" },
        { code: "NA", name: "Namibia" },
        { code: "NR", name: "Nauru" },
        { code: "NP", name: "Nepal" },
        { code: "NL", name: "Netherlands" },
        { code: "AN", name: "Netherlands Antilles" },
        { code: "NC", name: "New Caledonia" },
        { code: "NZ", name: "New Zealand" },
        { code: "NI", name: "Nicaragua" },
        { code: "NE", name: "Niger" },
        { code: "NG", name: "Nigeria" },
        { code: "NU", name: "Niue" },
        { code: "NF", name: "Norfolk Island" },
        { code: "MP", name: "Northern Mariana Islands" },
        { code: "NO", name: "Norway" },
        { code: "OM", name: "Oman" },
        { code: "PK", name: "Pakistan" },
        { code: "PW", name: "Palau" },
        { code: "PS", name: "Palestinian Territory, Occupied" },
        { code: "PA", name: "Panama" },
        { code: "PG", name: "Papua New Guinea" },
        { code: "PY", name: "Paraguay" },
        { code: "PE", name: "Peru" },
        { code: "PH", name: "Philippines" },
        { code: "PN", name: "Pitcairn" },
        { code: "PL", name: "Poland" },
        { code: "PT", name: "Portugal" },
        { code: "PR", name: "Puerto Rico" },
        { code: "QA", name: "Qatar" },
        { code: "RE", name: "Reunion" },
        { code: "RO", name: "Romania" },
        { code: "RU", name: "Russian Federation" },
        { code: "RW", name: "Rwanda" },
        { code: "BL", name: "Saint Barthelemy" },
        { code: "SH", name: "Saint Helena" },
        { code: "KN", name: "Saint Kitts and Nevis" },
        { code: "LC", name: "Saint Lucia" },
        { code: "MF", name: "Saint Martin" },
        { code: "PM", name: "Saint Pierre and Miquelon" },
        { code: "VC", name: "Saint Vincent and the Grenadines" },
        { code: "WS", name: "Samoa" },
        { code: "SM", name: "San Marino" },
        { code: "ST", name: "Sao Tome and Principe" },
        { code: "SA", name: "Saudi Arabia" },
        { code: "SN", name: "Senegal" },
        { code: "RS", name: "Serbia" },
        { code: "CS", name: "Serbia and Montenegro" },
        { code: "SC", name: "Seychelles" },
        { code: "SL", name: "Sierra Leone" },
        { code: "SG", name: "Singapore" },
        { code: "SX", name: "Sint Maarten" },
        { code: "SK", name: "Slovakia" },
        { code: "SI", name: "Slovenia" },
        { code: "SB", name: "Solomon Islands" },
        { code: "SO", name: "Somalia" },
        { code: "ZA", name: "South Africa" },
        { code: "GS", name: "South Georgia and the South Sandwich Islands" },
        { code: "SS", name: "South Sudan" },
        { code: "ES", name: "Spain" },
        { code: "LK", name: "Sri Lanka" },
        { code: "SD", name: "Sudan" },
        { code: "SR", name: "Suriname" },
        { code: "SJ", name: "Svalbard and Jan Mayen" },
        { code: "SZ", name: "Swaziland" },
        { code: "SE", name: "Sweden" },
        { code: "CH", name: "Switzerland" },
        { code: "SY", name: "Syrian Arab Republic" },
        { code: "TW", name: "Taiwan, Province of China" },
        { code: "TJ", name: "Tajikistan" },
        { code: "TZ", name: "Tanzania, United Republic of" },
        { code: "TH", name: "Thailand" },
        { code: "TL", name: "Timor-Leste" },
        { code: "TG", name: "Togo" },
        { code: "TK", name: "Tokelau" },
        { code: "TO", name: "Tonga" },
        { code: "TT", name: "Trinidad and Tobago" },
        { code: "TN", name: "Tunisia" },
        { code: "TR", name: "Turkey" },
        { code: "TM", name: "Turkmenistan" },
        { code: "TC", name: "Turks and Caicos Islands" },
        { code: "TV", name: "Tuvalu" },
        { code: "UG", name: "Uganda" },
        { code: "UA", name: "Ukraine" },
        { code: "AE", name: "United Arab Emirates" },
        { code: "GB", name: "United Kingdom" },
        { code: "US", name: "United States" },
        { code: "UM", name: "United States Minor Outlying Islands" },
        { code: "UY", name: "Uruguay" },
        { code: "UZ", name: "Uzbekistan" },
        { code: "VU", name: "Vanuatu" },
        { code: "VE", name: "Venezuela" },
        { code: "VN", name: "Viet Nam" },
        { code: "VG", name: "Virgin Islands, British" },
        { code: "VI", name: "Virgin Islands, U.s." },
        { code: "WF", name: "Wallis and Futuna" },
        { code: "EH", name: "Western Sahara" },
        { code: "YE", name: "Yemen" },
        { code: "ZM", name: "Zambia" },
        { code: "ZW", name: "Zimbabwe" },
    ];

    let supportsVAT = $derived(!!vatConfig[country]);
    let activePrice = $derived(prices[selectedPlan]);
    let basePrice = $derived(activePrice);
    let vatAmount = $derived(0);

    let isFormComplete = $derived(
        fullName.trim().length > 0 &&
            addressLine1.trim().length > 0 &&
            zipCode.trim().length > 0 &&
            city.trim().length > 0 &&
            (!buysForCompany ||
                (companyName.trim().length > 0 && taxId.trim().length > 0)) &&
            cardNumberComplete &&
            cardExpiryComplete &&
            cardCvcComplete &&
            !isLoading,
    );

    // Initialize Stripe
    onMount(async () => {
        stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
    });

    async function loadPaymentIntent() {
        if (!stripe || isLoading) return;
        isLoading = true;
        elements = null;

        try {
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ plan: selectedPlan }),
            });
            const data = await response.json();
            if (data.error) {
                message = data.error;
                isLoading = false;
                return;
            }

            const { clientSecret } = data;
            const newElements = stripe.elements({
                clientSecret,
                appearance: {
                    theme: "stripe",
                    variables: {
                        fontFamily: "Outfit, system-ui, sans-serif",
                    },
                    rules: {
                        ".Input": {
                            border: "none",
                            padding: "0px",
                            boxShadow: "none",
                        },
                        ".Input:focus": {
                            boxShadow: "none",
                        },
                    },
                },
            });

            const elementStyle = {
                base: {
                    fontSize: "15px",
                    color: "#000000",
                    "::placeholder": { color: "#9ca3af" },
                },
            };

            const numElem = newElements.create("cardNumber", {
                style: elementStyle,
                showIcon: true,
            });
            const expElem = newElements.create("cardExpiry", {
                style: elementStyle,
            });
            const cvcElem = newElements.create("cardCvc", {
                style: elementStyle,
            });

            numElem.on("change", (e) => (cardNumberComplete = e.complete));
            expElem.on("change", (e) => (cardExpiryComplete = e.complete));
            cvcElem.on("change", (e) => (cardCvcComplete = e.complete));

            setTimeout(() => {
                const n = document.getElementById("card-number-new");
                const e = document.getElementById("card-expiry-new");
                const c = document.getElementById("card-cvc-new");
                if (n) {
                    n.innerHTML = "";
                    numElem.mount(n);
                }
                if (e) {
                    e.innerHTML = "";
                    expElem.mount(e);
                }
                if (c) {
                    c.innerHTML = "";
                    cvcElem.mount(c);
                }
            }, 50);

            elements = newElements;
        } catch (e) {
            console.error(e);
            message = "Chyba při inicializaci platby.";
        } finally {
            isLoading = false;
        }
    }

    $effect(() => {
        if (stripe) {
            untrack(() => loadPaymentIntent());
        }
    });

    async function handleSubmit() {
        if (!stripe || !elements || isLoading) return;
        isLoading = true;
        message = "";

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/thankyou`,
            },
        });

        if (error) {
            message = error.message ?? "Nastala chyba při platbě";
        }
        isLoading = false;
    }

    function formatPrice(price: number) {
        return new Intl.NumberFormat("cs-CZ").format(price);
    }
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="min-h-screen w-full flex flex-col lg:flex-row font-inter">
    <!-- MOBILE NAVBAR: FIXED AT TOP -->
    <div
        class="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-[#0B0B0A] border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-lg"
    >
        <img
            src="/assets/addpics/logo.png"
            alt="Logo"
            class="h-6 w-auto object-contain"
        />
        <button
            onclick={() => (showDetails = !showDetails)}
            class="flex items-center gap-2 text-[#008cdd] text-sm font-bold active:opacity-70 transition-all"
        >
            <span>{showDetails ? "Skrýt podrobnosti" : "Podrobnosti"}</span>
            <svg
                class="w-4 h-4 transition-transform {showDetails
                    ? 'rotate-180'
                    : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>

        <!-- Mobile Details Overlay -->
        {#if showDetails}
            <div
                transition:fade={{ duration: 200 }}
                class="fixed inset-0 top-[57px] bg-black/80 backdrop-blur-sm z-[-1]"
                onclick={() => (showDetails = false)}
            ></div>
            <div
                transition:slide
                class="absolute top-[57px] left-0 right-0 bg-[#0B0B0A] border-b border-white/10 p-6 z-[101] shadow-2xl"
            >
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between items-center text-[15px]">
                        <span class="text-white font-medium"
                            >{selectedPlan === "annual" ? "Roční" : "Měsíční"} předplatné</span
                        >
                        <span class="font-bold text-white"
                            >{formatPrice(activePrice)} Kč</span
                        >
                    </div>
                    <div class="h-px bg-white/5 w-full my-1"></div>
                    <div class="flex justify-between text-[13px]">
                        <span class="text-gray-400">Cena bez DPH</span>
                        <span class="text-gray-300"
                            >{formatPrice(basePrice)} Kč</span
                        >
                    </div>
                    <div class="flex justify-between text-[13px]">
                        <span class="text-gray-400">DPH (0 %)</span>
                        <span class="text-gray-300"
                            >{formatPrice(vatAmount)} Kč</span
                        >
                    </div>
                    <div class="h-px bg-white/5 w-full my-1"></div>
                    <div class="flex justify-between items-center pt-2">
                        <span
                            class="text-lg font-black text-white uppercase tracking-tight"
                            >Celkem</span
                        >
                        <span class="text-3xl font-black text-white"
                            >{formatPrice(activePrice)} Kč</span
                        >
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <!-- LEFT SIDE: LANDING PAGE STYLE -->
    <div
        class="w-full lg:w-[50%] bg-[#111116] text-white p-8 pt-24 lg:p-16 flex flex-col relative overflow-hidden"
    >
        <!-- Background Glow -->
        <div
            class="absolute top-0 left-1/3 w-[300px] h-[300px] bg-[#ffffff]/35 blur-[150px] pointer-events-none"
        ></div>

        <!-- Back Link -->

        <div class="max-w-[440px] mx-auto flex flex-col h-full relative z-10">
            <!-- Hero Image with Tag -->
            <div
                class="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-8 shadow-2xl"
            >
                <img
                    src="/assets/addpics/stripe.png"
                    alt="Komunita"
                    class="w-full h-full object-cover"
                />
            </div>

            <div class="flex flex-col gap-2 mb-8">
                <h1 class="text-3xl lg:text-4xl font-black leading-tight">
                    Členství v komunitě
                </h1>
            </div>

            <!-- Benefits List -->
            <div class="flex flex-col gap-4 mb-10">
                {#each ["Přístup na Discord", "Celé mé portfolio", "Náš aktuální pohled na trhy", "Watchlist zajimavých firem", "a všechny další benefity..."] as benefit}
                    <div class="flex items-center gap-3">
                        <div
                            class="w-5 h-5 rounded-full bg-[#8A35C3]/20 flex items-center justify-center shrink-0 border border-[#8A35C3]/30"
                        >
                            <svg
                                class="w-3 h-3 ml-0.5 text-[#8A35C3]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="4"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span class="font-medium text-[15px]">{benefit}</span>
                    </div>
                {/each}
            </div>

            <!-- Plan Selector -->
            <div
                class="mb-4 p-1.5 bg-white/5 border border-white/5 rounded-2xl flex flex-col gap-1 overflow-hidden"
            >
                <button
                    onclick={() => (selectedPlan = "monthly")}
                    class="group relative w-full p-4 rounded-xl transition-all flex items-center justify-between {selectedPlan ===
                    'monthly'
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:bg-white/5'}"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-5 h-5 rounded-full border-2 flex items-center justify-center {selectedPlan ===
                            'monthly'
                                ? 'border-black'
                                : 'border-gray-500'}"
                        >
                            {#if selectedPlan === "monthly"}<div
                                    class="w-2.5 h-2.5 bg-black rounded-full"
                                ></div>{/if}
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="font-black text-base"
                                >{formatPrice(prices.monthly)} Kč
                                <span class="text-[12px] font-medium opacity-60"
                                    >/měsíc</span
                                ></span
                            >
                            <span class="text-[11px] font-semibold opacity-60"
                                >Měsíční předplatné</span
                            >
                        </div>
                    </div>
                </button>
                <button
                    onclick={() => (selectedPlan = "annual")}
                    class="group relative w-full p-4 rounded-xl transition-all flex items-center justify-between {selectedPlan ===
                    'annual'
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:bg-white/5'}"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-5 h-5 rounded-full border-2 flex items-center justify-center {selectedPlan ===
                            'annual'
                                ? 'border-black'
                                : 'border-gray-500'}"
                        >
                            {#if selectedPlan === "annual"}<div
                                    class="w-2.5 h-2.5 bg-black rounded-full"
                                ></div>{/if}
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="font-black text-base"
                                >{formatPrice(prices.annual)} Kč
                                <span class="text-[12px] font-medium opacity-60"
                                    >/rok</span
                                ></span
                            >
                            <span class="text-[11px] font-semibold opacity-60"
                                >Roční předplatné</span
                            >
                        </div>
                    </div>
                    <span
                        class="bg-[#2a4d2e] text-[#4ade80] text-[10px] font-black px-2 py-1 rounded"
                        >Ušetříte 18%</span
                    >
                </button>
            </div>

            <!-- Promo Code Input -->
            <div class="mb-10 relative">
                <input
                    bind:value={promoCode}
                    placeholder="Přidat kód promoakce"
                    class="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-sm text-white placeholder:text-gray-600 outline-none focus:border-white/20 transition-all font-medium"
                />
            </div>

            <!-- Totals & Social Proof -->
            <div
                class="mt-auto flex flex-col gap-8 pt-8 border-t border-white/5"
            >
                {#if showDetails}
                    <div
                        transition:slide
                        class="flex flex-col gap-3 pb-4 border-b border-white/5"
                    >
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-400"
                                >{selectedPlan === "annual"
                                    ? "Roční"
                                    : "Měsíční"} předplatné</span
                            >
                            <span>{formatPrice(activePrice)} Kč</span>
                        </div>
                        <div class="h-px bg-white/5 w-full my-1"></div>
                        <div class="flex justify-between text-[13px]">
                            <span class="text-gray-500">Cena bez DPH</span>
                            <span class="text-gray-400"
                                >{formatPrice(basePrice)} Kč</span
                            >
                        </div>
                        <div class="flex justify-between text-[13px]">
                            <span class="text-gray-500">DPH (0 %)</span>
                            <span class="text-gray-400"
                                >{formatPrice(vatAmount)} Kč</span
                            >
                        </div>
                    </div>
                {/if}

                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-0.5">
                        <span class="text-2xl font-black">Celkem</span>
                        <button
                            onclick={() => (showDetails = !showDetails)}
                            class="hidden lg:block text-[11px] text-[#008cdd] font-bold hover:underline text-left"
                            >{showDetails
                                ? "Skrýt podrobnosti předplatného"
                                : "Zobrazit podrobnosti předplatného"}</button
                        >
                    </div>
                    <span class="text-3xl font-black text-white"
                        >{formatPrice(activePrice)} Kč</span
                    >
                </div>

                <div class="flex -mt-5 items-center">
                    <img
                        src="/assets/addpics/formreview.png"
                        alt="Reviews"
                        class="h-[32px] md:h-[40px] lg:h-[50%] w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- RIGHT SIDE: STRIPE CHECKOUT STYLE -->
    <div
        class="w-full lg:w-[50%] bg-white p-8 lg:p-16 xl:p-24 flex flex-col overflow-y-auto"
    >
        <div class="max-w-[540px] mx-auto w-full flex flex-col gap-10">
            <!-- Contact Info -->
            <div class="flex flex-col gap-4">
                <label class="text-[#30313d] text-sm font-bold">E-mail</label>
                <div class="relative group">
                    <input
                        type="email"
                        bind:value={email}
                        placeholder="email@priklad.cz"
                        class="w-full p-3 bg-white border border-gray-200 rounded-md outline-none focus:border-[#008cdd] focus:ring-4 focus:ring-[#008cdd]/5 transition-all text-[15px] font-medium placeholder:text-gray-300"
                    />
                </div>
            </div>

            <!-- Payment Details -->
            <div class="flex flex-col gap-4">
                <label class="text-[#30313d] text-sm font-bold"
                    >Platební údaje</label
                >
                <div
                    class="flex flex-col border border-gray-200 rounded-md overflow-hidden bg-white shadow-xs"
                >
                    <div class="p-3 border-b border-gray-200">
                        <div id="card-number-new"></div>
                    </div>
                    <div class="flex">
                        <div class="w-1/2 p-3 border-r border-gray-200">
                            <div id="card-expiry-new"></div>
                        </div>
                        <div class="w-1/2 p-3">
                            <div id="card-cvc-new"></div>
                        </div>
                    </div>
                </div>
                <input
                    bind:value={fullName}
                    placeholder="Jméno na kartě"
                    class="w-full p-3 bg-white border border-gray-200 rounded-md outline-none focus:border-[#008cdd] transition-all text-[15px] font-medium placeholder:text-gray-300"
                />
            </div>

            <!-- Billing Address -->
            <div class="flex flex-col gap-4">
                <label class="text-[#30313d] text-sm font-bold"
                    >Fakturační adresa</label
                >
                <div
                    class="flex flex-col border border-gray-200 rounded-md overflow-hidden bg-white shadow-xs"
                >
                    <div class="border-b border-gray-200 relative">
                        <button
                            type="button"
                            onclick={() => (isCountryDropdownOpen = !isCountryDropdownOpen)}
                            class="w-full p-3 bg-white text-left outline-none text-[15px] font-medium cursor-pointer flex items-center justify-between"
                        >
                            <div class="flex items-center gap-3 text-[#30313d]">
                                {#if country}
                                    {@const selectedCountry = countries.find(c => c.name === country)}
                                    {#if selectedCountry}
                                        <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.code} class="w-5 h-auto object-contain rounded-[2px] shadow-xs" />
                                    {/if}
                                {/if}
                                <span>{country}</span>
                            </div>
                            <svg class="w-4 h-4 text-gray-400 transition-transform {isCountryDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {#if isCountryDropdownOpen}
                            <!-- Backdrop pro zavření kliknutím mimo -->
                            <div class="fixed inset-0 z-[190] bg-transparent" onclick={() => isCountryDropdownOpen = false}></div>
                            <!-- Samotný dropdown -->
                            <div class="absolute top-full left-0 right-0 max-h-[250px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-xl z-[200] mt-1 py-1">
                                {#each countries as c}
                                    <button
                                        type="button"
                                        onclick={() => {
                                            country = c.name;
                                            isCountryDropdownOpen = false;
                                        }}
                                        class="w-full px-4 py-2.5 text-left text-[14px] font-medium hover:bg-gray-50 flex items-center gap-3 transition-colors {country === c.name ? 'bg-gray-50 text-[#008cdd]' : 'text-[#30313d]'}"
                                    >
                                        <img src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`} alt={c.code} class="w-5 h-auto object-contain rounded-[2px] shadow-xs" />
                                        <span>{c.name}</span>
                                    </button>
                                {/each}
                            </div>
                        {/if}
                    </div>
                    <div class="border-b border-gray-200">
                        <input
                            bind:value={addressLine1}
                            placeholder="Adresa (ulice a č.p.)"
                            class="w-full p-3 bg-white outline-none text-[15px] font-medium placeholder:text-gray-300"
                        />
                    </div>
                    <div>
                        <input
                            bind:value={addressLine2}
                            placeholder="Apartmán, byt (volitelné)"
                            class="w-full p-3 bg-white outline-none text-[15px] font-medium placeholder:text-gray-300"
                        />
                    </div>
                    <div class="flex border-t border-gray-200">
                        <div class="w-1/2 border-r border-gray-200">
                            <input
                                bind:value={zipCode}
                                placeholder="PSČ"
                                class="w-full p-3 bg-white outline-none text-[15px] font-medium placeholder:text-gray-300"
                            />
                        </div>
                        <div class="w-1/2">
                            <input
                                bind:value={city}
                                placeholder="Město"
                                class="w-full p-3 bg-white outline-none text-[15px] font-medium placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Company Info Section -->
            <div class="flex flex-col gap-4">
                <button
                    onclick={() => (buysForCompany = !buysForCompany)}
                    class="flex items-center gap-2 text-sm text-[#008cdd] font-semibold hover:underline w-fit"
                >
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            d={buysForCompany ? "M20 12H4" : "M12 4v16m8-8H4"}
                        />
                    </svg>
                    {buysForCompany
                        ? "Zrušit nákup na firmu"
                        : "Nakupuji na firmu"}
                </button>

                {#if buysForCompany}
                    <div transition:slide class="flex flex-col gap-3">
                        <input
                            bind:value={companyName}
                            placeholder="Název firmy"
                            class="w-full p-3 bg-white border border-gray-200 rounded-md outline-none focus:border-[#008cdd] transition-all text-[15px] font-medium placeholder:text-gray-300"
                        />
                        <input
                            bind:value={taxId}
                            placeholder={supportsVAT
                                ? vatConfig[country].placeholder
                                : "DIČ (např. 12345678)"}
                            class="w-full p-3 bg-white border border-gray-200 rounded-md outline-none focus:border-[#008cdd] transition-all text-[15px] font-medium placeholder:text-gray-300"
                        />
                    </div>
                {/if}
            </div>

            <!-- Action Button -->
            <div class="flex flex-col gap-4 mt-4">
                <button
                    onclick={handleSubmit}
                    disabled={!isFormComplete || isLoading}
                    class="w-full py-3.5 bg-[#FFC300] hover:bg-[#FFC300]/90 disabled:opacity-50 disabled:cursor-not-allowed text-black text-lg font-bold rounded-md shadow-sm transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                    {#if isLoading}
                        <svg
                            class="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    {/if}
                    {isLoading
                        ? "Zpracovávám..."
                        : "Potvrdit objednávku"}
                </button>

                <!-- Stripe Powered By -->
                <div class="flex items-center justify-center mt-2 -mb-1 opacity-70">
                    <span class="text-[13px] font-medium tracking-tight text-[#0a2540] mr-1.5">Využívá technologii</span>
                    <svg viewBox="54 36 360 150" xmlns="http://www.w3.org/2000/svg" class="w-[52px] h-auto text-[#0a2540]">
                        <g fill="currentColor">
                            <path d="M414,113.4c0-25.6-12.4-45.8-36.1-45.8c-23.8,0-38.2,20.2-38.2,45.6c0,30.1,17,45.3,41.4,45.3 c11.9,0,20.9-2.7,27.7-6.5v-20c-6.8,3.4-14.6,5.5-24.5,5.5c-9.7,0-18.3-3.4-19.4-15.2h48.9C413.8,121,414,115.8,414,113.4z M364.6,103.9c0-11.3,6.9-16,13.2-16c6.1,0,12.6,4.7,12.6,16H364.6z"/>
                            <path d="M301.1,67.6c-9.8,0-16.1,4.6-19.6,7.8l-1.3-6.2h-22v116.6l25-5.3l0.1-28.3c3.6,2.6,8.9,6.3,17.7,6.3 c17.9,0,34.2-14.4,34.2-46.1C335.1,83.4,318.6,67.6,301.1,67.6z M295.1,136.5c-5.9,0-9.4-2.1-11.8-4.7l-0.1-37.1 c2.6-2.9,6.2-4.9,11.9-4.9c9.1,0,15.4,10.2,15.4,23.3C310.5,126.5,304.3,136.5,295.1,136.5z"/>
                            <polygon points="223.8,61.7 248.9,56.3 248.9,36 223.8,41.3"/>
                            <rect x="223.8" y="69.3" width="25.1" height="87.5"/>
                            <path d="M196.9,76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7,15.9-6.3,19-5.2v-23C214.5,68.1,202.8,65.9,196.9,76.7z"/>
                            <path d="M146.9,47.6l-24.4,5.2l-0.1,80.1c0,14.8,11.1,25.7,25.9,25.7c8.2,0,14.2-1.5,17.5-3.3V135 c-3.2,1.3-19,5.9-19-8.9V90.6h19V69.3h-19L146.9,47.6z"/>
                            <path d="M79.3,94.7c0-3.9,3.2-5.4,8.5-5.4c7.6,0,17.2,2.3,24.8,6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6 C67.5,67.6,54,78.2,54,95.9c0,27.6,38,23.2,38,35.1c0,4.6-4,6.1-9.6,6.1c-8.3,0-18.9-3.4-27.3-8v23.8c9.3,4,18.7,5.7,27.3,5.7 c20.8,0,35.1-10.3,35.1-28.2C117.4,100.6,79.3,105.9,79.3,94.7z"/>
                        </g>
                    </svg>
                </div>

                <p class="text-center text-[13px] text-gray-400">
                    Odesláním platby souhlasíte s <a
                        href="/obchodni-podminky"
                        class="underline hover:text-gray-600 transition-colors"
                        >obchodními podmínkami</a
                    > a <a
                        href="/zasady-ochrany-osobnich-udaju"
                        class="underline hover:text-gray-600 transition-colors"
                        >zásadami ochrany osobních údajů</a
                    >.
                </p>

                {#if message}
                    <div
                        transition:fade
                        class="p-4 bg-red-50 text-red-600 text-sm font-medium rounded-md border border-red-100 text-center"
                    >
                        {message}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        background: #ffffff;
        color: black;
    }
    :global(.StripeElement) {
        width: 100%;
    }
</style>
