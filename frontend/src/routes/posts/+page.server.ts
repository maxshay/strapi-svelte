import type { PageServerLoad } from './$types';
import { SECRET_BACKEND_API_URL } from '$env/static/private';

export const load = (async () => {
	const res = await fetch(`${SECRET_BACKEND_API_URL}/api/posts`);

	return {
		posts: await res.json()
	};
}) satisfies PageServerLoad;
