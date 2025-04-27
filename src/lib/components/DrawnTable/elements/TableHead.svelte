<script lang="ts">
	import type { Children } from '$lib/types';
	import type { HTMLThAttributes } from 'svelte/elements';

	type TableHeadProps = HTMLThAttributes & {
		classes?: string;
		children: Children;
	};

	const { classes = '', children, ...rest }: TableHeadProps = $props();
	const classList = classes ? ` ${classes}` : '';
</script>

<th class={classList} {...rest}>
	{@render children?.()}
</th>

<style lang="postcss">
	.table__header {
		z-index: 10;
	}
</style>
