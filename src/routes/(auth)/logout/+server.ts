import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types.js'

export const DELETE: RequestHandler = (event) => {
	const { cookies } = event

	cookies.delete('user-name')

	return json({})
}