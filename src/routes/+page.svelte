<script lang="ts">
	export const prerender = true;

	import Header from '$lib/components/Header.svelte';
	import Summary from '$lib/components/portfolio/Summary.svelte';
	import TechnicalSkills from '$lib/components/portfolio/TechnicalSkills.svelte';
	import Education from '$lib/components/portfolio/Education.svelte';
	import Projects from '$lib/components/portfolio/Projects.svelte';
	import References from '$lib/components/portfolio/References.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div id="flex-box">
	<div id="portfolio">
		<Summary />
		<TechnicalSkills />
		<Education />
		<Projects />
		<References />
	</div>
</div>
<Footer />

<style>
	body {
		overflow-y: hidden;
	}

	/* Add styles here, for example: */
	#flex-box {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}

	#portfolio {
		max-width: 1200px;
		width: 100%;
	}
</style>
