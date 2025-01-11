<script lang="ts">
	import { Avatar, Button, Card, Heading } from 'flowbite-svelte';
	import { UploadSolid } from 'flowbite-svelte-icons';

	export let src: string;
</script>

<Card
	size="xl"
	class="block shadow-sm sm:flex sm:space-x-4 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4"
	horizontal
>
	<Avatar {src} class="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0" size="none" rounded />
	<div>
		<Button size="sm" class="px-3"
			><UploadSolid size="sm" class="-ms-1 me-2" /> Upload picture</Button
		>
		<Button size="sm" class="px-3" color="alternative">Delete</Button>
	</div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let src: string;
-->
