
import './App.css';
import Particles from './Particles';
import Product from './Product';
import Cart from './Cart'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; 

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider> 
          <Routes>
            <Route path="/" element={<Particles />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
