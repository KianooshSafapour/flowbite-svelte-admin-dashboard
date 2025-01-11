<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import OrderForm from './OrderForm.svelte';
</script>

<div class="mt-px space-y-4">
	<div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<Card horizontal class="items-center justify-center" size="xl">
			<div class="w-full">
				<p class="font-bold dark:text-white">سفارشات</p>
			</div>
			<p class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">۱۹</p>
		</Card>
		<Card horizontal class="items-center justify-between" size="xl">
			<div class="w-full">
				<p class="font-bold dark:text-white">تیکت‌ها</p>
			</div>
			<p class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">۲۴</p>
		</Card>
		<Card horizontal class="items-center justify-between" size="xl">
			<div class="w-full">
				<p class="font-bold dark:text-white">اعتبار</p>
			</div>
			<p class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
				۱۴،۴۰۰
			</p>
		</Card>
	</div>
	<OrderForm />
</div>
