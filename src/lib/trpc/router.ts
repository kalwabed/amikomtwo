import { presensi } from "$lib/trpc/routes/presensi"
import { t } from "$lib/trpc/t"


export const router = t.router({
    presensi: presensi
});

