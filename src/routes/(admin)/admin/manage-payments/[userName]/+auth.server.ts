import { error } from '@sveltejs/kit'
import { doesUserExist } from '../../../../../utils/users.js'
import type { RequestEvent } from './$types.js'

export const guard = async (event: RequestEvent) => {
	if (!await doesUserExist(event.params.userName))
		throw error(404)
}
