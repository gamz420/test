import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

import { getInitialStyleProps } from '../main/css';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styleElement = await getInitialStyleProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {styleElement}
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
