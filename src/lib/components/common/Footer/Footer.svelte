<script lang="ts">
	import Link from '../Buttons/Link.svelte';
	import Typography from '../Typography.svelte';
</script>

<footer class="footer">
	<Typography>Sandrico Provo © 2025</Typography>
	<Link href="https://github.com/sandricoprovo/shuffle-cards" target="_blank">GitHub</Link>
</footer>

<style lang="postcss">
	.footer {
		:global(& *) {
			--fl: -1;
			font-variation-settings: var(--fw-500);
		}

		margin-block-start: var(--space-400);
		padding: var(--space-200) var(--space-300);

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--space-400);
	}
</style>
