<script lang='ts'>
    import type { HTMLButtonAttributes } from "svelte/elements";

    const { children,...rest }: HTMLButtonAttributes = $props();
</script>

<button {...rest} class="button">
    {@render children?.()}
</button>

<style lang='postcss'>
    .button {
        border: none;
    }
</style>