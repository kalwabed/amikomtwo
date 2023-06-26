import type { IJadwalKuliah } from '@binsarjr/apiamikomone/lib/typings/Response';

import { writable } from 'svelte-local-storage-store';
import { writable as persist } from 'svelte/store';

type JadwalKuliah = IJadwalKuliah & {
	ZoomURL: string;
};

export const jadwal = writable<JadwalKuliah[]>('jadwal', []);
export const jadwalHariIni = persist<JadwalKuliah[]>([]);
export const jadwalMatkulAktif = persist<JadwalKuliah | undefined>(undefined);

export const getIdFromJadwal = (jadwal: JadwalKuliah) =>
	`${jadwal.IdHari}${jadwal.IdJam}${jadwal.IdKuliah}`;
