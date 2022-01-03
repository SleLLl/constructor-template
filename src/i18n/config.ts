import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {},
  },
  ru: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  lng: 'ru',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
  debug: import.meta.env.MODE !== 'production',
});
