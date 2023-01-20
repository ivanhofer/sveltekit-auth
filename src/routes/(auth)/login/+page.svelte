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
	<button on:click={() => doLogin('admin')}>Login as Admin</button>
	<button on:click={() => doLogin('adminRestricted')}>Login as Restricted Admin</button>
	<button on:click={() => doLogin('editor')}>Login as Editor</button>
	<button on:click={() => doLogin('user1')}>Login as User 1</button>
	<button on:click={() => doLogin('user2')}>Login as User 2</button>
	<button on:click={() => doLogin('user3')}>Login as User 3</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
</style>
