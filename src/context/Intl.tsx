import '../i18n/config';

import React, { createContext, FC, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Locales, STORAGE_LOCALE } from '../constans';
import useLocalStorage from '../utils/useLocalStorage';

interface IntlContextType {
  locale: Locales;
  setLocale: (locale: Locales) => void;
}

export const IntlContext = createContext<IntlContextType>({
  locale: Locales.RU,
  setLocale: () => null,
});

const { Provider } = IntlContext;

const In18Provider: FC = ({ children }) => {
  const [locale, setLocale] = useLocalStorage<Locales>(STORAGE_LOCALE, Locales.RU);
  const { i18n } = useTranslation();

  useEffect(() => {
    const loc = JSON.parse(
      window.localStorage.getItem(STORAGE_LOCALE) ?? `"${Locales.RU}"`,
    );
    i18n.changeLanguage(loc);
  }, []);

  const changeLocale = (loc: Locales) => {
    setLocale(loc);
    i18n.changeLanguage(loc);
  };

  return <Provider value={{ locale, setLocale: changeLocale }}>{children}</Provider>;
};

export default In18Provider;

export const useLocale = (): IntlContextType => {
  const { locale, setLocale } = useContext(IntlContext);
  return { locale, setLocale };
};
