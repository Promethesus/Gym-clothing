import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux'
import {Store, persistor} from "../src/Redux/Store"
import {PersistGate} from "redux-persist/integration/react"



ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

