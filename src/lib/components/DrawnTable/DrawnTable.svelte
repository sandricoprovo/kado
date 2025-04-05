<script lang="ts">
	import type { Card } from '$lib/types';
	import { TableRow, TableHead } from './elements';

	type DrawnTableProps = {
		title: string;
		drawnCards: Card[];
	};

	let { title, drawnCards }: DrawnTableProps = $props();
</script>

<!-- TODO: convert this to a div based table? -->
<article>
	<figure class="table-container">
		<table>
			<thead>
				<TableRow>
					<TableHead class="h5 fvs-600 table__header sticky" colspan={2}>
						{title}
					</TableHead>
				</TableRow>
			</thead>
			<tbody>
				{#each drawnCards as card}
					<TableRow>
						<td class="table__data">{card.rank}</td>
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
		max-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.table-container {
		width: 100%;
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
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	.table__data {
		width: 50%;
	}

	:global(.table-container tr) {
		background-color: red;
		color: red;
	}
</style>
