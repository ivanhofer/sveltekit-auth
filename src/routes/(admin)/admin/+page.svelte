<script lang="ts">
	import type { PageData } from './$types.js'

	export let data: PageData
</script>

<h2>Admin</h2>

<nav>
	{#if data.canManageUsers}
		<a href="/admin/manage-users">Admin - manage users</a>
	{/if}
	{#if data.canManagePayments}
		<a href="/admin/manage-payments">Admin - manage payments</a>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
