import type { RequestHandler } from './$types.js'
import { json } from '@sveltejs/kit'
import { checkAuth, isAnonymous } from '$utils'

export const POST: RequestHandler = (event) => {
	checkAuth(event, isAnonymous('/'))

	const { params, cookies } = event

	cookies.set('user-name', params.userName, { path: '/' })

	return json({})
}
