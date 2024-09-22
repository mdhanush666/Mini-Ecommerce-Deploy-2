
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetails';
import Cart from './pages/Cart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

 

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' pauseOnHover={false} autoClose={2000} />
          <Header cartItems={cartItems} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );



}

export default App;
