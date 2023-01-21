import { error, type RequestEvent } from '@sveltejs/kit'
import { getRolesForUser, type Role } from '../../../utils/roles.js'
import type { UserName } from '../../../utils/users.js'
import type { LayoutServerLoad } from './$types.js'

const adminRoles: Role[] = ['manage-users', 'manage-payments']

export const _authGuard = ({ locals }: RequestEvent) => {
	if (!locals.userName)
		throw error(404)

	if (!getRolesForUser(locals.userName as UserName).some(userRole => adminRoles.includes(userRole)))
		throw error(401, 'no admin role')
}

export const load: LayoutServerLoad = (event) => {
	_authGuard(event)
}