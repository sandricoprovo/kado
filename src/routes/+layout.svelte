<script lang="ts">
	import '../styles/main.css';
	import Header from '$lib/components/common/Header/Header.svelte';
	import Footer from '$lib/components/common/Footer/Footer.svelte';

	const { children } = $props();
</script>

<div class="layout">
	<Header />
	{@render children?.()}
	<Footer />
</div>

<style lang="postcss">
	.layout {
		text-align: center;
		min-height: 100vh;
		max-width: 1960px;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		justify-content: center;
		gap: var(--space-300);
	}
</style>
