import { getPaymentById } from '../../../../../../utils/db.js'
import type { LayoutServerLoad } from './$types.js'

export const load: LayoutServerLoad = async (event) => {
	const details = await getPaymentById(+event.params.paymentId)

	return { paymentId: event.params.paymentId, details }
}
