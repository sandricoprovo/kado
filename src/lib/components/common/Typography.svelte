<script lang="ts">
	import type { Children } from '$lib/types';

	type TypographyProps = {
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		weight?: 'regular' | 'medium' | 'bold';
		color?: string;
		classes?: string;
		children: Children;
	};

	const { as = 'p', children, weight = 'regular', classes = '' }: TypographyProps = $props();

	const weightVariant = {
		regular: '400',
		medium: '500',
		bold: '600'
	};
	const classList = classes ? ` ${classes}` : '';
</script>

<svelte:element this={as} class={`typography${classList} fvs-${weightVariant[weight]}`}>
	{@render children()}
</svelte:element>

<style lang="postcss">
</style>
