<script lang="ts">
	import type { Ranks, Suits } from '$lib/server/services/CardsService/types';

	interface CardProps {
		suit: Suits;
		rank: Ranks;
	}

	const { suit, rank }: CardProps = $props();

	function getNumberOfEmblems() {
		if (['Ace', 'King', 'Queen', 'Jack'].includes(rank)) {
			return 1;
		} else {
			return Number(rank);
		}
	}
</script>

<article class="card">
	<p class="title">{rank} of {suit}</p>
	<div class="container">
		{#each Array.from({ length: getNumberOfEmblems() }) as _}
			<div class="emblem"></div>
		{/each}
	</div>
	<p class="title rotate">{rank} of {suit}</p>
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

	.title {
		padding-block: 4px;
	}

	.emblem {
		border-radius: 100%;
		/* width: 30px; */
		height: 30px;
		background-color: black;
	}

	.rotate {
		rotate: 180deg;
	}
</style>
