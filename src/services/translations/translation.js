import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '../translations/locales/en';
import nl from '../translations/locales/nl';
import es from '../translations/locales/es';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  nl,
  es,
};

export default I18n;
