import {
  LANG_DEFAULT,
  LANG_SUPPORTED,
  COOKIE_LANG,
  LANG,
} from '../../../main/lang/lang.constant';
import { universalLanguageDetect } from '@unly/universal-language-detector';

import { getBrowserCookie, getCookie } from '../../../main/cookie';
import { i18n } from '../../../main/lang';
import { LANG_ACTION_TYPE } from './lang.constant';

export const langDetermineLanguage = (req: any) =>
  universalLanguageDetect({
    supportedLanguages: LANG_SUPPORTED,
    fallbackLanguage: LANG_DEFAULT,
    acceptLanguageHeader: req.headers['accept-language'],
  });

export const langBrowserDetection = () => {
  if (typeof window !== 'undefined') {
    const language = getBrowserCookie(COOKIE_LANG);
    if (language) {
      i18n.changeLanguage(language.toLowerCase());
    }
  }
};

export const langServerDetection = (ctx: any) => {
  if (typeof window === 'undefined') {
    const cookieLanguage = getCookie(COOKIE_LANG, ctx);
    if (!cookieLanguage) {
      const language = langDetermineLanguage(ctx.req);

      ctx.res.writeHead(302, {
        Location: `${ctx.req.url}`,
        'Set-Cookie': `${COOKIE_LANG}=${language}`,
      });

      ctx.res.end();

      i18n.changeLanguage(language);
      ctx.store.dispatch(langUpdateLanguage(language));
    } else {
      i18n.changeLanguage(cookieLanguage);
      ctx.store.dispatch(langUpdateLanguage(cookieLanguage));
    }
  }
};

export const langUpdateLanguage = (lang: string | LANG) => {
  i18n.changeLanguage(lang);

  return {
    type: LANG_ACTION_TYPE.SET_LANG,
    active: lang,
  };
};
