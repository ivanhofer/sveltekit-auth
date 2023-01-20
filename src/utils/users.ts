const users: Record<string, string> = {
	admin: 'Admin',
	adminRestricted: 'Restricted Admin',
	editor: 'Editor',
	user1: 'User 1',
	user2: 'User 2',
	user3: 'User 3',
}

// will probably be a DB lookup and therefore needs to be async
export const doesUserExist = async (userName: string) => {
	return Object.keys(users).includes(userName)
}