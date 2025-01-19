<script lang="ts">
	import type { ActionData } from './$types.js';
    import { enhance } from '$app/forms';
    import Button from '$lib/components/common/Buttons/Button.svelte';

    interface DataProps {
        form: ActionData;
    }

    let { form }: DataProps = $props()
    $inspect(form)
</script>


<h1>ShuffleDeck</h1>

<form method="POST" use:enhance>
    <Button formaction="?/getDeck" type="submit">Get New Deck</Button>
    <Button formaction="?/getDeck&shuffled=true" type="submit">Get Deck</Button>
</form>