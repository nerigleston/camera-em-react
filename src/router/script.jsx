import React from 'react';
import ReactDOM from 'react-dom';
import '../router/script.jsx'
import Home from '../page/pageInicial/script.jsx'
import '../page/pageInicial/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);