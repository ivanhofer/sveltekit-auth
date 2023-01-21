import { getRolesForUser } from '../../../utils/roles.js'
import type { UserName } from '../../../utils/users.js'
import type { LayoutServerLoad } from './$types.js'

export const load: LayoutServerLoad = (event) => {
	const roles = getRolesForUser(event.locals.userName as UserName)

	return {
		canManageUsers: roles.includes('manage-users'),
		canManagePayments: roles.includes('manage-payments'),
	}
}