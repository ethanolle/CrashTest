import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
