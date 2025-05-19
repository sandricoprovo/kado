<script lang="ts">
	import type { Children } from '$lib/types';

	type ButtonGroupProps = {
		children: Children;
	};

	const { children }: ButtonGroupProps = $props();
</script>

<div class="button__group">
	{@render children?.()}
</div>

<style lang="postcss">
	.button__group {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--space-100);
	}

	:global(.button__group > button, .button__group > div) {
		flex: 1;
		align-self: stretch;
	}
</style>
