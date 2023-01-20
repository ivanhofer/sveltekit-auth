import { checkAuth, getPaymentById, hasAllRoles } from '$utils'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async (event) => {
	checkAuth(event, hasAllRoles('manage-payments'))

	const details = await getPaymentById(+event.params.paymentId, event.locals.user.name)
	if (!details) {
		throw error(404)
	}

	return { paymentId: event.params.paymentId, details, userName: event.params.userName }
}
