import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return /*'en'; */ Expo.Util.getCurrentLocaleAsync().then(lng => {
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
      en: {
        main: {
          title: 'Did you lock your door?',
          introduction: 'This text comes from i18next and is provided in english.'
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToGerman: 'Deutsch',
            toggleToEnglish: 'English',
            goToPage2: 'Open page 2'
          }
        }
      },
      pl_PL: {
        main:{
          title: 'Zamnkąłeś drzwi ?',
          introduction: 'Ten text jest po polsku!!'
        },
        common: {
          currentLanguage: 'Aktualnym językiem jest "{{lng}}"'
        }
      }
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