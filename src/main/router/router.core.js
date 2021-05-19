function initRouter(routes) {
  return async (path, ctx) => {
    const routerHandlers = routes[path] || null;

    if (routerHandlers !== null) {
      await routerHandlers(ctx);
    }
  };
}

export function routesInit(routes) {
  const routeSwitch = initRouter(routes);

  return async (ctx) => {
    await routeSwitch(ctx.pathname, ctx);
  };
}
