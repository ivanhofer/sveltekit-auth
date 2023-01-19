<script lang="ts">
	import type { PageData } from './$types.js'

	export let data: PageData
</script>

<h2>Manage Payment {data.paymentId} for {data.userName}</h2>

{JSON.stringify(data.details, undefined, 3)}
