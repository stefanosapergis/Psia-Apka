import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json'; // Polish translations
import el from './locales/el/translation.json'; // Greek translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
      el: { translation: el },
    },
    lng: 'en',  // Default language
    fallbackLng: 'en',  // Fallback language if key is not found
    interpolation: {
      escapeValue: false,  // React already escapes values
    },
  });

export default i18n;
