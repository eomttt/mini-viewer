import React from 'react';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import App, { AppInitialProps } from 'next/app';

import initStore from '../store';

interface Props {
  store: any;
}

class MyApp extends App<Props> {
  public static async getInitialProps({ Component, ctx }): Promise<AppInitialProps> {
    console.log('NODE_ENV', process.env.NODE_ENV);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
