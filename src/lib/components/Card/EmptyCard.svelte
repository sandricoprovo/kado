<script lang="ts">
	import CardContainer from './elements/CardContainer.svelte';
</script>

<CardContainer isEmpty>
	{#snippet content()}
		<!-- TODO: put some empty state drawing/svg here? -->
		<p>Empty</p>
	{/snippet}
</CardContainer>
