import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignupLogin from './pages/signup-login/signup-login.component.jsx';
import Header from './components/header/header.component.jsx';

function men(history){
  console.log(history);
  return(
    <div>Men Section</div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={ HomePage }/>
      <Route exact path='/men' component = { men }/>
      <Route exact path='/auth' component = { SignupLogin }/>
      <Route exact path='/shop' component = { ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
