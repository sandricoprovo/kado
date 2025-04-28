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
					<TableHead class="h5 fvs-600 table__header sticky" colspan={3}>
						{title}
					</TableHead>
				</TableRow>
			</thead>
			<tbody>
				{#each drawnCards as card (`${card.rank}-${card.label}`)}
					<TableRow>
						<td class="table__data">{card.rank}</td>
						<td class="table__data">of</td>
						<td class="table__data">{card.label}</td>
					</TableRow>
				{/each}
			</tbody>
		</table>
	</figure>
</article>

<style lang="postcss">
	article {
		min-width: 200px;
		max-width: 400px;
		width: 100%;
		max-height: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.table-container {
		width: 100%;
		min-width: 320px;
		max-height: 450px;
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
			padding: 0 8px 8px 8px;
			text-align: center;
			border-bottom: 1px solid #ddd;
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	.table__data {
		width: calc(100% / 3);
		font-style: italic;
	}

	:global(.table-container tr) {
		background-color: red;
		color: red;
	}
</style>
