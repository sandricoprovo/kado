<script lang="ts">
	import type { Children } from '$lib/types';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface ButtonProps extends HTMLButtonAttributes {
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
		--maxWidth: 240px;

		border: none;
		max-width: var(--maxWidth);
		border-radius: var(--br-sm);
		cursor: pointer;
		width: 100%;

		&:disabled {
			cursor: not-allowed;
			pointer-events: none;
			color: lightgray;
		}
	}

	.button--sm {
		--maxWidth: 160px;

		:global(& *) {
			--fl: -1;
			font-variation-settings: var(--fw-600);
		}

		padding: var(--space-100) var(--space-150);
	}

	.button--base {
		padding: var(--space-150) var(--space-250);
	}
</style>
