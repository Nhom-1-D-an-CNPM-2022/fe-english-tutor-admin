import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';

import { Header, Footer, Nav } from '../components';
import { Home } from '../containers';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path={'/'}
          element={
            <PublicRouter
              component={Home}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
              nav={Nav}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
