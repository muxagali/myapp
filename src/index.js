import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';


console.log(state);

ReactDOM.render(
  <React.StrictMode>
    <App data={state} />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
