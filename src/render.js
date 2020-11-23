import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App';
import {createUser } from './redux/state'


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} createUser={createUser} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
