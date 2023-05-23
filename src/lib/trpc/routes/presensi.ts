import { authAttempt } from "$lib/supports/auth"
import { randomBetween, sleep } from "$lib/supports/utils"
import { t } from "$lib/trpc/t"
import { MikomOneDevice } from "@binsarjr/apiamikomone"
import { PresenceStatus } from "@binsarjr/apiamikomone/lib/typings/Enum/Presence"
import { z } from "zod"

export const presensi = t.router({
    code: t.procedure
        .input(z.object({
            code: z.string(),
            accounts: z.object({
                nim: z.string(),
                password: z.string(),
            }).array(),
        })).query(async ({ input }) => Promise.all(
            input.accounts.map(async ({ nim, password }) => {
                await sleep(randomBetween(500, 1000))
                let accessToken = ''
                try {
                    const { access_token } = await authAttempt(nim, password)
                    accessToken = access_token
                } catch (error) {
                    return {
                        success: false,
                        message: `${nim} Gagal Login, coba minta sign yang baru`
                    }
                }

                const response = await MikomOneDevice.Presence.Code(accessToken, input.code)
                return {
                    success: response.status === PresenceStatus.Success,
                    message: `${nim} ${response.message}`
                }
            }
            ))
        ),
    qrcode: t.procedure
        .input(z.object({
            data: z.string(),
            accounts: z.object({
                nim: z.string(),
                password: z.string(),
            }).array(),
        })).query(async ({ input }) => Promise.all(
            input.accounts.map(async ({ nim, password }) => {
                await sleep(randomBetween(500, 1000))
                let accessToken = ''
                try {
                    const { access_token } = await authAttempt(nim, password)
                    accessToken = access_token
                } catch (error) {
                    return {
                        success: false,
                        message: `${nim} Gagal Login, coba minta sign yang baru`
                    }
                }

                const response = await MikomOneDevice.Presence.Qrcode(accessToken, input.data)
                return {
                    success: response.status === PresenceStatus.Success,
                    message: `${nim} ${response.message}`
                }
            }
            ))
        )
})