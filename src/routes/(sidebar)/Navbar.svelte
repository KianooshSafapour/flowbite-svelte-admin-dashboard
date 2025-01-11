<script>
	import Notifications from '../utils/dashboard/NotificationList.svelte';
	import AppsMenu from '../utils/widgets/AppsMenu.svelte';
	import UserMenu from '../utils/widgets/UserMenu.svelte';
	import {
		DarkMode,
		Dropdown,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Search
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import '../../app.pcss';
	import Users from '../data/users.json';

	export let fluid = true;
	export let drawerHidden = false;
	export let list = false;
</script>

<Navbar {fluid} class="text-black" color="default" let:NavContainer>
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<div class="hidden lg:block lg:ps-3">
		{#if list}
			<NavUl class="mr-2" activeUrl="/" activeClass="text-primary-600 dark:text-primary-500">
				<NavLi href="/">خانه</NavLi>
				<NavLi href="#top">پیام‌ها</NavLi>
				<NavLi href="#top">پروفایل</NavLi>
				<NavLi href="#top">تنظیمات</NavLi>
			</NavUl>
		{/if}
	</div>
	<div class="me-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<UserMenu {...Users[4]} />
	</div>
	<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<Notifications />
		<AppsMenu />
		<DarkMode />
	</div>
</Navbar>
