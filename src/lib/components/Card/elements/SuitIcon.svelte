<!-- Icon SVG code sourced from https://lucide.dev/. Refer to license at /THIRD-PART-NOTICES.md -->
<script lang="ts">
	import type { Suits } from '$lib/types';

	const ICON_SIZE = 40;

	type SuitProps = {
		suit?: Suits;
	};

	const { suit }: SuitProps = $props();
</script>

{#snippet suitIcon(suit: Suits)}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={ICON_SIZE}
		height={ICON_SIZE}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="svg"
	>
		{#if suit === 'clubs'}
			<path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
			<path d="M12 17.66L12 22" />
		{:else if suit === 'diamonds'}
			<path
				d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
			/>
		{:else if suit === 'hearts'}
			<path
				d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
			/>
		{:else}
			<path
				d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
			/>
			<path d="M12 18v4" />
		{/if}
	</svg>
{/snippet}

{#if suit}
	{@render suitIcon(suit)}
{:else}
	<span class="fallback-suit"></span>
{/if}

<style lang="postcss">
	.svg {
		margin: auto;
	}

	.fallback-suit {
		border-radius: 100%;
		height: 30px;
		background-color: black;
	}
</style>
