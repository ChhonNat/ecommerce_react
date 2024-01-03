import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import OrderSideBar from './components/constant/order-sidebar/OrderSideBar';
import AboutPage from './components/pages/about/home';
import ContactPage from './components/pages/contact/home';
import HomePage from './components/pages/home/home';
import PageNotFound from './components/pages/pageNotFound/PageNotFound';
import ProductDetail from './components/pages/product-detail/productDetail';
import ShopPage from './components/pages/shop/shop';
import MyNavBar from './layout/header/navbar';

function App() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Router>
      <MyNavBar 
        handleShow={handleShow}
      />
      <OrderSideBar
        handleClose={handleClose}
        show={show}
        headTitle={"Product Orders"}
        content={"Your order here!"}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop">
          <Route index element={<ShopPage />} />
          <Route path="product-details/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
