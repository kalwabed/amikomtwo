import type {
	IHasilSemester,
	ITranskripNilai,
	Pengumuman
} from '@binsarjr/apiamikomone/lib/typings/Response';
import { persisted } from 'svelte-local-storage-store';

export const transkripNilai = persisted<ITranskripNilai | null>('transkripnilai', null);
export const hasilStudiSemester = persisted<IHasilSemester | null>('hasil-studi-semester', null);

export const pengumuman = persisted<Pengumuman[]>('pengumuman', []);
