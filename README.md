# `SvelteKit` using `+auth.server.ts` example

Refactored to show simpler approach which is mostly providing simple auth check methods that any load function can call. I believe that rying to re-use parent auth methods made the code overly complex and confusing.

- Create alias for utils and tidies imports (e.g. removed any ../../..)
- Create user type in app.d.ts - null name = not auth'd
- Create locals.user object in hooks.server.ts
- Remove UserName type - you wouldn't have a strongly typed union of all your usernames hard coded into the codebase
- Use +page.server.ts, for pages, using +layout.server.ts without any layout is confusing
- Remove doesPaymentWithIdForUserExist - doesn't make sense to check database for something and then load it, it can happen in one operation
