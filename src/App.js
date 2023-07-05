import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </>
  );
}

export default App;
