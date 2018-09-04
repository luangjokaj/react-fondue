const language = 'de';

const translationsDe = {
	language: {
		title: 'Eine minimale React-Kesselplatte mit serverseitigem Rendering.',
	},
};

const translationsEn = {
	language: {
		title: 'A minimal React boilerplate with server side rendering.',
	},
};

const t = (lang, key, params) => {
	const langTranslations = lang === 'de' ? translationsDe : translationsEn;
	const translation = key
		.split('.')
		.reduce((acc, currKey) => (acc ? acc[currKey] : undefined), langTranslations);

	if (typeof translation !== 'string') {
		console.warn('No translation found for', key);
		return key;
	}

	if (params) {
		return translation.replace(/\$\{\w+\}/g, match => {
			const param = match.substring(2, match.length - 1);
			return params[param] || match;
		});
	}

	return translation;
};

export { t };
