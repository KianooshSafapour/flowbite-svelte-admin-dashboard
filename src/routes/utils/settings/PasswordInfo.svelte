<script>
	import { Card, Input, Label } from 'flowbite-svelte';
</script>

<Card class="max-w-none">
	<div class="grid grid-cols-6 gap-6">
		<Label class="col-span-6 space-y-2 sm:col-span-2">
			<span>رمز عبور کنونی</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-2">
			<span>رمز عبور جدید</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-2">
			<span>تایید رمز عبور</span>
			<Input placeholder="••••••••" class="border font-normal outline-none"></Input>
		</Label>
	</div>
</Card>
