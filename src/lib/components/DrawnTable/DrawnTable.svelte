<script lang="ts">
	import type { Card } from '$lib/types';
	import { TableRow, TableHead } from './elements';

	type DrawnTableProps = {
		title: string;
		drawnCards: Card[];
	};

	let { title, drawnCards }: DrawnTableProps = $props();
</script>

<article>
	<figure class="table-container">
		<table>
			<thead>
				<TableRow>
					<TableHead class="h5 fvs-600 table__header sticky" colspan={2}>
						{title}
					</TableHead>
				</TableRow>
				<TableRow>
					<TableHead class="fvs-500 sticky">Name</TableHead>
					<TableHead class="fvs-500 sticky">Suit</TableHead>
				</TableRow>
			</thead>
			<tbody>
				{#each drawnCards as card}
					<TableRow>
						<td>{card.rank}</td>
						<td>{card.label}</td>
					</TableRow>
				{/each}
			</tbody>
		</table>
	</figure>
</article>

<style lang="postcss">
	article {
		width: 100%;
		max-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.table-container {
		width: 90%;
		min-width: 320px;
		max-height: 250px;
		overflow-y: auto;
		text-align: center;
		margin: 0 auto;
		position: relative;
		text-align: center;
	}

	:global(.table-container th, .table-container td) {
		text-align: center;
		padding: 12px 24px;
	}

	:global(.table-container *) {
		background-color: white;

		& > th,
		& > td {
			padding: 8px;
			text-align: center;
			border-bottom: 1px solid #ddd;
		}

		& > th {
			border: none;
		}

		& > th,
		& > tr {
			background-color: lightgrey;
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}
</style>
