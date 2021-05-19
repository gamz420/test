import { redirect } from '../../../main/navigation/navigation.core';

export const authRedirectLogged = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (token) {
    if (res) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};

export const authRedirectPrivated = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (!token) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};
