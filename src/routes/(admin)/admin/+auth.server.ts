import { error } from '@sveltejs/kit'
import { getRolesForUser, type Role } from '../../../utils/roles.js'
import type { UserName } from '../../../utils/users.js'
import type { RequestEvent } from './$types.js'

const adminRoles: Role[] = ['manage-users', 'manage-payments']

export const guard = ({ locals }: RequestEvent) => {
	if (!locals.userName)
		throw error(404)

	if (!getRolesForUser(locals.userName as UserName).some(userRole => adminRoles.includes(userRole)))
		throw error(401, 'no admin role')
}
