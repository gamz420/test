import { routesInit } from './router.core';

import { SignupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';

export const routes = {
  [SIGNUP_ROUTE_PATH]: SignupRouter,
};

export const Router = routesInit(routes);
