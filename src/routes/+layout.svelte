<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation'
	import type { LayoutData } from './$types.js'

	export let data: LayoutData

	const doLogout = async () => {
		await fetch(`/logout`, { method: 'DELETE' })
		await invalidateAll()
		goto('/')
	}
</script>

<a href="/">back to home</a>

<div>
	{#if data.loggedIn}
		<button on:click={doLogout}>Logout</button>
	{:else}
		<a href="/login">Login</a>
	{/if}
</div>

<hr />

<slot />
