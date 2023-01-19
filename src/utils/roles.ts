import type { UserName } from './users.js'

type Role =
	| 'manage-payments'
	| 'manage-users'
	| 'editor'
	| 'user'

export const usersRoles: Record<UserName, Role[]> = {
	admin1: ['manage-payments', 'manage-users'],
	adminRestricted: ['manage-users'],
	editor: ['editor'],
	user1: ['user'],
	user2: ['user'],
	user3: ['user'],
}