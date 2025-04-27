<script lang="ts">
	import type { SubmitFunction } from './$types.js';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/common/Buttons/Button.svelte';
	import { CardGame } from '$lib/state/CardGame.svelte.js';
	import Card from '$lib/components/Card/Card.svelte';
	import DrawnTable from '$lib/components/DrawnTable/DrawnTable.svelte';
	import EmptyCard from '$lib/components/Card/EmptyCard.svelte';
	import Typography from '$lib/components/common/Typography.svelte';
	import ButtonGroup from '$lib/components/common/Buttons/ButtonGroup.svelte';

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
		game.reset();
	}
</script>

<main class="main">
	<section class="card-area">
		{#if game.currentCard}
			<section>
				<Typography as="h2" weight="bold">
					{game.currentCard.rank} of {game.currentCard.label}
				</Typography>
				<Typography>
					{#if game.remainingCount >= 1}
						Drawn: {game.drawnCount} / Remaining: {game.remainingCount}
					{:else}
						No cards Left / {game.remainingCount} Remaining
					{/if}
				</Typography>
			</section>
			<Card {...game.currentCard} />
		{:else}
			<section>
				<Typography as="h2" weight="bold" testId="title">Welcome!</Typography>
				<Typography>Choose an ordered or shuffled deck to begin.</Typography>
			</section>
			<EmptyCard />
		{/if}
		{#if game.isDirty}
			<ButtonGroup>
				<Button onclick={handleGameReset}>New Game</Button>
				<Button onclick={game.drawCard}>Draw Card</Button>
			</ButtonGroup>
		{:else}
			<form class="form" method="POST" use:enhance={handleDeckFormSubmit}>
				<ButtonGroup>
					<Button formaction="?/getDeck" type="submit">New Game</Button>
					<Button formaction="?/getDeck&shuffled=true" type="submit">Shuffle & Start</Button>
				</ButtonGroup>
			</form>
		{/if}
	</section>
	<DrawnTable
		title={`# Cards Drawn: ${game?.drawnCards?.length ?? 0}`}
		drawnCards={game.drawnCards}
	/>
</main>

<style lang="postcss">
	.main {
		--cols: 1fr;
		--gap: var(--space-400);

		margin: 0 auto;
		container-type: inline-size;
		container-name: main;
		display: grid;
		grid-template-columns: var(--cols);
		justify-content: center;
		gap: var(--gap);
		width: 90vw;
		margin-bottom: var(--gap);

		@media screen and (width > 820px) {
			& {
				--cols: repeat(2, 1fr);
				align-items: center;
			}
		}
	}

	.card-area {
		min-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--gap);
		container-name: cardArea;
		container-type: inline-size;

		@media screen and (width > 820px) {
			& {
				min-height: auto;
			}
		}
	}

	.form {
		width: 100%;
		max-width: 500px;
	}
</style>
