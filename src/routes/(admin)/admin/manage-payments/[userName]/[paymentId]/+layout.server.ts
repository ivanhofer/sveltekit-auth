import { error, type RequestEvent } from '@sveltejs/kit'
import { _authGuard as adminManagePaymentsUserNameAuthGuard } from '../+layout.server.js' // potential issue: ... and worse on each level
import { doesPaymentWithIdForUserExist, getPaymentById } from '../../../../../../utils/db.js'
import type { LayoutServerLoad } from './$types.js'

export const _authGuard = async (event: RequestEvent) => {
	await adminManagePaymentsUserNameAuthGuard(event) // potential issue: you will need to manually check if the function returns a Promise and therefore needs to be awaited

	const paymentId = +(event.params.paymentId as string)

	if (isNaN(paymentId))
		throw error(400)

	if (!await doesPaymentWithIdForUserExist(event.params.userName as string, paymentId))
		throw error(404)
}

export const load: LayoutServerLoad = async (event) => {
	await _authGuard(event)

	const details = await getPaymentById(+event.params.paymentId)

	return { paymentId: event.params.paymentId, details }
}
