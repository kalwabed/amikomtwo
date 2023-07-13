import type { IPresence } from '@binsarjr/apiamikomone/lib/typings/Response';
import { persisted } from 'svelte-local-storage-store';

export const historiPresensi = persisted<IPresence[]>('histori-presensi', []);
