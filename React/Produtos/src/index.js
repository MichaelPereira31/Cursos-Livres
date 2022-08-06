import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos'

const root = ReactDOM.createRoot(document.getElementById('root'));
let Pagina = Home

const {pathname} = window.location
if(pathname === '/produtos') {
  Pagina = Produtos
} else {
  Pagina = Home
}

root.render(
  <React.StrictMode>
    <Header/>
    <Pagina/>
  </React.StrictMode>
);

