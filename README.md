# `SvelteKit` using `+auth.server.ts` example

This is a repository demonstrating a solution to the current difficulties using authorization in `SvelteKit` as [discussed here](https://github.com/sveltejs/kit/issues/6315).

I want to showcase the pain points of dealing with authorization in more complex applications.

## Proposed Solution
The solution forsees that `SvelteKit` should offer a built-in way to handle authorization. Key-aspects are:

 - a new file `+auth.server.ts` that exports a `guard` function
 - when visiting a page, all `+auth.server.ts` guards of the current route will run (all parents)
 - guards should run in sequence from top to bottom of the folder tree
 - all guards will run before any `+layout` and `+page` files
 - if a guard throws, no `+layout` and `+page` `load`s get executed that are on the current level or below the guard that throws
 - parent `+layout` files will run after a guard throws and should have the same error-handling behavior as if the `load` function inside the co-located `+layout` file would throw in it's first line.
 - all guards will also run before [form actions](https://kit.svelte.dev/docs/form-actions) and [`RequestHandler`s](https://kit.svelte.dev/docs/routing#server) (`POST`, `DELETE`, etc.)
 - using `+auth.server.ts` should be completely optional. If someone does only need basics, he can probably handle it in `hooks.server.ts`.

> Those are the points I would consider. This is just a proposal and the naming and details are open to discuss.

## Implementation

The [`main`](https://github.com/ivanhofer/sveltekit-auth/tree/main)-branch implements an example with the current version of `SvelteKit` and tries to demonstrate what you need to consider when you try to use authorization in an application. I have identified 10 issues, you need to consider when you really want to make sure to protect your application (search for 'potential issue:').

The [`rfc`](https://github.com/ivanhofer/sveltekit-auth/tree/rfc)-branch wants to show how you would write your application using the `+auth.server.ts` approach mentioned above.
> Note: the routes will not actually be protected when you try to run this example, because `+auth.server.ts` is just a concept for now.

This [PR](https://github.com/ivanhofer/sveltekit-auth/pull/2) shows the differences of both approaches.


## Contributing

If you know other benefits (or downsides) to this approach, feel free to open an issue or a PR to demonstrate it in both branches.

## Other Solutions

 - Handle authorization inside `hooks.server.ts`:\
	Try to convert this example to that approach and tell me if you still think this is a good idea ;)
 - Leaving it as it currently is\
	It is really hard to make sure that your application is 100% protected. Giving developers a good solution, will improve the quality of `SvelteKit` applications.
 - Let someone else implement this as a `vite`-plugin\
	This could also be an option, but an official way would certainly be the better options
