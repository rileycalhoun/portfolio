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

<html lang="en">
	<head>
		<title>Portfolio | Riley Calhoun</title>
		<meta name="description" content="Riley Calhoun's portfolio." />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
    <Header />
	<body>
		<div id="flex-box">
			<div id="portfolio">
				<Summary />
				<TechnicalSkills />
				<Education />
				<Projects />
                <References />
			</div>
		</div>
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