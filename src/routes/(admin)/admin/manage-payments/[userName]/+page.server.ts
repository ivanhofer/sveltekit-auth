import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types.js'
import { checkAuth, doesUserExist, hasAllRoles } from '$utils'

export const load: PageServerLoad = async (event) => {
	checkAuth(event, hasAllRoles('manage-payments'))

	if (!await doesUserExist(event.params.userName)) throw error(404)

	return { userName: event.params.userName }
}
