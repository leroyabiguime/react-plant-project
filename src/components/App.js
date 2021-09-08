// import logo from '../logo.svg';
import ShoppingList from './ShoppingList';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart'
import React from 'react';
import Questionform from './Questionform';
import Footer from './Footer';
function App() {
  return( 
    <React.Fragment>
      <Banner/>
      <Cart/>
      <ShoppingList/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
