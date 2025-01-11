<script lang="ts">
	import {
		Button,
		Checkbox,
		Dropdown,
		Heading,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { CalendarMonthOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	import CreditCard from '../../utils/dashboard/CreditCard.svelte';
	import StatusBadge from '../../utils/dashboard/StatusBadge.svelte';
	import MetaTag from '../../utils/MetaTag.svelte';

	export let dark: boolean = false;

	const headers = ['کد سفارش', 'سفارش', 'تاریخ', 'مقدار', 'شماره کارت', 'وضعیت'];
	const data: [number, string, string, string, string, CreditCard['state']][] = [
		[475, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[924, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[826, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'cancelled'],
		[634, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inprogress'],
		[163, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[443, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inreview'],
		[223, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inreview'],
		[362, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[772, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inprogress'],
		[123, 'فالور ارزان اینستاگرام', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed']
	];
	const path: string = '/orders';
	const description: string = 'سفارشات';
	const title: string = 'سفارشات';
	const subtitle: string = 'سفارش‌ها';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white p-4 dark:bg-gray-800">
	<div class="items-center justify-between lg:flex">
		<div class="mb-4 mt-px lg:mb-0">
			<Heading tag="h3" class="-ml-0.25 text-xl font-semibold dark:text-white">سفارش‌ها</Heading>
		</div>
		<div class="items-center justify-between gap-3 space-y-4 sm:flex sm:space-y-0">
			<div class="flex items-center justify-between gap-3 space-x-4">
				<Input placeholder="از تاریخ" class="w-full">
					<CalendarMonthOutline slot="left" size="md" />
				</Input>
				<Input placeholder="تا تاریخ" class="w-full">
					<CalendarMonthOutline slot="left" size="md" />
				</Input>
			</div>
			<div class="flex items-center">
				<Button color="alternative" class="w-fit whitespace-nowrap py-2">
					فیلتر
					<ChevronDownOutline size="lg" />
				</Button>
				<Dropdown class="w-44 space-y-3 p-3 text-sm" placement="bottom-start">
					<li><Checkbox class="accent-primary-600">موفق (56)</Checkbox></li>
					<li><Checkbox checked>ناموفق (56)</Checkbox></li>
					<li><Checkbox class="accent-primary-600">در حال انجام (56)</Checkbox></li>
					<li><Checkbox checked>در دست بررسی (97)</Checkbox></li>
				</Dropdown>
			</div>
		</div>
	</div>
	<Table
		hoverable={true}
		noborder
		striped
		class="mt-6 min-w-full divide-y divide-gray-200 dark:divide-gray-600"
	>
		<TableHead class="bg-gray-50 text-center dark:bg-gray-700">
			{#each headers as header}
				<TableHeadCell class="whitespace-nowrap p-4 text-lg font-semibold dark:text-white"
					>{header}</TableHeadCell
				>
			{/each}
		</TableHead>
		<TableBody>
			{#each data as [code, name, date, amount, reference, status]}
				<TableBodyRow class="text-center text-base">
					<TableBodyCell class="px-4 font-normal  text-gray-500 dark:text-gray-400">
						{code}
					</TableBodyCell>
					<TableBodyCell class="px-4 font-normal">{name}</TableBodyCell>
					<TableBodyCell class="px-4 font-normal text-gray-500 dark:text-gray-400">
						{date}
					</TableBodyCell>
					<TableBodyCell class="px-4">{amount}</TableBodyCell>
					<TableBodyCell class="px-4 font-normal  text-gray-500 dark:text-gray-400">
						{reference}
					</TableBodyCell>
					<TableBodyCell class="px-4 font-normal"
						><StatusBadge state={status} {dark} /></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
