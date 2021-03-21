import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Grid from './pages/Grid/Grid';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/Grid' exact>
          <Grid />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
