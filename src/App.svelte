<script>
	export let name;
</script>

<main class="test">
	<h1>Hello {name}!</h1>
	<p class="test-p">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style type="text/scss">
	.test {
		text-align: center;
		padding: 1em;
		margin: 0 auto;

		&-p {
			width: 240px;
			margin: auto;
		}
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>