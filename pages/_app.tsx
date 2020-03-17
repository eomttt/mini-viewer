import React from 'react';
import App, { AppInitialProps } from 'next/app';

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }): Promise<AppInitialProps> {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
