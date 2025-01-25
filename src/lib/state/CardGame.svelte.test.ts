import type { Card } from '$lib/server/services/CardsService/types';
import { describe, it, expect, beforeEach } from 'vitest';
import { CardGame } from './CardGame.svelte';

describe('CardGame', () => {
	let game: CardGame;
	const mockCard1: Card = {
		suit: 'hearts',
		rank: 'A',
		label: 'Ace of Hearts',
		colorScheme: 'dark'
	};
	const mockCard2: Card = {
		suit: 'spades',
		rank: '2',
		label: '2 of Spades',
		colorScheme: 'dark'
	};
	const mockCard3: Card = {
		suit: 'diamonds',
		rank: '3',
		label: '3 of Diamonds',
		colorScheme: 'dark'
	};
	const mockDeck = [mockCard1, mockCard2, mockCard3];

	beforeEach(() => {
		game = new CardGame();
	});

	describe('initial state', () => {
		it('should initialize with empty deck', () => {
			expect(game.deck).toEqual([]);
			expect(game.cardsDrawn).toEqual([]);
			expect(game.currentCard).toBeNull();
			expect(game.hasCards).toBe(false);
			expect(game.cardsRemaining).toBe(0);
			expect(game.isDirty).toBe(false);
			expect(game.hasDrawnAllCards).toBe(false);
		});
	});

	describe('addDeck', () => {
		it('should add deck and draw first card', () => {
			game.addDeck([...mockDeck]);
			expect(game.deck).toEqual([mockCard2, mockCard3]);
			expect(game.currentCard).toEqual(mockCard1);
			expect(game.hasCards).toBe(true);
			expect(game.cardsRemaining).toBe(2);
		});

		it('should not modify state for empty deck', () => {
			game.addDeck([]);
			expect(game.deck).toEqual([]);
			expect(game.currentCard).toBeNull();
		});
	});

	describe('drawCard', () => {
		beforeEach(() => {
			game.addDeck([...mockDeck]);
		});

		it('should draw next card and move current to drawn', () => {
			game.drawCard();
			expect(game.currentCard).toEqual(mockCard2);
			expect(game.cardsDrawn).toEqual([mockCard1]);
			expect(game.deck).toEqual([mockCard3]);
		});

		it('should handle drawing all cards', () => {
			game.drawCard();
			game.drawCard();
			expect(game.hasDrawnAllCards).toBe(true);
			expect(game.cardsRemaining).toBe(0);
		});
	});

	describe('reset', () => {
		it('should clear all cards and reset state', () => {
			game.addDeck([...mockDeck]);
			game.drawCard();
			game.reset();

			expect(game.deck).toEqual([]);
			expect(game.cardsDrawn).toEqual([]);
			expect(game.currentCard).toBeNull();
			expect(game.hasCards).toBe(false);
			expect(game.isDirty).toBe(false);
			expect(game.hasDrawnAllCards).toBe(false);
		});
	});
});
