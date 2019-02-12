import de from './de';
import en from './en';

const language = 'de';

const translationsDe = {
	...de,
};

const translationsEn = {
	...en,
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
