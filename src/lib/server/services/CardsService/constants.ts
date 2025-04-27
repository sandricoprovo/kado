import type { Suit } from '$lib/types';

export const CARD_COUNT = 52;
export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
export const SUITS: Suit[] = [
	{ colorScheme: 'dark', suit: 'spades' },
	{ colorScheme: 'dark', suit: 'clubs' },
	{ colorScheme: 'light', suit: 'hearts' },
	{ colorScheme: 'light', suit: 'diamonds' }
];
