import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../main/store';
import { setAutorization } from '../main/auth';
import { Router } from '../main/router';

import { langServerDetection, langBrowserDetection } from '../lib/common/lang';
import { authSetData, authGetCookieToken } from '../lib/common/auth';

import { NavigationObserver } from '../lib/common/navigation';

import '../assets/css/main.css';

class MyApp extends App {
  componentDidMount() {
    langBrowserDetection();
  }

  static async getInitialProps({ Component, ctx }) {
    langServerDetection(ctx);

    const token = authGetCookieToken(ctx);

    setAutorization(token);

    await Router({ ...ctx, token });

    ctx.store.dispatch(authSetData(token));

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, token })
      : { token };

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <NavigationObserver />
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: true })(MyApp);
