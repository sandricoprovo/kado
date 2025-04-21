<script lang="ts">
	import type { Children } from '$lib/types';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface ButtonProps extends HTMLButtonAttributes {
		children: Children;
		size?: 'small' | 'base' | 'large';
	}

	const { children, size = 'base', ...rest }: ButtonProps = $props();

	const sizeClasses = {
		small: 'sm',
		base: 'base',
		large: 'lg'
	};
</script>

<button {...rest} class={`button button--${sizeClasses[size]}`}>
	{@render children?.()}
</button>

<style lang="postcss">
	.button {
		--minWidth: 180px;
		--maxWidth: 240px;

		border: none;
		min-width: var(--minWidth);
		max-width: var(--maxWidth);
		border-radius: var(--br-sm);
		cursor: pointer;
	}

	.button--sm {
		--minWidth: 120px;
		--maxWidth: 160px;

		:global(*) {
			--fl: -1;
			font-variation-settings: var(--fw-600);
		}

		padding: var(--space-100) var(--space-150);
	}

	.button--base {
		padding: var(--space-150) var(--space-250);
	}
</style>
