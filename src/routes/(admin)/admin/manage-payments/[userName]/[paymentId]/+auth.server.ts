import { error } from '@sveltejs/kit'
import { doesPaymentWithIdForUserExist } from '../../../../../../utils/db.js'
import type { RequestEvent } from './$types.js'

export const guard = async (event: RequestEvent) => {
	const paymentId = +(event.params.paymentId)

	if (isNaN(paymentId))
		throw error(400)

	if (!await doesPaymentWithIdForUserExist(event.params.userName, paymentId))
		throw error(404)

	// optional:
	// the auth guard could return some data, that gets passed to all `load` functions on the current level and below the folder tree
	// because some auth checks could already fetch some data from the DB, passing it to the `load` function would speed up requests, because they don't need to be made twice
}
