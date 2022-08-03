import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Produtos/>
  </React.StrictMode>
);

