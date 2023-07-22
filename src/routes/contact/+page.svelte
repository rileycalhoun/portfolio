<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import Form from '$lib/components/contact/Form.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		if (browser) {
			document.body.classList.add('no-scroll');
		}
	});

	onDestroy(() => {
		if (browser) {
			document.body.classList.remove('no-scroll');
		}
	});
</script>

<div id="container">
	<Header />
	<div id="content">
		<Form />
	</div>
	<Footer />
</div>

<MetaTags
	title="Contact | Riley Calhoun"
	description="The contact page of Riley Calhoun's portfolio website."
/>

<style>
	#container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	#content {
		flex: 1;
		padding: 2rem;
	}

	/* This is a global style that will be applied to the body */
	/* when this component is mounted */
	:global(body.no-scroll) {
		overflow-y: hidden;
	}
</style>
