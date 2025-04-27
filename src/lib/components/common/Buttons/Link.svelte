<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import Typography from '../Typography.svelte';
	import type { Children } from '$lib/types';

	interface LinkProps extends HTMLAnchorAttributes {
		children: Children;
	}

	const { href, children, ...rest }: LinkProps = $props();
</script>

<a {href} rel="noopener noreferrer" {...rest} class="link">
	<Typography as="span">{@render children?.()}</Typography>
</a>

<style lang="postcss">
	.link {
		--translate-transition: translate 200ms cubic-bezier(0.45, 0.05, 0.55, 0.95);

		color: inherit;
		text-decoration: none;
		position: relative;
		transition: var(--translate-transition);

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			translate: 0 8px;
			transition:
				var(--translate-transition),
				opacity 100ms linear;
			opacity: 0;
			pointer-events: none;
			border-radius: var(--br-sm);
			background-color: var(--fg);
		}

		@media (hover: hover) {
			&:hover {
				translate: 0 -2px;

				&::after {
					translate: 0 0;
					opacity: 1;
				}
			}
		}
	}
</style>
