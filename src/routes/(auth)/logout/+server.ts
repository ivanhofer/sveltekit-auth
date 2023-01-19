import { json, redirect, type RequestEvent } from '@sveltejs/kit'
import type { RequestHandler } from './$types.js'

export const _authGuard = ({ locals }: RequestEvent) => {
	if (!locals.userName)
		throw redirect(307, '/')
}

export const DELETE: RequestHandler = (event) => {
	_authGuard(event)

	const { cookies } = event

	cookies.delete('user-name')

	return json({})
}