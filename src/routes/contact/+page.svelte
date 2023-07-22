<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Form from '$lib/components/contact/Form.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<html lang="en">
	<head>
		<title>Contact | Riley Calhoun</title>
		<meta name="description" content="Riley Calhoun's portfolio." />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<Header />
	<body>
		<Form />
	</body>
    <Footer />
</html>

<style>
	html, body {
		margin: 0px;
		padding: 0px;
	}

	body {
		padding-top: calc(2.5rem);
        min-height: 100vh;
        overflow-y: hidden;
	}
</style>
