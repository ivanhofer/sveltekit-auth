import { json } from '@sveltejs/kit';
import { _authGuard } from '../+layout.server.js';
import type { RequestHandler } from './$types.js';

export const DELETE: RequestHandler = (event) => {
	_authGuard(event)

	const { cookies } = event

	cookies.delete('user-name')

	return json({})
}