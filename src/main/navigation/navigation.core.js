import NextjsRouter from 'next/router';

export const router = NextjsRouter;

export const redirect = (pathname, config = {}) => {
  const {
    local = true,
    query,
    as = pathname,
    params,
    scrollTop = true,
    shallow,
  } = config;

  if (params) {
    return router
      .push(pathname(), pathname(params), {
        shallow,
        query,
      })
      .then(() => scrollToTop(scrollTop));
  }

  if (local) {
    return router
      .push({ pathname, as, query, shallow })
      .then(() => scrollToTop(scrollTop));
  }

  window.location.href = pathname;
};

export const scrollToTop = (isScrollToTop) => {
  if (isScrollToTop) {
    window.scrollTo(0, 0);
  }
};

export const setLinkRedirect = (path, confirg) => (e) => {
  e.preventDefault();
  redirect(path, confirg);
};

export const getQuery = (id) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = router.query[id];

  if (!data) return null;
  if (data === 'true') return true;
  if (data === 'false') return false;

  return data;
};

export const scrollTo = (elementId, offset = 0) => {
  if (elementId) {
    return window.scrollBy({
      top:
        document.getElementById(elementId).offsetTop -
        document.documentElement.scrollTop -
        offset,
      behavior: 'smooth',
    });
  }
  return null;
};
