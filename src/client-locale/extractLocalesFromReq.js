import accepts from 'accepts';
import { LOCALE_COOKIE_NAME } from './constants';

function getLanguagesFromHeaders(req) {
	return accepts(req).languages();
}

function extractLocalesFromReq(req) {
	const cookieLocale = req.cookies[LOCALE_COOKIE_NAME];
	if (cookieLocale) {
		return [cookieLocale];
	}
	return getLanguagesFromHeaders(req) || [];
}

export default extractLocalesFromReq;
