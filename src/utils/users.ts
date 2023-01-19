export type UserName = keyof typeof users

export const users = {
	admin1: 'Admin',
	adminRestricted: 'Restricted Admin',
	editor: 'Editor',
	user1: 'User 1',
	user2: 'User 2',
	user3: 'User 3',
}