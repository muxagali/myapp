import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'

// Importing components...
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import {Login, Register } from './components/Auth/Auth';
import Messages from './components/Main/Messages/Messages';
import News from './components/Main/News/News';
import Product from './components/Main/Products/Products';
import { Users, Company } from './components/Main/UsersAndCompanies/UserCompany';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header here regular component */}
        <Header />

        {/* Routing here... */}
          <Route path="/" render={() => <Main/>}/>
          <Route path="/login" render={() => <Login />}/>
          <Route path="/register" render={() => <Register createUser={props.createUser} />}/>
          
          <Route path="/messages" render={() => <Messages messages={props.data.messages}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/product" render={() => <Product/>}/>
          <Route path="/users" render={() => <Users users={props.data.users} />}/>
          <Route path="/companies" render={() => <Company companies={props.data.companies} />}/>
        {/* ...... */}

        {/* Menu here regular component */}
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
