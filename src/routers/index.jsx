import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout, BlankLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';

import { Header, Footer, Nav } from '../components';
import { Home, Login } from '../containers';

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
        <Route
          exact={true}
          path={'/login'}
          element={
            <PublicRouter
              component={Login}
              layout={BlankLayout}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
