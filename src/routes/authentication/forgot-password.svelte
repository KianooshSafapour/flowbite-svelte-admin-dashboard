<script lang="ts">
	import ForgotPassword from '../utils/authentication/ForgotPassword.svelte';
	import { Label, Input, Checkbox, A } from 'flowbite-svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};

	const path: string = '/authentication/forgot-password';
  const description: string = 'Forgot password example - Flowbite Svelte Admin Dashboard';
	const title: string = 'بازیابی رمز عبور';
  const subtitle: string = 'فراموشی رمز عبور';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<ForgotPassword on:submit={onSubmit}>
	<div>
		<Label for="email" class="mb-2">ایمیل</Label>
		<Input
			type="email"
			name="email"
			id="email"
			placeholder="name@company.com"
			required
			class="border outline-none"
		/>
	</div>
	<Checkbox class="gap-1">من با <A href="/">شرایط و قوانین</A> موافقم</Checkbox>
</ForgotPassword>
