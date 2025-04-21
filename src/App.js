import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProductList from './components/ProductList'
import Login from './components/Login'
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProduct />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
