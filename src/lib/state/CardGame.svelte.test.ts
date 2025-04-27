import type { Card } from '$lib/types';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CardGame } from './CardGame.svelte';

const mockMouseEvent = {
	preventDefault: vi.fn()
} as unknown as MouseEvent;

const mockCard1: Card = {
	suit: 'hearts',
	rank: 'Ace',
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

describe('CardGame', () => {
	let game: CardGame;

	beforeEach(() => {
		game = new CardGame();
	});

	describe('initial state', () => {
		it('should initialize with empty deck', () => {
			expect(game.deck).toEqual([]);
			expect(game.drawnCards).toEqual([]);
			expect(game.currentCard).toBeNull();
			expect(game.hasCards).toBe(false);
			expect(game.remainingCount).toBe(0);
			expect(game.drawnCount).toBe(0);
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
			expect(game.remainingCount).toBe(2);
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
			game.drawCard(mockMouseEvent);
			expect(game.currentCard).toEqual(mockCard2);
			expect(game.drawnCards).toEqual([mockCard2, mockCard1]);
			expect(game.deck).toEqual([mockCard3]);
		});

		it('should handle drawing all cards', () => {
			game.drawCard(mockMouseEvent);
			game.drawCard(mockMouseEvent);
			expect(game.hasDrawnAllCards).toBe(true);
			expect(game.remainingCount).toBe(0);
		});
	});

	describe('reset', () => {
		it('should clear all cards and reset state', () => {
			game.addDeck([...mockDeck]);
			game.drawCard(mockMouseEvent);
			game.reset();

			expect(game.deck).toEqual([]);
			expect(game.drawnCards).toEqual([]);
			expect(game.currentCard).toBeNull();
			expect(game.hasCards).toBe(false);
			expect(game.isDirty).toBe(false);
			expect(game.hasDrawnAllCards).toBe(false);
		});
	});
});
