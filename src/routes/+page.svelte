<script lang="ts">
	import type { SubmitFunction } from './$types.js';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/common/Buttons/Button.svelte';
	import { CardGame } from '$lib/state/CardGame.svelte.js';

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

<main>
	<h1>ShuffleDeck</h1>

	{#if game.currentCard}
		<section>
			<div>
				<p>{game.currentCard.rank}</p>
				<p>{game.currentCard.label}</p>
			</div>
			<p>{game.cardsRemaining}</p>
		</section>
	{/if}

	{#if game.hasCards}
		<section>
			<Button type="button" onclick={game.drawCard}>Draw</Button>
		</section>
	{/if}

	{#if game.isDirty}
		<Button onclick={handleGameReset}>Reset</Button>
	{:else}
		<form method="POST" use:enhance={handleDeckFormSubmit}>
			<Button formaction="?/getDeck" type="submit">Get New Deck</Button>
			<Button formaction="?/getDeck&shuffled=true" type="submit">Get Shuffled Deck</Button>
		</form>
	{/if}

	<section>
		<h2>Drawn Cards</h2>
		{#each game.cardsDrawn as card}
			<p>{`${card.rank} of ${card.label}`}</p>
		{/each}
	</section>
</main>
