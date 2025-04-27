import type { Card, Deck } from '$lib/types';

export class CardGame {
	public deck = $state<Deck>([]);
	public drawnCards = $state<Card[]>([]);
	public hasCards = $derived(this.deck.length > 0);
	public currentCard = $state<Card | null>(null);
	public drawnCount = $derived(this.drawnCards.length);
	public remainingCount = $derived(this.deck.length);
	public isDirty = $derived(this.hasCards || this.drawnCards.length > 0);
	public hasDrawnAllCards = $derived(this.deck.length === 0 && this.drawnCards.length > 0);

	constructor() {}

	addDeck = (newDeck: Deck) => {
		if (!newDeck || newDeck.length <= 0) return;
		this.deck = newDeck;

		const drawnCard = this.deck.shift();
		if (!drawnCard) return;

		this.drawnCards.unshift(drawnCard);
		this.currentCard = drawnCard;
	};

	drawCard = (e: MouseEvent): Card | undefined => {
		e.preventDefault();

		if (!this.deck) return;

		const drawnCard = this.deck.shift();

		if (!drawnCard) return;
		this.drawnCards.unshift(drawnCard);

		this.currentCard = drawnCard;
	};

	reset = () => {
		this.deck = [];
		this.drawnCards = [];
		this.currentCard = null;
	};
}
