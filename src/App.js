import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/pages/about/home';
import ContactPage from './components/pages/contact/home';
import HomePage from './components/pages/home/home';
import ProductDetail from './components/pages/product-detail/productDetail';
import ShopPage from './components/pages/shop/home';
import MyNavBar from './layout/header/navbar';

function App() {
  return (
    <>
      <Router>
        <MyNavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details/1" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
