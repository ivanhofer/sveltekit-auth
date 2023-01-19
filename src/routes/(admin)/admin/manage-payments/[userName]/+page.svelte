<script lang="ts">
   import type { PageData } from './$types.js'

	export let data: PageData
</script>

<h2>Manage Payments for {data.userName}</h2>

<nav>
	<a href="/admin/manage-payments/{data.userName}/1">Admin - manage payments - # 1</a>
	<a href="/admin/manage-payments/{data.userName}/2">Admin - manage payments - # 2</a>
	<a href="/admin/manage-payments/{data.userName}/99">Admin - manage payments - non-present id</a>
	<a href="/admin/manage-payments/{data.userName}/invalid">Admin - manage payments - invalid input</a>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
