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
		grid-template-columns: repeat(auto-fit, 50px);
		width: 300px;
		gap: var(--space-500);
	}

	:global(.container > *:last-child:nth-child(3n-2)) {
		grid-column: 2;
	}

	.container--empty {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
	}
</style>
