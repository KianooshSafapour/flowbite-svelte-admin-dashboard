<script lang="ts">
	import {
		Heading,
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import Services from '../../data/services.json';
	import MetaTag from '../../utils/MetaTag.svelte';

	const path: string = '/services';
	const description: string = 'سرویس‌ها';
	const title: string = 'سرویس‌ها';
	const subtitle: string = 'خدمات';
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white p-4 dark:bg-gray-800">
	<div class="mb-4 mt-3 lg:mb-0">
		<Heading tag="h3" class="-ml-0.25 text-xl font-semibold dark:text-white">سرویس‌ها</Heading>
	</div>
	<Table
		hoverable={true}
		striped
		noborder
		class="mt-6 min-w-full divide-y divide-gray-200 dark:divide-gray-600"
	>
		<TableHead class="bg-gray-50 text-center dark:bg-gray-700">
			{#each ['کد', 'عنوان', 'قیمت', 'حداقل', 'حداکثر', 'زمان', '...'] as title}
				<TableHeadCell class="whitespace-nowrap p-4 text-lg font-semibold dark:text-white"
					>{title}</TableHeadCell
				>
			{/each}
		</TableHead>
		<TableBody>
			{#each Services as service}
				<TableBodyRow class="text-center text-base">
					<TableBodyCell class="px-4 font-normal  text-gray-500 dark:text-gray-400">
						{service.id}</TableBodyCell
					>
					<TableBodyCell class="p-4 font-normal">{service.name}</TableBodyCell>
					<TableBodyCell class="p-4">{service.price}</TableBodyCell>
					<TableBodyCell class="p-4">{service.min}</TableBodyCell>
					<TableBodyCell class="p-4">{service.max}</TableBodyCell>
					<TableBodyCell class="p-4">{service.time}</TableBodyCell>
					<TableBodyCell class="p-4"
						><Button color="blue" size="md" class="w-32 font-semibold">توضیحات</Button
						></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
