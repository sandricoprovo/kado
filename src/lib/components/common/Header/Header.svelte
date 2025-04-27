<script>
	import Button from '../Buttons/Button.svelte';
	import Typography from '../Typography.svelte';
</script>

<header class="header">
	<p class="content">Shuffle up</p>
	<Button size="small" class="button">
		<Typography>Buy Me a Coffee</Typography>
	</Button>
</header>

<style lang="postcss">
	.header {
		padding: var(--space-200) var(--space-200) 0 var(--space-200);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.content {
		font-size: 12px;
		font-variation-settings: var(--fw-600);
	}
</style>
