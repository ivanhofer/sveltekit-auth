import { type RequestEvent, error } from '@sveltejs/kit'
import type { LayoutServerLoad } from '../$types.js'
import { _authGuard as adminAuthGuard } from '../+layout.server.js'
import { getRolesForUser } from '../../../../utils/roles.js'
import type { UserName } from '../../../../utils/users.js'
import type { Actions, Action } from './$types.js'

export const _authGuard = (event: RequestEvent) => {
	adminAuthGuard(event) // potential issue: you have to remember to manually call all the functions from the paths above. Easy to miss one, if you refactor your code

	if (!getRolesForUser(event.locals.userName as UserName).includes('manage-users'))
		throw error(401, 'missing manage-users role')
}

export const load: LayoutServerLoad = (event) => {
	_authGuard(event)
}

const createUser = ((event) => {
	_authGuard(event) // potential issue: not all users know that you need to manually check auth in form actions (can be somehow solved by documentation)

	// ... implementation

}) satisfies Action

const modifyUser = ((event) => {
	_authGuard(event)

	// ... implementation

}) satisfies Action

const deleteUser = ((event) => {
	_authGuard(event)

	// ... implementation

}) satisfies Action

export const actions = {
	createUser,
	modifyUser,
	deleteUser,
} satisfies Actions