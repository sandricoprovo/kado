export type Error = {
	message: string;
};
export type SuccessTuple<T> = [T, null];
export type ErrorTuple = [null, Error];

export type Ranks =
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| 'Jack'
	| 'Queen'
	| 'King'
	| 'Ace';

export type Suits = 'spades' | 'clubs' | 'diamonds' | 'hearts';

export type Suit = {
	colorScheme: 'dark' | 'light';
	suit: Suits;
};

export type Card = {
	label: string;
	rank: Ranks;
	suit: Suit['suit'];
	colorScheme: Suit['colorScheme'];
};
export type Deck = Card[];
