import React from 'react';

export const PublicRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
  nav: Nav,
}) => {
  return <Layout nav={<Nav />} header={<Header />} children={<Component />} footer={<Footer />} />;
};
