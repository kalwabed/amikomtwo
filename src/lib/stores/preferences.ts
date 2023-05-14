import { writable } from 'svelte-local-storage-store'
import { writable as W } from 'svelte/store'

export const isIos = writable('isIos', false);

export const preferences = writable('preferences', {
	nim: '',
	password: '',
	tanggalLahir: '',
	otp: ''
});

export const authUser = writable<{
	accessToken: string;
	apiKey: string;
} | null>('authuser', null);


export const pageLoader = W(true)