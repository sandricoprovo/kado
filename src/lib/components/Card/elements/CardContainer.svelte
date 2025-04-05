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
	{@render title?.()}
	<div class={`container ${isEmpty ? 'container--empty' : ''}`}>
		{@render content()}
	</div>
	{@render reverseTitle?.()}
</article>

<style lang="postcss">
	.card {
		border: 2px solid var(--fg);
		border-radius: var(--br);
		width: clamp(280px, 100vw, 340px);
		height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-100);
	}

	.container {
		flex: 1;
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, 30px);
		width: 144px; /* (30px * 4) + (8px * 3 gaps) */
		grid-auto-rows: min-content;
		gap: var(--space-500);
	}

	.container--empty {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
	}
</style>
