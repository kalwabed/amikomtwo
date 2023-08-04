import { getMainContent } from '$lib/supports/utils'
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
    return {
        content: await getMainContent('https://daak.amikom.ac.id/page/kalender-akademik')
    }

}