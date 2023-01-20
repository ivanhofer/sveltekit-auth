import type { Handle } from '@sveltejs/kit'
import { getRolesForUser } from '$utils'

export const handle: Handle = ({ event, resolve }) => {
	const name = event.cookies.get('user-name')
	if (name) {
		// authenticated used
		event.locals.user = {
			name,
			roles: getRolesForUser(name),
		}
	} else {
		// anonymous user
		event.locals.user = {
			name: null,
			roles: [],
		}
	}

	return resolve(event)
}