import type { PageServerLoad } from './$types.js'
import { checkAuth, hasAnyRole } from '$utils'

export const load: PageServerLoad = (event) => {
  checkAuth(event, hasAnyRole('manage-users', 'manage-payments'))

}
