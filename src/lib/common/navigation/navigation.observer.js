import React, { useEffect } from 'react';
import { router } from '../../../main/navigation';
import { useDispatch } from 'react-redux';

import { setPageLoading } from './navigation.action';

export const NavigationObserver = () => {
  const dispatch = useDispatch();

  const routeChangeStart = () => {
    dispatch(setPageLoading(true));
  };

  const routeChangeComplete = () => {
    dispatch(setPageLoading(false));
  };

  const routeChangeError = () => {
    dispatch(setPageLoading(false));
  };

  useEffect(() => {
    dispatch(setPageLoading(false));

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeError);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeError);
    };
  });

  return null;
};
