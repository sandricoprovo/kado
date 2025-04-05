<script lang="ts">
	import type { Ranks, Suits } from '$lib/types';
	import Typography from '../common/Typography.svelte';
	import CardContainer from './elements/CardContainer.svelte';
	import { getIconsNumber } from './helpers/getIconsNumber';

	interface CardProps {
		suit: Suits;
		rank: Ranks;
	}

	const { suit, rank }: CardProps = $props();
</script>

<CardContainer>
	{#snippet title()}
		<Typography>{rank} of {suit}</Typography>
	{/snippet}
	{#snippet content()}
		{#each Array.from({ length: getIconsNumber(rank) }) as item}
			<div class="emblem">{item}</div>
		{/each}
	{/snippet}
	{#snippet reverseTitle()}
		<Typography classes="card--rotate">{rank} of {suit}</Typography>
	{/snippet}
</CardContainer>

<style lang="postcss">
	.emblem {
		border-radius: 100%;
		height: 30px;
		background-color: black;
	}

	:global(.card--rotate) {
		rotate: 180deg;
	}
</style>
