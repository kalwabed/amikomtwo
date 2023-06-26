// import type { Handle } from '@sveltejs/kit'
// import { sequence } from '@sveltejs/kit/hooks'
// import etag from 'etag'

// const etagHandler: Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event);

// 	const etagvalue = etag(await response.text());
// 	response.headers.set('ETag', etagvalue);

// 	return response;
// };

// export const handle = sequence(etagHandler);

import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
