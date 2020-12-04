import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App';
import store from './redux/state'
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


serviceWorker.unregister();
