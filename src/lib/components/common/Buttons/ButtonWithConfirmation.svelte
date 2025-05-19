<script lang="ts">
	import Typography from '../Typography.svelte';
	import Button from './Button.svelte';
	import ButtonGroup from './ButtonGroup.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface ButtonOptionProps extends HTMLButtonAttributes {
		label: string;
	}

	interface ButtonWithConfirmationProps extends HTMLButtonAttributes {
		label: string;
		title: string;
		buttons: ButtonOptionProps[];
	}

	const { title, onclick, label, buttons }: ButtonWithConfirmationProps = $props();
</script>

<div popover role="menu" id="confirmOptions" class="confirmation__container">
	<Typography as="p">{title}</Typography>
	<ButtonGroup>
		{#each buttons as { label, onclick } (label)}
			<Button popovertarget="confirmOptions" {onclick} type="button" size="small">
				{label}
			</Button>
		{/each}
	</ButtonGroup>
</div>

<Button popovertarget="confirmOptions" {onclick} style="anchor-name: --tooltip-anchor">
	{label}
</Button>

<style lang="postcss">
	.confirmation__container {
		--padding: var(--space-200);

		position: absolute;
		margin: 0;
		inset: auto;
		border-radius: calc(var(--br-sm) + var(--padding));
		border: none;
		background-color: white;
		padding: var(--padding);
		width: 220px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		gap: var(--space-200);
		z-index: 20;
		transition:
			display 150ms,
			opacity 150ms,
			translate 150ms;
		transition-behavior: allow-discrete;
		margin-inline-start: clamp(0px, 1vw, 12px);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&:popover-open {
			display: flex;
			opacity: 1;
			translate: 0px 0px;
			margin-block-end: var(--space-200);

			&::backdrop {
				background-color: rgba(0, 0, 0, 0.5);
				box-shadow: none;
			}

			@starting-style {
				opacity: 0;
				translate: 0px 20px;
			}
		}

		@supports (anchor-name: --tooltip-anchor) {
			inset: unset;
			top: unset;
			transform: unset;
			box-shadow: var(--shadow-high);
			position-anchor: --tooltip-anchor;
			bottom: anchor(top);
			left: anchor(left);

			&:popover-open::backdrop {
				background-color: transparent;
			}
		}
	}
</style>
