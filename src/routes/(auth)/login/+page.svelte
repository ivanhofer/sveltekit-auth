<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation'

	const doLogin = async (userName: string) => {
		await fetch(`/login/${userName}`, { method: 'POST' })
		await invalidateAll()
		goto('/')
	}
</script>

<h1>Login</h1>
<div>
	<button on:click={() => doLogin('admin')}>Login as admin</button>
	<button on:click={() => doLogin('adminRestricted')}>Login as restricted admin</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
</style>