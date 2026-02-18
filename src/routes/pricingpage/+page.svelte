<script lang="ts">
    import Hero from "../../pricingpage/hero.svelte";
    import Faq from "../../landingpage/faq.svelte";
    import Footer from "../../pricingpage/footer.svelte";
    import Modal from "../../components/modal.svelte";

    let isModalOpen = $state(false);
</script>

<main>
    <Hero openModal={() => (isModalOpen = true)} />
    <Faq />
    <Footer />
</main>

<Modal bind:isOpen={isModalOpen} />
