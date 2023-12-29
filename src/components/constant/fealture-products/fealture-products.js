import React from 'react';
import headPhone from '../../../assets/headphone_blue.png';
import './fealtureSection.css';

const FeatureSection = () => {
    return (
        <main className="feature">
            <div className="wrapper">
                <div className="container-xl">
                    <div className="wrapper_inner">
                        <div className="row">
                            <div className="col-md-6 feature_info d-flex flex-column justify-content-center align-items-start">
                                <h3>Spectacular Savings Extravaganza: Your Ticket to Discounts Galore!</h3>
                                <p className="my-4">🌟 Dive into a world of unbeatable deals! Shop now and enjoy exclusive discounts 
                                    on your favorite products. Limited-time offers that you won't want to miss. Hurry, 
                                    grab your savings before they vanish! 🚀 #ShopSmart #SaveBig</p>
                                <a href="pages/shop.html" className="btn btn-light">Shop Now</a>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <img src={headPhone} className="img-fluid mt-4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FeatureSection;
