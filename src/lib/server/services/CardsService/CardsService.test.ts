import { describe, expect, it } from 'vitest';
import { RANKS, SUITS, CARD_COUNT } from './constants';
import { service } from './CardsService';

describe('CardsService', () => {
	describe('init', () => {
		it('should init CardsService', () => {
			const cardsService = service.init(CARD_COUNT, RANKS, SUITS);
			expect(cardsService.generateDeck).toBeDefined();
		});

		it("should throw error if all arguments aren't valid", () => {
			// @ts-expect-error testing error case
			expect(() => service.init(CARD_COUNT, RANKS)).toThrow(
				'Error: Could not create a CardsService instance due to missing argument.'
			);
		});
	});

	describe('generateCardData', () => {
		it('should should error if card index is out of range', () => {
			const error = 'Error: card index out of range while generating card data';
			const cardsService = service.init(CARD_COUNT, RANKS, SUITS);

			// @ts-expect-error testing error case
			expect(() => cardsService.generateCardData()).toThrow(error);
			expect(() => cardsService.generateCardData(-1)).toThrow(error);
			expect(() => cardsService.generateCardData(52)).toThrow(error);
		});

		it('should generate card data when passed proper values', () => {
			const cardsService = service.init(CARD_COUNT, RANKS, SUITS);
			const card = cardsService.generateCardData(0);

			expect(card).toEqual({
				suit: 'spades',
				colorScheme: 'dark',
				rank: '2',
				label: 'Spades'
			});
		});
	});

	describe('generateDeck', () => {
		it('should return success tuple if valid deck', () => {
			const [deck, deckErr] = service.init(4, RANKS, SUITS).generateDeck();

			expect(deck?.length).toBe(4);
			expect(deckErr).toBeNull();
		});
	});

	describe('shuffleDeck', () => {
		it('should return success tuple if valid deck', () => {
			const cardsService = service.init(4, RANKS, SUITS);

			// @ts-expect-error testing error case
			expect(() => cardsService.shuffleDeck()).toThrow('Error: Could not shuffle deck.');
		});

		it('should return success tuple if valid deck', () => {
			const cardsService = service.init(4, RANKS, SUITS);
			const [deck, deckErr] = cardsService.generateDeck();

			expect(deck).toBeDefined();
			expect(deckErr).toBeNull();

			// @ts-expect-error testing error case
			const shuffledDeck = cardsService.shuffleDeck(deck);

			// @ts-expect-error testing error case
			expect(deck[0]).not.toEqual(shuffledDeck[0]);
		});
	});
});
