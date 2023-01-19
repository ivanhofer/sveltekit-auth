import type { Actions, Action } from './$types.js'

const createUser = ((event) => {

	// ... implementation

}) satisfies Action

const modifyUser = ((event) => {

	// ... implementation

}) satisfies Action

const deleteUser = ((event) => {

	// ... implementation

}) satisfies Action

export const actions = {
	createUser,
	modifyUser,
	deleteUser,
} satisfies Actions