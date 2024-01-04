import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../../layout/footer/footer';
import CategorySection from '../../constant/catagory/cantagory';
import FeatureSection from '../../constant/fealture-products/fealture-products';
import HeroSection from '../../constant/hero-section/hero-section';
import Product from '../../constant/products/products';

const HomePage = () => {
  const dataCard = useSelector((state) => state?.productData)
  const handleViewMore = () => {
    alert("view more action");
  }

  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* catagory */}
      <CategorySection />

      {/* fealture products */}
      <FeatureSection />

      {/* all products */}
      <Product
        dataCard={dataCard}
        handleViewMore={handleViewMore}
      />

      {/* footer */}
      <Footer />
    </>
  )
}

export default HomePage;