<header>
	<h1>Portfolio</h1>
	<nav>
		<a href="/">Portfolio</a>
        <a href="/contact">Contact Me</a>
	</nav>
</header>

<style>
    * {
        box-sizing: border-box;
    }

	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2.5rem;
		background-color: #f9f9f9;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
	}

	h1 {
		font-size: 32px;
		color: #2c2c2c;
		font-weight: 700;
		margin: 0;
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		font-size: 18px;
		color: #0077cc;
		text-decoration: none;
		transition: color 0.3s ease;
		padding: 5px 10px;
		border-radius: 5px;
		position: relative;
	}

	nav a:hover {
		color: #0055a5;
		background-color: rgba(0, 119, 204, 0.1); /* Adds a subtle highlight on hover */
	}

	nav a::before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #0077cc;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	nav a:hover::before {
		opacity: 1;
	}
</style>