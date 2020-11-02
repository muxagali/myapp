import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom'

// Importing components...
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import {Login, Register } from './components/Auth/Auth';
import Messages from './components/Main/Messages/Messages';
import News from './components/Main/News/News';
import Product from './components/Main/Products/Products';
import { Users, Company } from './components/Main/UsersAndCompanies/UserCompany';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header here regular component */}
        <Header />

        {/* Routing here... */}
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/product" component={Product} />
          <Route path="/users" component={Users} />
          <Route path="/companies" component={Company} />
        {/* Menu here regular component */}
        <Menu />
      </BrowserRouter>
    </div>
  );
}



export default App;
