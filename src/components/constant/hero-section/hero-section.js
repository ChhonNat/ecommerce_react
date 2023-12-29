import React from 'react';
import backgroundHero from './../../../assets/backgroundHero.jpg';
import headPhoneImg from './../../../assets/headphone_blue.png';
import './hero.css';

const HeroSection = () => {
    return (
        <main className="hero">
            <div className="wrapper">
                <div className="background">
                    <img src={backgroundHero} alt="hero" />
                </div>
                <div className="container-fluid feature_background">
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">
                            <img src={headPhoneImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid feature_info">
                    <div className="container-xl h-100">
                        <div className="row d-flex align-items-center h-100">
                            <div className="col-md-6">
                                <h1>Unleash the Savings Storm: Mega Discounts Await!</h1>
                                <p className="my-4">🌟 Dive into a world of unbeatable deals! Shop now and enjoy exclusive discounts
                                    on your favorite products. Limited-time offers that you won't want to miss. Hurry,
                                    grab your savings before they vanish! 🚀 #ShopSmart #SaveBig</p>
                                <a href="/shop" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
