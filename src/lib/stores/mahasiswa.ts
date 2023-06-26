import { writable } from 'svelte-local-storage-store';
import type { IBio } from '@binsarjr/apiamikomone/lib/typings/Response';

export const mahasiswa = writable<IBio | null>('mahasiswa', null);
