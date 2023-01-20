import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types.js'
import { checkAuth, isAuthenticated } from '$utils'

export const DELETE: RequestHandler = (event) => {
	checkAuth(event, isAuthenticated('/'))

	const { cookies } = event

	cookies.delete('user-name')

	return json({})
}