import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  public render() {

    console.log('rendered on the server');

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#303030" />
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