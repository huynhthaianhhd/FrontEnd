import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';

const translationsJson = {
  en: {
    translation: en,
  },
};

export const translations = {};

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
const convertLanguageJsonToObject = (obj, dict, current) => {
  Object.keys(obj).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = currentLookupKey;
    }
  });
};
const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['localStorage'],

  // keys or params to lookup language from
  // lookupQuerystring: 'lng',
  // lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  // lookupSessionStorage: 'i18nextLng',
  // lookupFromPathIndex: 0,
  // lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // // optional expire and domain for set cookie
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain',

  // // optional htmlTag with lang attribute, the default is:
  // htmlTag: document.documentElement,

  // // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  // cookieOptions: { path: '/', sameSite: 'strict' }
};

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: translationsJson,

      fallbackLng: 'en',
      lng: 'en',
      debug:
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      detection: languageDetectorOptions,
    },
    () => {
      convertLanguageJsonToObject(en, translations);
    },
  );

export default i18next;
