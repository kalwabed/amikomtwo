import { persisted } from 'svelte-local-storage-store';

export const ktmDigital = persisted<string | null>('ktmdigital', null);
