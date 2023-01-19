import { json } from '@sveltejs/kit'
import { _authGuard } from '../+layout.server.js' // potential issue: did you import the function from the correct path? If you go one level to far, you will not check everything
import type { RequestHandler } from './$types.js'

export const POST: RequestHandler = (event) => {
	_authGuard(event) // potential issue: not all users know that you need to manually check auth in endpoint functions (can be somehow solved by documentation)

	const { params, cookies } = event

	cookies.set('user-name', params.userName, { path: '/' })

	return json({})
}
