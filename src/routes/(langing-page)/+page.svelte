<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation'
   import type { PageData } from './$types.js'

	export let data: PageData

	const doLogout = async () =>  {
		await fetch(`/logout`, { method: 'DELETE' })
		await invalidateAll()
		goto('/')
	}
</script>

<div>
	{#if data.loggedIn}
		<button on:click={doLogout}>Logout</button>
	{:else}
		<a href="/login">Login</a>
	{/if}
</div>

<h1>Welcome to the '+auth.server.ts' example</h1>

