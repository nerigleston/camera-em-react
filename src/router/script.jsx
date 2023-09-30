import React from 'react';
import ReactDOM from 'react-dom';
import '../router/script.jsx'
import Home from '../Page/pageInicial/script.jsx'
import '../Page/pageInicial/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);