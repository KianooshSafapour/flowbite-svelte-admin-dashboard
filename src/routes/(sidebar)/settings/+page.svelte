<script lang="ts">
	import Alerts from '../../utils/settings/Alerts.svelte';
	import Emails from '../../utils/settings/Emails.svelte';
	import { Button, Card, Input, Label, type InputType, Tabs, TabItem } from 'flowbite-svelte';
	import Footer from '../Footer.svelte';

	const inputs: { label: string; type: InputType; placeholder: string }[] = [
		{ label: 'نام', type: 'text', placeholder: 'کیانوش' },
		{ label: 'نام خانوادگی', type: 'text', placeholder: 'صفاپور' },
		{ label: 'ایمیل', type: 'text', placeholder: 'kianoosh@safapour.me' },
		{ label: 'موبایل', type: 'text', placeholder: '۰۹۱۳۵۳۰۶۷۰۲' }
	];

	import MetaTag from '../../utils/MetaTag.svelte';

	const path: string = '/settings';
	const description: string = 'Settings examaple - Flowbite Svelte Admin Dashboard';
	const title: string = 'Flowbite Svelte Admin Dashboard - Settings';
	const subtitle: string = 'Settings';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
	<div class="grid grid-cols-1 space-y-2 xl:gap-3.5 dark:bg-gray-900">
		<Tabs
			tabStyle="full"
			defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
		>
			<TabItem class="w-full" open>
				<span slot="title" class="text-lg dark:text-white">پایه</span>
				<form class="grid grid-cols-6 gap-6">
					{#each inputs as { label, type, placeholder }}
						<Label class="col-span-6 space-y-2 sm:col-span-3">
							<span>{label}</span>
							<Input {type} {placeholder} class="border font-normal outline-none" />
						</Label>
					{/each}
				</form>
			</TabItem>
			<TabItem class="w-full">
				<span slot="title" class="text-lg dark:text-white">امنیت</span>
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
			</TabItem>

			<TabItem class="w-full">
				<span slot="title" class="text-lg dark:text-white">اعلانات</span>
				<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-4">
					<Alerts />
					<Emails />
				</div>
			</TabItem>
		</Tabs>
		<Button class="w-1/3 place-self-center text-lg font-bold">ذخیره</Button>
	</div>
</main>
