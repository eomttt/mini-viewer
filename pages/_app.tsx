/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import App, { AppInitialProps, AppContext } from 'next/app';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';

import initStore from '../store';

interface AppProps {
  store: Store;
}

class MyApp extends App<AppProps> {
  public static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    console.log('NODE_ENV', process.env.NODE_ENV);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render(): JSX.Element {
    const client = new ApolloClient({
      fetch,
    });
    const { Component, pageProps, store } = this.props;
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withRedux(initStore)(MyApp);
