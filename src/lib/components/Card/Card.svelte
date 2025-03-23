<script lang="ts">
	import type { Ranks, Suits } from '$lib/types';
	import CardContainer from './elements/CardContainer.svelte';

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

<CardContainer>
	{#snippet title()}
		<p class="title">{rank} of {suit}</p>
	{/snippet}
	{#snippet content()}
		{#each Array.from({ length: getNumberOfEmblems() }) as _}
			<div class="emblem"></div>
		{/each}
	{/snippet}
	{#snippet reverseTitle()}
		<p class="title rotate">{rank} of {suit}</p>
	{/snippet}
</CardContainer>

<style lang="postcss">
	.title {
		padding-block: 4px;
	}

	.emblem {
		border-radius: 100%;
		height: 30px;
		background-color: black;
	}

	.rotate {
		rotate: 180deg;
	}
</style>
