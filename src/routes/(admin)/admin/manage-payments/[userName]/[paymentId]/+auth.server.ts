import { error } from '@sveltejs/kit'
import { doesPaymentWithIdForUserExist } from '../../../../../../utils/db.js'
import type { RequestEvent } from './$types.js'

export const guard = async (event: RequestEvent) => {
	const paymentId = +(event.params.paymentId)

	if (isNaN(paymentId))
		throw error(400)

	if (!await doesPaymentWithIdForUserExist(event.params.userName, paymentId))
		throw error(404)
}
