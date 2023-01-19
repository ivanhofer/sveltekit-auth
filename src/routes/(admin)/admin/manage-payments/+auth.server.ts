import { error } from '@sveltejs/kit'
import type { LayoutServerLoadEvent } from './$types.js'
import { getRolesForUser } from '../../../../utils/roles.js'
import type { UserName } from '../../../../utils/users.js'

export const guard = (event: LayoutServerLoadEvent) => {
	if (!getRolesForUser(event.locals.userName as UserName).includes('manage-payments'))
		throw error(401, 'missing manage-payments role')
}
