import { redirect, type RequestEvent, type ServerLoadEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

export const _authGuard = ({ locals }: RequestEvent) => {
	if (locals.userName) throw redirect(307, '/')
}

export const load: LayoutServerLoad = async (event) => {
	_authGuard(event)
}