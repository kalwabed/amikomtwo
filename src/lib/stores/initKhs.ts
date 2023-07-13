import type { InitKHS } from '@binsarjr/apiamikomone/lib/typings/Response';
import { persisted } from 'svelte-local-storage-store';

export const initKhs = persisted<InitKHS | null>('initkhs', null);
