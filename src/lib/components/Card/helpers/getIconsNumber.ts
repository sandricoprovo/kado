export const getIconsNumber = (rank: string): number => {
	if (!rank) return 1;
	return ['Ace', 'King', 'Queen', 'Jack'].includes(rank) ? 1 : Number(rank);
};
