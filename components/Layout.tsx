import React from 'react';
import Head from 'next/head';

interface Props {
  styleText?: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, styleText }) => (
  <>
    <Head>
      <style>
        {styleText}
      </style>
    </Head>
    {children}
  </>
);

export default Layout;
