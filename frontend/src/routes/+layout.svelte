<script>
	import Header from './Header.svelte';
	import "./style.css";
</script>

<div class="app bg-neutral-800 text-white">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
