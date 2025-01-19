import type { Suit } from './types';

export const CARD_COUNT = 52;
export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
export const SUITS: Suit[] = [
	{ colorScheme: 'dark', suit: 'Spades' },
	{ colorScheme: 'dark', suit: 'Clubs' },
	{ colorScheme: 'light', suit: 'Hearts' },
	{ colorScheme: 'light', suit: 'Diamonds' }
];
