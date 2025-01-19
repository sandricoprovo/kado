import type { ErrorTuple, SuccessTuple } from '$lib/types';
import type { Card, Deck, Suit } from './types';
import { CARD_COUNT, RANKS, SUITS } from './constants';

class CardsService {
	private cardCount: number;
	private ranks: string[];
	private suits: Suit[];

	constructor(count: number, ranks: string[], suits: Suit[]) {
		this.cardCount = count;
		this.ranks = ranks;
		this.suits = suits;
	}

	public static init(count: number, ranks: string[], suits: Suit[]): CardsService {
		if (!count || !ranks || !suits) {
			throw Error('Error: Could not create a CardsService instance due to missing argument.');
		}
		return new CardsService(count, ranks, suits);
	}

	generateCardData(index: number): Card {
		if (index === null || index === undefined || index < 0 || index > this.cardCount - 1) {
			throw Error('Error: card index out of range while generating card data');
		}

		const { suit, colorScheme } = this.suits[Math.floor(index / 13)];

		return {
			suit,
			colorScheme,
			rank: this.ranks[index % 13],
			label: `${suit.charAt(0).toUpperCase()}${suit.slice(1)}`
		};
	}

	generateDeck(): SuccessTuple<Deck> | ErrorTuple {
		const deck = Array.from({ length: this.cardCount }, (_, i) => this.generateCardData(i));

		if (deck.length !== this.cardCount) {
			return [null, { message: 'Failed to create card deck.' }];
		}

		return [deck, null];
	}

	shuffleDeck(deck: Deck): Deck {
		if (!deck) {
			throw Error('Error: Could not shuffle deck.');
		}

		const newDeck = [...deck];

		for (let i = newDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
		}

		return newDeck;
	}

	// TODO: create a validate deck method
}

export default CardsService.init(CARD_COUNT, RANKS, SUITS);
export { CardsService as service };
