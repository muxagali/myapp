import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App';
import state, {createUser, subscribe } from './redux/state'
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} createUser={createUser} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)


serviceWorker.unregister();
