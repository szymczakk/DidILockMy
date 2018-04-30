import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

import plLangFile from 'util/lang/pl';
import enLangFile from 'util/lang/en';

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return /*'en'; */ Expo.DangerZone.Localization.getCurrentLocaleAsync().then(lng => {
     callback(lng); 
    })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: enLangFile,
      pl_PL: plLangFile
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    react:{
      wait: true
    }
  });


export default i18n;