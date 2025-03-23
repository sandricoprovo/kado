<script lang="ts">
	import type { Children } from '$lib/types';

	type CardContainerProps = {
		content: Children;
		title?: Children;
		reverseTitle?: Children;
		isEmpty?: boolean;
	};

	let { title, content, reverseTitle, isEmpty = false }: CardContainerProps = $props();
</script>

<article class="card">
	{#if title}
		{@render title()}
	{/if}
	<div class={`container ${isEmpty ? 'container--empty' : ''}`}>
		{@render content()}
	</div>
	{#if title}
		{@render reverseTitle?.()}
	{/if}
</article>

<style lang="postcss">
	.card {
		border: 2px solid green;
		width: clamp(280px, 100vw, 340px);
		height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		flex: 1;
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, 30px);
		width: 144px; /* (30px * 4) + (8px * 3 gaps) */
		grid-auto-rows: min-content;
		gap: 8px;
	}

	.container--empty {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
	}
</style>
