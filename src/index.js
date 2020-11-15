import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
  [
    {
      "id": 1,
      "name": "Mukhagali Aryn",
      "age": 20,
      "country": "Kazakhstan"
    },
    {
      "id": 2,
      "name": "Qadyr Ali",
      "age": 20,
      "country": "USA"
    },
    {
      "id": 3,
      "name": "Nurdaylet Dikhanbay",
      "age": 20,
      "country": "Uzbekistan"
    }
 ],
  
 [
    {
      "id": 1,
      "name": "abaystreet",
      "resource": "web platform for trades"
    },
    {
      "id": 2,
      "name": "kolesa",
      "resource": "web store for cars"
    },
    {
      "id": 3,
      "name": "kaspikz",
      "resource": "bank"
    }
 ]
]

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
