import React from 'react';
import Head from 'next/head';

interface Props {
  styleLinks?: string[];
}

const Layout: React.FunctionComponent<Props> = ({ children, styleLinks }) => (
  <>
    <Head>
      {styleLinks && styleLinks.map((styleLink) => <link rel="stylesheet" href={styleLink} key={styleLink} />)}
    </Head>
    {children}
  </>
);

export default Layout;
