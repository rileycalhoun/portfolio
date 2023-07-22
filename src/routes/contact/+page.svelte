<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Form from '$lib/components/contact/Form.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		document.body.classList.add('no-scroll');
	});

	onDestroy(() => {
		document.body.classList.remove('no-scroll');
	});
</script>

<div id="container">
	<Header />
	<div id="content">
		<Form />
	</div>
	<Footer />
</div>

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
