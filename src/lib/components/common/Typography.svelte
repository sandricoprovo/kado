<script lang="ts">
	import type { Children } from '$lib/types';

	interface TypographyProps {
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
		weight?: 'regular' | 'medium' | 'bold';
		testId?: string;
		classes?: string;
		children: Children;
	}

	const {
		as = 'p',
		children,
		weight = 'regular',
		classes = '',
		testId = ''
	}: TypographyProps = $props();

	const weightVariant = {
		regular: '400',
		medium: '500',
		bold: '600'
	};

	const classList = classes ? ` ${classes}` : '';

	const customAttributes = {
		...{ ...(testId ? { 'data-testid': testId } : {}) }
	};
</script>

<svelte:element
	this={as}
	class={`typography${classList} fvs-${weightVariant[weight]}`}
	{...customAttributes}
>
	{@render children()}
</svelte:element>

<style lang="postcss">
</style>
