import type { Handle } from '@sveltejs/kit';
import type { UserName } from './utils/users.js';

export const handle: Handle = ({ event, resolve }) => {
	const userName = event.cookies.get('user-name')
	if (userName) {
		event.locals.userName = userName as UserName
	}

	return resolve(event)
}