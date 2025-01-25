import type { Card, Deck } from '$lib/server/services/CardsService/types';

export class CardGame {
	public deck = $state<Deck>([]);
	public hasCards = $derived(this.deck.length > 0);
	public cardsDrawn = $state<Card[]>([]);
	public currentCard = $state<Card | null>(null);
	public cardsRemaining = $derived(this.deck.length);
	public isDirty = $derived(this.hasCards || this.cardsDrawn.length > 0);
	public hasDrawnAllCards = $derived(this.deck.length === 0 && this.cardsDrawn.length > 0);

	constructor() {}

	addDeck = (newDeck: Deck) => {
		if (!newDeck || newDeck.length <= 0) return;
		this.deck = newDeck;

		const drawnCard = this.deck.shift();
		if (!drawnCard) return;

		this.currentCard = drawnCard;
	};

	drawCard = (): Card | undefined => {
		if (!this.deck) return;

		const drawnCard = this.deck.shift();

		if (!drawnCard) return;

		if (this.currentCard) {
			this.cardsDrawn.unshift(this.currentCard);
		}

		this.currentCard = drawnCard;
	};

	reset = () => {
		this.deck = [];
		this.cardsDrawn = [];
		this.currentCard = null;
	};
}
