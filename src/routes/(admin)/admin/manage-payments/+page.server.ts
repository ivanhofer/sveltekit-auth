import type { PageServerLoad } from './$types.js'
import { checkAuth, hasAllRoles } from '$utils'

export const load: PageServerLoad = (event) => {
	checkAuth(event, hasAllRoles('manage-payments'))
}
