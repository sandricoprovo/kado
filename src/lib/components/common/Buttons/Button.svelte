<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const { children, ...rest }: HTMLButtonAttributes = $props();
</script>

<button {...rest} class="button">
	{@render children?.()}
</button>

<style lang="postcss">
	.button {
		border: none;
		padding: var(--space-150) var(--space-250);
		min-width: 180px;
		max-width: 240px;
		border-radius: var(--br-sm);
	}
</style>
