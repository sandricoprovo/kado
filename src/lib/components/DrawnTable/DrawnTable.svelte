<script lang="ts">
	import type { Card } from '$lib/types';

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
				<tr>
					<th class="table-row--top" colspan="2">{title}</th>
				</tr>
				<tr>
					<th>Name</th>
					<th>Suit</th>
				</tr>
			</thead>
			<tbody>
				{#each drawnCards as card}
					<tr>
						<td>{card.rank}</td>
						<td>{card.label}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</figure>
</article>

<style lang="postcss">
	article {
		width: 100%;
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

	.table-container th,
	.table-container td {
		text-align: center;
		padding: 12px 24px;
	}

	.table-row--top {
		z-index: 10;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px;
		text-align: center;
		border-bottom: 1px solid #ddd;
	}

	th {
		position: sticky;
		top: 0;
		background: white;
	}
</style>
