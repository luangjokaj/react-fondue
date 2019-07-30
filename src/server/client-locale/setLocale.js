import { COOKIE_MAX_AGE, LOCALE_COOKIE_NAME } from './constants';

function setLocale(locale) {
	if (typeof window !== 'undefined') {
		window.document.cookie = `${LOCALE_COOKIE_NAME}=${locale};path=/;max-age=${COOKIE_MAX_AGE}`;
	}
}

export default setLocale;
