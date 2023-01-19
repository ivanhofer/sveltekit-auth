import { json } from '@sveltejs/kit'
import { _authGuard } from '../../+layout.server.js'
import type { RequestHandler } from './$types.js'

export const POST: RequestHandler = (event) => {
	_authGuard(event)

	const {params, cookies} = event

	cookies.set('user-name', params.userName, { path: '/' })

	return json({})
}
