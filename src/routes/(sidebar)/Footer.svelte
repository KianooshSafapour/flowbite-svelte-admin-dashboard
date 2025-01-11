<script lang="ts">
	import { Card, Frame, type LinkType } from 'flowbite-svelte';
	import {
		DiscordSolid,
		DribbbleSolid,
		FacebookSolid,
		GithubSolid,
		TwitterSolid
	} from 'flowbite-svelte-icons';
	import type { ComponentType } from 'svelte';

	const links: LinkType[] = [
		{ name: 'شرایط و قوانین', href: '/#' },
		{ name: 'حریم شخصی', href: '/#' },
		{ name: 'راهنمای استفاده', href: '/#' },
		{ name: 'درباره ما', href: '/#' },
		{ name: 'تماس با ما', href: '/#' }
	];

	const brands: [ComponentType, string][] = [
		[FacebookSolid, ''],
		[DiscordSolid, ''],
		[TwitterSolid, ''],
		[GithubSolid, ''],
		[DribbbleSolid, '']
	];
</script>

<Frame
	tag="footer"
	rounded
	shadow
	class="mx-4 my-2 rounded-lg bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-gray-800"
>
	<ul class="mb-6 flex flex-wrap items-center space-y-1 sm:gap-4 md:mb-0 xl:gap-6">
		{#each links as { name, href }}
			<li>
				<a
					{href}
					class="ml-4 text-sm font-normal text-gray-500 hover:underline sm:ml-6 dark:text-gray-400"
				>
					{name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex space-x-6 sm:justify-center">
		{#each brands as [component, href]}
			<a {href} class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svelte:component this={component} size="md" />
			</a>
		{/each}
	</div>
</Frame>

<p class="my-10 text-center text-sm text-gray-500">
	© ۱۴۰۰ - ۱۴۰۴ <a href="#" class="hover:underline" target="_blank"> کیانوش صفاپور </a>. تمامی حقوق
	محفوظ است
</p>
