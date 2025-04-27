<script lang="ts">
	import type { Children } from '$lib/types';

	type TableRowProps = {
		classes?: string;
		children: Children;
	};

	const { children, classes, ...rest }: TableRowProps = $props();
	const classList = classes ? ` ${classes}` : '';
</script>

<tr class={classList} {...rest}>
	{@render children?.()}
</tr>

<style lang="postcss">
</style>
