import extractLocalesFromReq from "./extractLocalesFromReq";
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from "./constants";

/**
 * Will try to choose the best possible locale that the clients accepts.
 * Falls back to the default locale.
 * Used on server-side from Request
 */
export function guessLocale(req) {
	const clientLocales = extractLocalesFromReq(req);
	const url = req.originalUrl;

	const locale = clientLocales.filter((clientLocale) =>
		AVAILABLE_LOCALES.includes(clientLocale),
	)[0];

	return getLanguage(url, locale);
}

/**
 * Will choose the best possible language based on the URL.
 * Used on client-side from url path
 */
export function getLanguage(url, defaultLanguage = DEFAULT_LOCALE) {
	return (
		AVAILABLE_LOCALES.filter((lang) => {
			return url.substr(1, lang.length) === lang;
		})[0] || defaultLanguage
	);
}
