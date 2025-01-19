import type { Actions } from '@sveltejs/kit';
import { CardsService } from '$lib/server/services/CardsService';

export const load = () => {
	return {};
};

export const actions = {
	getDeck: async ({ url }) => {
		const [deck, deckError] = CardsService.generateDeck();
		const shouldShuffle = Boolean(url.searchParams.get('shuffled'));

		if (deckError) {
			return {
				error: deckError
			};
		}

		if (shouldShuffle) {
			const shuffledDeck = CardsService.shuffleDeck(deck);
			return { deck: shuffledDeck };
		}

		return { deck };
	}
} satisfies Actions;
