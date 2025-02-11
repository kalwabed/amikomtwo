import { MikomOneDevice } from '@binsarjr/apiamikomone';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const access_token = url.searchParams.get('access_token')?.toString() || '';
	const apikey = url.searchParams.get('api_key')?.toString() || '';
	const resp = await MikomOneDevice.Payment.Bill(access_token, apikey);
	return json(resp);
};
