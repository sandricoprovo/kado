<script lang="ts">
	import '../styles/main.css';

	const { children } = $props();
</script>

<div>
	<header></header>
	{@render children?.()}
	<footer></footer>
</div>

<style lang="postcss">
</style>
