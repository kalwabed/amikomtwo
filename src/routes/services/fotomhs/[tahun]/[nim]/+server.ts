import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const tahun = params.tahun;
	const nim = params.nim.replace(/\./g, '_');
	const link = `https://fotomhs.amikom.ac.id/${tahun}/${nim}.jpg`;

	const response = await fetch(link);
	const headers = Object.fromEntries(response.headers);

	const lastModified: any = new Date(headers['last-modified']);
	const cacheControl = `max-age=${Math.floor((Date.now() - lastModified) / 1000)}, must-revalidate`;

	headers['cache-control'] = cacheControl;
	headers['Content-Disposition'] = `filename="${nim}.jpg"`;

	setHeaders(headers);
	const imageBlob = Buffer.from(await response.arrayBuffer());

	return new Response(imageBlob);
};
