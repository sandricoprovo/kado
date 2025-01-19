export type Suit = {
	colorScheme: 'dark' | 'light';
	suit: string;
};
export type Card = {
	label: string;
	rank: string;
	suit: Suit['suit'];
	colorScheme: Suit['colorScheme'];
};
export type Deck = Card[];
