<script lang="ts">
	import Hero from "../landingpage/hero.svelte";
	import Testimonials from "../landingpage/testimonials.svelte";
	import Packages from "../landingpage/packages.svelte";
	import Strategy from "../landingpage/strategy.svelte";
	import Experience from "../landingpage/experience.svelte";
	import Analytics from "../landingpage/analytics.svelte";
	import Community from "../landingpage/community.svelte";
	import Bonus from "../landingpage/bonus.svelte";
	import Review from "../landingpage/review.svelte";
	import Faq from "../landingpage/faq.svelte";
	import Teach from "../landingpage/teach.svelte";
	import Footer from "../landingpage/footer.svelte";
	import Modal from "../components/modal.svelte";

	let isModalOpen = $state(false);
</script>

<Hero />
<Testimonials />
<Packages openModal={() => (isModalOpen = true)} />
<Strategy />
<Experience />
<Analytics />
<Community />
<Bonus />
<Review openModal={() => (isModalOpen = true)} />
<Faq />
<Teach />
<Footer />

<Modal bind:isOpen={isModalOpen} />
