// import logo from '../logo.svg';
import ShoppingList from './ShoppingList';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart'
import React from 'react';
function App() {
  return( 
    <React.Fragment>
      <Banner/>
      <Cart/>
      <ShoppingList/>
    </React.Fragment>
  )
}

export default App;
