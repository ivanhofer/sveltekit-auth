import type { UserName } from '../../../../../utils/users.js'
import type { LayoutServerLoad } from './$types.js'

export const load: LayoutServerLoad = async (event) => {
	return { userName: event.params.userName as UserName }
}
