<script lang="ts">
	import type { SubmitFunction } from './$types.js';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/common/Buttons/Button.svelte';
	import { CardGame } from '$lib/state/CardGame.svelte.js';
	import Card from '$lib/components/Card/Card.svelte';
	import DrawnTable from '$lib/components/DrawnTable/DrawnTable.svelte';
	import EmptyCard from '$lib/components/Card/EmptyCard.svelte';

	const game = new CardGame();

	const handleDeckFormSubmit: SubmitFunction = () => {
		return ({ result, update }) => {
			if (result?.type !== 'success') {
				update();
				return;
			}

			if (result.data?.error || !result.data?.deck) {
				// TODO: handle error
				return;
			}

			game.addDeck(result.data.deck);
		};
	};

	function handleGameReset() {
		// TODO: confirm reset
		game.reset();
	}
</script>

<main class="main">
	<section class="controls">
		{#if game.currentCard}
			<section>
				<h1 class="header">
					<span>{game.currentCard.rank} of {game.currentCard.label}</span>
				</h1>
				{#if game.cardsRemaining >= 1}
					<p class="copy">Cards Remaining: {game.cardsRemaining}</p>
				{:else}
					<p class="copy">No cards Left / {game.cardsRemaining} Remaining</p>
				{/if}
			</section>
			<div class="cards-container">
				<Card rank={game.currentCard.rank} suit={game.currentCard.suit} />
			</div>
		{:else}
			<section>
				<h1 class="header">
					<span>Welcome!</span>
				</h1>
				<p class="copy">Pick an ordered or shuffled deck to get started.</p>
			</section>
			<EmptyCard />
		{/if}

		{#if game.isDirty}
			<section>
				<Button type="button" onclick={game.drawCard}>Draw</Button>
				<Button onclick={handleGameReset}>Reset</Button>
			</section>
		{:else}
			<form method="POST" use:enhance={handleDeckFormSubmit}>
				<Button formaction="?/getDeck" type="submit">Get Ordered Deck</Button>
				<Button formaction="?/getDeck&shuffled=true" type="submit">Get Shuffled Deck</Button>
			</form>
		{/if}
	</section>

	<section class="drawn">
		<DrawnTable
			title={`# Cards Drawn: ${game?.cardsDrawn?.length ?? 0}`}
			drawnCards={game.cardsDrawn}
		/>
	</section>
</main>

<style lang="postcss">
	.main {
		--cols: 1fr;

		margin: 0 auto;
		container-type: inline-size;
		container-name: main;
		display: grid;
		grid-template-columns: var(--cols);
		justify-content: center;
		gap: 20px;
		width: 80vw;
		margin-bottom: 40px;

		@media screen and (width > 820px) {
			& {
				--cols: repeat(2, 1fr);
				align-items: center;
			}
		}
	}

	.header {
		font-weight: 700;
		font-size: 49px;
	}

	.copy {
		font-size: 14px;
	}

	.controls {
		min-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		@media screen and (width > 820px) {
			& {
				min-height: auto;
			}
		}
	}

	.drawn {
		max-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
</style>
