<script lang="ts">
	import Dashboard from '../utils/dashboard/Dashboard.svelte';
	import MetaTag from '../utils/MetaTag.svelte';

	const path: string = '';
	const description: string = 'پنل مدیریت خدمات شبکه‌های اجتماعی';
	const title: string = 'پنل مدیریت - خانه';
	const subtitle: string = 'داشبورد';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
	<Dashboard />
</main>
