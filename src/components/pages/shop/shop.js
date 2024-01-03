import React from 'react';
import dataCard from '../../../Data-Store/card-data/dataCard';
import Footer from '../../../layout/footer/footer';
import Product from '../../constant/products/products';
import ImgBackground from './../../../assets/abstract_background.jpg';
import './shop.css';

const ShopPage = () => {
    const handleViewMore = () => {
        alert("View more action");
    }
    return (
        <>
            <main className="content_title">
                <div className="wrapper">
                    <div className="background">
                        <img src={ImgBackground} alt="" />
                    </div>
                    <div className="container-xl title">
                        <h1>Shop</h1>
                    </div>
                </div>
            </main>

            {/* all products */}
            <Product
                dataCard={dataCard}
                handleViewMore={handleViewMore}
            />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ShopPage;