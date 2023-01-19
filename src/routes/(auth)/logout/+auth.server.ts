import { redirect } from '@sveltejs/kit'
import type { RequestEvent, } from './$types.js'

export const guard = ({ locals }: RequestEvent) => {
	if (!locals.userName)
		throw redirect(307, '/')
}
