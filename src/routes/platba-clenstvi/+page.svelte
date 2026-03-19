<script lang="ts">
    import { page } from "$app/stores";
    import StripePayment from "../../components/StripePayment.svelte";

    let planFromUrl = $derived(
        $page.url.searchParams.get("plan") as "monthly" | "annual" | null,
    );
    let selectedPlan: "monthly" | "annual" = $derived(
        planFromUrl === "annual" ? "annual" : "monthly",
    );
</script>

<div class="min-h-screen w-full">
    <StripePayment {selectedPlan} />
</div>
