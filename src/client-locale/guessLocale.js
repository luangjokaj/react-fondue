/**
 * Will try to choose the best possible locale that the clients accepts.
 * Falls back to the default locale.
 */
function guessLocale(availableLocales, clientLocales, defaultLocale) {
	return (
		clientLocales.filter(clientLocale => availableLocales.includes(clientLocale))[0] ||
		defaultLocale
	);
}

export default guessLocale;
