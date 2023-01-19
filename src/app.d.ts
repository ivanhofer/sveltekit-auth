// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userName?: import('./utils/users.js').UserName
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { }
