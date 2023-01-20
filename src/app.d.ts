// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Role } from '$utils'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string | null
				roles: Role[]
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { }
