import type { UserName } from './users.js'

export type Role =
	| 'manage-payments'
	| 'manage-users'
	| 'editor'
	| 'user'

const usersRoles: Record<UserName, Role[]> = {
	admin: ['manage-payments', 'manage-users'],
	adminRestricted: ['manage-users'],
	editor: ['editor'],
	user1: ['user'],
	user2: ['user'],
	user3: ['user'],
}

export const getRolesForUser = (userName: UserName) => usersRoles[userName]
