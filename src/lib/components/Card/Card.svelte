<script lang="ts">
	import type { Card } from '$lib/types';
	import Typography from '../common/Typography.svelte';
	import { CardContainer, SuitIcon } from './elements';
	import { getIconsNumber } from './helpers/getIconsNumber';

	const { suit, rank, label }: Card = $props();
	const iconsNumber = $derived(getIconsNumber(rank));
</script>

<CardContainer>
	{#snippet title()}
		<Typography>{rank} of {label}</Typography>
	{/snippet}
	{#snippet content()}
		{#each { length: iconsNumber }}
			<SuitIcon {suit} />
		{/each}
	{/snippet}
	{#snippet reverseTitle()}
		<Typography classes="card--rotate">{rank} of {label}</Typography>
	{/snippet}
</CardContainer>

<style lang="postcss">
	:global(.card--rotate) {
		rotate: 180deg;
	}
</style>
