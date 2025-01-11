<script lang="ts">
	import {
		Button,
		ButtonGroup,
		Card,
		Checkbox,
		Dropdown,
		Heading,
		InputAddon,
		Input,
		Label,
		Select,
		Tabs,
		TabItem,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	import { CalendarMonthOutline, ChevronDownOutline, UserCircleSolid } from 'flowbite-svelte-icons';
	import CreditCard from '../../utils/dashboard/CreditCard.svelte';
	import StatusBadge from '../../utils/dashboard/StatusBadge.svelte';
	import MetaTag from '../../utils/MetaTag.svelte';

	export let dark: boolean = false;

	const headers = ['کد رهگیری', 'درگاه', 'تاریخ', 'مبلغ', 'شماره کارت', 'وضعیت'];
	const data: [number, string, string, string, string, CreditCard['state']][] = [
		[475, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[924, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[826, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'cancelled'],
		[634, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inprogress'],
		[163, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[443, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inreview'],
		[223, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inreview'],
		[362, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed'],
		[772, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'inprogress'],
		[123, 'زرین‌پال', '۱ فروردین ۱۴۰۳', '۱۴۰۰۰', '۹۸۷۶-۷۸۷۶-۱۳۲۴-۵۴۲۲', 'completed']
	];

	const path: string = '/wallet';
	const description: string = 'کیف پول - پنل مدیریت خدمات شبکه‌های اجتماعی';
	const title: string = 'کیف پول';
	const subtitle: string = 'Wallet';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
	<div class="grid grid-cols-1 space-y-2 xl:gap-3.5 dark:bg-gray-900">
		<Tabs
			tabStyle="full"
			defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
		>
			<TabItem class="w-full" open>
				<span slot="title">افزایش موجودی</span>
				<Card size="xl" class="max-w-none shadow-sm">
					<div class="grid grid-cols-1 gap-4">
						<div class="items-center lg:flex">
							<Label class="text-lg font-bold">درگاه پرداخت</Label>
						</div>
						<div class="items-center lg:flex">
							<Select
								class="border-gray-300 text-lg font-normal outline-none"
								placeholder="انتخاب نمایید"
								items={[
									{ value: 'IN', name: 'زرین‌پال' },
									{ value: 'TT', name: 'شاپرک' },
									{ value: 'LI', name: 'بانک ملت' }
								]}
							/>
						</div>
						<div class="mt-4 items-center lg:flex">
							<Label class="text-lg font-bold">مبلغ</Label>
						</div>
						<div class="items-center lg:flex">
							<Input class="text-lg font-normal outline-none" />
						</div>
						<div class="felx ml-auto mr-auto mt-4 w-1/2">
							<Button class="w-full text-lg font-bold">پرداخت</Button>
						</div>
					</div>
				</Card>
			</TabItem>
			<TabItem class="w-full">
				<span slot="title">تاریخچه تراکنش‌ها</span>
				<Card size="xl" class="max-w-none shadow-sm">
					<div class="items-center justify-between lg:flex">
						<div class="mb-4 mt-px lg:mb-0">
							<Heading tag="h3" class="-ml-0.25 text-xl font-semibold dark:text-white"
								>تراکنش‌ها</Heading
							>
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
				</Card>
			</TabItem>
			<TabItem class="w-full">
				<span slot="title">تنظیمات حساب</span>
				<Card size="xl" class="max-w-none shadow-sm">
					<div class="grid grid-cols-1 gap-4">
						<div class="items-center lg:flex">
							<Label class="text-lg font-bold">شماره شبا</Label>
						</div>
						<div class="items-center lg:flex">
							<ButtonGroup class="w-full">
								<Input />
								<InputAddon>
									<UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
								</InputAddon>
							</ButtonGroup>
						</div>
						<div class="mt-4 items-center lg:flex">
							<Label class="text-lg font-bold">شماره کارت</Label>
						</div>
						<div class="items-center lg:flex">
							<Input class="text-lg font-normal outline-none" />
						</div>
						<div class="felx ml-auto mr-auto mt-4 w-1/2">
							<Button class="w-full text-lg font-bold">ثبت</Button>
						</div>
					</div>
				</Card>
			</TabItem>
		</Tabs>
	</div>
</main>
