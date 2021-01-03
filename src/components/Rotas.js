import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CronoPage from '../pages/cronometro';
import UploadPage from '../pages/upload';
import HomePage from '../pages/home';

const Rotas = () => {
  return (
    <Switch>
      <Route path="/upload">
        <UploadPage />
      </Route>
      <Route path="/cronometro">
        <CronoPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Rotas;
