import type { PageServerLoad, Actions, Action } from './$types.js'
import { checkAuth, hasAllRoles } from '$utils'
import type { RequestEvent } from '@sveltejs/kit'

// for consistency, to make re-using it easier
const hasManageUsers = (event: RequestEvent) => checkAuth(event, hasAllRoles('manage-users'))

export const load: PageServerLoad = (event) => {
	hasManageUsers(event)
}

const createUser = (event => {
	hasManageUsers(event)

	// ... implementation

}) satisfies Action

const modifyUser = (event => {
	hasManageUsers(event)

	// ... implementation

}) satisfies Action

const deleteUser = (event => {
	hasManageUsers(event)

	// ... implementation

}) satisfies Action

export const actions = {
	createUser,
	modifyUser,
	deleteUser,
} satisfies Actions