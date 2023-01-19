import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types.js'

export const POST: RequestHandler = (event) => {
	const { params, cookies } = event

	cookies.set('user-name', params.userName, { path: '/' })

	return json({})
}
