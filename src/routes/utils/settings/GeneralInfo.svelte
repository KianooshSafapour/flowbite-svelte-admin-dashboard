<script lang="ts">
	import { Card, Input, Label, type InputType } from 'flowbite-svelte';

	const inputs: { label: string; type: InputType; placeholder: string }[] = [
		{ label: 'نام', type: 'text', placeholder: 'کیانوش' },
		{ label: 'نام خانوادگی', type: 'text', placeholder: 'صفاپور' },
		{ label: 'ایمیل', type: 'text', placeholder: 'kianoosh@safapour.me' },
		{ label: 'موبایل', type: 'text', placeholder: '۰۹۱۳۵۳۰۶۷۰۲' }
	];
</script>

<Card class="-mt-px max-w-none">
	<form class="grid grid-cols-6 gap-6">
		{#each inputs as { label, type, placeholder }}
			<Label class="col-span-6 space-y-2 sm:col-span-3">
				<span>{label}</span>
				<Input {type} {placeholder} class="border font-normal outline-none" />
			</Label>
		{/each}
	</form>
</Card>
