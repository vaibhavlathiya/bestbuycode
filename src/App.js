import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

// import Home from './Home';
// import About from './About';
import  Header from './common/Navbar/Header';
import  Footer from './common/Footer/Footer';
import Cart from './common/Cart/Cart';
import Pages from './components/Pages/Pages';
import FData from './components/FData';
import Sdata from './components/Shop/Sdata';
import Products from './components/Products/Products';

/*  Register Page Componenet Import 
 import  Register from './components/Register/Register';
import Username from './components/Register/Username';
import Password from './components/Register/Password';
import Profile from './components/Register/Profile';
import Recovery from './components/Register/Recovery';
import Reset from './components/Register/Reset';
import PageNotFound from './components/Register/PageNotFound';
// import  Carousel  from './components/carousel/Carousel'; */
import Username from './components/Register/Username';



/**  Root Routes  *

const router = createBrowserRouter([
  {
    path: '/Username',
    element: <Username></Username>
  },
  {
    path: '/Register',
    element: <Register></Register>
  },
  {
    path: '/Password',
    element: <Password></Password>
  },
  {
    path: '/Profile',
    element: <Profile></Profile>
  },
  {
    path: '/Recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/Reset',
    element: <Reset></Reset>
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  },
]);*/

function App() {
  
  // step 1: //fecth data from database 

  const { productItems } = FData

  const { shopItems } = Sdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) =>
      (item.id === productExit.id?
        {...productExit,qty:productExit.qty+1} : item )))
    } else {
      setCartItem([...cartItem, { ...product, qty : 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeItem = (product) => {
    const productExit = cartItem.filter(item => item.id !== product.id);
    setCartItem(productExit)
  }



  return (
   <>
  <Router>
      <Header cartItem={cartItem} />
        <Routes>
         
          <Route path='/Username' element={<Username />} exact> 
            
          </Route>
          <Route path='/Products' element={<Products productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} exact> 
            
          </Route>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} exact> 
            {/* <Pages productItems={productItems} addToCart={addToCart} /> */}
          </Route>
          <Route path='/Cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem} />} exact> 
            {/* <Cart cartItem={cartItem} addToCart={addToCart} /> */}
          </Route>
        </Routes>
        <Footer />
    </Router>


    {/* <main>
        <RouterProvider router={router}></RouterProvider>
   </main>  */}
   </> 
  );
}

export default App;
