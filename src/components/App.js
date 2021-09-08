import logo from '../logo.svg';
import ShoppingList from './ShoppingList';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart'
import React from 'react';
import Questionform from './Questionform';
import Footer from './Footer';
import { useState } from 'react/cjs/react.development';
function App() {
  const [cart, updateCart] = useState([])
  return( 
    <div>
      <Banner> 
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison de la jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart}/> 
   
      <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer/>
    </div>
  )
}

export default App;
