import { error, redirect, type RequestEvent } from "@sveltejs/kit"

export type Role =
	| 'manage-payments'
	| 'manage-users'
	| 'editor'
	| 'user'

const usersRoles: Record<string, Role[]> = {
	admin: ['manage-payments', 'manage-users'],
	adminRestricted: ['manage-users'],
	editor: ['editor'],
	user1: ['user'],
	user2: ['user'],
	user3: ['user'],
}

export const getRolesForUser = (userName: string) => usersRoles[userName]

type AuthCheck = (event: RequestEvent) => void

export const checkAuth = (event: RequestEvent, ...checks: AuthCheck[]) => {
	const userRoles = event.locals.user.roles
	for (const check of checks) {
		check(event)
	}
}

export const hasAllRoles = (...roles: Role[]) => (event: RequestEvent) => {
	const userRoles = event.locals.user.roles
	for (const role of roles) {
		if (!userRoles.includes(role)) {
			throw error(401, `no ${role} role`)
		}
	}
}

export const hasAnyRole = (...roles: Role[]) => (event: RequestEvent) => {
	const userRoles = event.locals.user.roles
	for (const role of roles) {
		if (userRoles.includes(role)) {
			return
		}
	}
	throw error(401, `no admin role`)	// or roles.join() to show actual roles
}


export const isAuthenticated = (redirect_url: string) => (event: RequestEvent) => {
	if (!event.locals.user.name) {
		throw redirect(307, redirect_url)
	}
}

export const isAnonymous = (redirect_url: string) => (event: RequestEvent) => {
	if (event.locals.user.name) {
		throw redirect(307, redirect_url)
	}
}
