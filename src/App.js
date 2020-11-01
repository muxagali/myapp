import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

// Importing components...
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import {Login, Register } from './components/Auth/Auth';



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
        
        {/* Menu here regular component */}
        <Menu />
      </BrowserRouter>
    </div>
  );
}



export default App;
