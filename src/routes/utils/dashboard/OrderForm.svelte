<script lang="ts">
	import { Card, Select, Input, Textarea, Label, Checkbox, Button } from 'flowbite-svelte';
	import { InfoCircleOutline } from 'flowbite-svelte-icons';
</script>

<Card size="xl" class="max-w-none shadow-sm">
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="items-center lg:flex">
			<Label class="text-lg font-bold">ثبت سفارش</Label>
		</div>
		<div class="mr-auto items-center lg:flex">
			<Button color="alternative" class="font-bold">
				<InfoCircleOutline /> راهنما
			</Button>
		</div>
	</div>
	<div class="mt-4 grid grid-cols-1 gap-2 xl:grid-cols-2">
		<Card size="xl" class="max-w-none space-y-4 shadow-sm">
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div>
					<div class="items-center lg:flex">
						<Label class="text-lg font-bold">دسته‌بندی</Label>
					</div>
					<div class="items-center lg:flex">
						<Select
							class="border-gray-300 text-lg font-normal outline-none"
							placeholder="انتخاب دسته‌بندی"
							items={[
								{ value: 'IN', name: 'اینستاگرام' },
								{ value: 'TT', name: 'تیک‌تاک' },
								{ value: 'LI', name: 'لینکدین' },
								{ value: 'TW', name: 'توییتر' }
							]}
						/>
					</div>
				</div>
				<div>
					<div class="items-center lg:flex">
						<Label class="text-lg font-bold">سرویس</Label>
					</div>
					<div class="items-center lg:flex">
						<Select
							class="border-gray-300 text-lg font-normal outline-none"
							placeholder="انتخاب سرویس"
							items={[
								{ value: 'follower', name: 'دنبال‌کننده' },
								{ value: 'like', name: 'لایک' },
								{ value: 'comment', name: 'نظر' },
								{ value: 'view', name: 'مشاهده' }
							]}
						/>
					</div>
				</div>
			</div>
			<div>
				<div class="items-center lg:flex">
					<Label class="text-lg font-bold">لینک اکانت</Label>
				</div>
				<div class="items-center lg:flex">
					<Input class="text-lg font-normal outline-none" />
				</div>
			</div>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div>
					<div class="items-center lg:flex">
						<Label class="text-lg font-bold">تعداد</Label>
					</div>
					<div class="items-center lg:flex">
						<Input type="number" class="text-lg font-normal outline-none" />
					</div>
				</div>
				<div>
					<div class="items-center lg:flex">
						<Label class="text-lg font-bold">کد تخفیف</Label>
					</div>
					<div class="items-center lg:flex">
						<Input class="text-lg font-normal outline-none" />
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div>
					<div class="items-center lg:flex">
						<Checkbox class="text-lg font-bold">تایید سفارش</Checkbox>
					</div>
				</div>
				<div>
					<div class="items-center lg:flex">
						<p class="text-lg font-bold">هزینه:</p>
					</div>
				</div>
			</div>
		</Card>
		<Card size="xl" class="max-w-none shadow-sm">
			<div class="items-center lg:flex">
				<Label class="text-lg font-bold">توضیحات</Label>
			</div>
			<div class="mb-auto mt-2 items-center lg:flex"><Textarea rows={14} /></div>
		</Card>
		<Button class="mt-4 text-lg font-bold xl:col-span-2">ثبت سفارش</Button>
	</div>
</Card>
