import { error, type RequestEvent } from '@sveltejs/kit'
import type { LayoutServerLoadEvent } from '../$types.js'
import { _authGuard as adminManagePaymentsAuthGuard } from '../+layout.server.js' // potential issue: naming things will get worse ...
import { doesUserExist, type UserName } from '../../../../../utils/users.js'
import type { LayoutServerLoad } from './$types.js'

export const _authGuard = async (event: RequestEvent) => {
	adminManagePaymentsAuthGuard(event as LayoutServerLoadEvent) // potential issue: event types will not match between different auth guards

	if (!await doesUserExist(event.params.userName as UserName)) // potential issue: untyped params object
		throw error(404)
}

export const load: LayoutServerLoad = async (event) => {
	await _authGuard(event) // potential issue: you will need to manually check if the function returns a Promise and therefore needs to be awaited

	return { userName: event.params.userName as UserName }
}
