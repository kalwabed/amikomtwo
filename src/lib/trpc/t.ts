import type { Context } from '$lib/trpc/context'
import type { router } from "$lib/trpc/router"
import { initTRPC } from '@trpc/server'

export const t = initTRPC.context<Context>().create();
export type Router = typeof router;