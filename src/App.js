import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>This is Header component</h1>
    </div>
  )
}  

const Footer = () => {
  return (
    <div className="footer">
      <h1>This is Footer component</h1>
    </div>
  )
}  

export default App;
