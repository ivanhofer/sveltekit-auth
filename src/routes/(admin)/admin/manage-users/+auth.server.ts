import { error } from '@sveltejs/kit'
import { getRolesForUser } from '../../../../utils/roles.js'
import type { UserName } from '../../../../utils/users.js'
import type { RequestEvent } from './$types.js'

export const guard = (event: RequestEvent) => {
	if (!getRolesForUser(event.locals.userName as UserName).includes('manage-users'))
		throw error(401, 'missing manage-users role')
}
