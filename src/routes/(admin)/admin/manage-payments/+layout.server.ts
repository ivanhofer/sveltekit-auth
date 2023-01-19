import { error } from '@sveltejs/kit'
import type { LayoutServerLoad, LayoutServerLoadEvent } from './$types.js'
import { _authGuard as adminAuthGuard } from '../+layout.server.js' // potential issue: your auth functions probably all have the same name, so you need to come up with a unique name when you use multiple functions at the same time
import { getRolesForUser } from '../../../../utils/roles.js'
import type { UserName } from '../../../../utils/users.js'

export const _authGuard = (event: LayoutServerLoadEvent) => {
	adminAuthGuard(event) // potential issue: you have to remember to manually call all the functions from the paths above. Easy to miss one, if you refactor your code

	if (!getRolesForUser(event.locals.userName as UserName).includes('manage-payments'))
		throw error(401, 'missing manage-payments role')
}

export const load: LayoutServerLoad = (event) => {
	_authGuard(event)
}
