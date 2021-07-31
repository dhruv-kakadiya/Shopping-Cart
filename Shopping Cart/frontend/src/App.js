import React from 'react';
import './CSS/App.css';
import './CSS/header.css';
import './CSS/footer.css';
import './CSS/sale.css';
import './CSS/carousel.css';
import './CSS/categories.css';
import './CSS/item.css';
import './CSS/cart.css';
import './CSS/auth.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';


function App() {
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );  
}

export default App;
