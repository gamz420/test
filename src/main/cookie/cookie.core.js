import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value);
  }
};

export const getCookie = (key, ctx) => {
  const token = nextCookie(ctx)[key];
  return token === 'null' ? null : token;
};

export const getBrowserCookie = (key) => {
  if (process.browser) {
    const token = cookie.get(key);
    return token === 'null' ? null : token;
  }

  return {};
};
