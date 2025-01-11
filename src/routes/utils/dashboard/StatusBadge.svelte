<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import type { BadgeProps } from 'flowbite-svelte/Badge.svelte';

	export let state: keyof typeof states;
	export let dark: boolean = false;

	const states = {
		completed: 'موفق',
		cancelled: 'لغو شده',
		inreview: 'در حال بررسی',
		inprogress: 'در حال انجام'
	};

	const colors: Record<string, BadgeProps['color']> = {
		completed: 'green',
		cancelled: 'red',
		inreview: 'yellow',
		inprogress: 'purple'
	};
</script>

<Badge class="w-24 text-base font-normal" color={colors[state] ?? 'dark'} border={dark}
	>{states[state] ?? 'Unknown'}</Badge
>
