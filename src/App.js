import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { setOrderList } from './Data-Store/globle-state/OrderList';
import OrderSideBar from './components/constant/order-sidebar/OrderSideBar';
import AboutPage from './components/pages/about/home';
import ContactPage from './components/pages/contact/home';
import HomePage from './components/pages/home/home';
import PageNotFound from './components/pages/pageNotFound/PageNotFound';
import ProductDetail from './components/pages/product-detail/productDetail';
import ShopPage from './components/pages/shop/shop';
import MyNavBar from './layout/header/navbar';

function App() {

  const dispatch = useDispatch();
  // handle open Order lists
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(setOrderList());
    setShow(true);
  };

  useEffect(() => {
    dispatch(setOrderList());
  }, [dispatch])

  return (
    <Router>
      <MyNavBar
        handleShow={handleShow}
      />
      <OrderSideBar
        handleClose={handleClose}
        show={show}
        headTitle={"Shopping Cart (23)"}
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
