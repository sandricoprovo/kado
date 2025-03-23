<script lang="ts">
	let { title, drawnCards } = $props();
</script>

<figure class="table-container">
	<figcaption class="h2">{title}</figcaption>
	<table>
		<thead>
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

<style lang="postcss">
	.table-container {
		width: 100%;
		max-height: 250px;
		overflow-y: auto;
		text-align: center;
		margin: 0 auto;
	}

	.table-container th,
	.table-container td {
		text-align: center;
		padding: 12px 24px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	th {
		position: sticky;
		top: 0;
		background: white;
	}
</style>
