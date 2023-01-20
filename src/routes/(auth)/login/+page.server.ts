import type { PageServerLoad } from './$types.js'
import { checkAuth, isAnonymous } from '$utils'

export const load: PageServerLoad = async (event) => {
	checkAuth(event, isAnonymous('/'))
}