<script lang="ts">
	import '../styles/main.css';
	import Header from '$lib/components/common/Header/Header.svelte';

	const { children } = $props();
</script>

<div class="layout">
	<Header />
	{@render children?.()}
	<footer>
		<p>Footer</p>
	</footer>
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		justify-content: center;
		text-align: center;
		min-height: 100vh;
	}
</style>
