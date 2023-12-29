import React from 'react';
import catagory from './../../../assets/category/index';
import './catagory.css';

const CategorySection = () => {
    return (
        <main className="category my-5">
            <div className="wrapper">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-4">Browse by Category</h4>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.iphone} alt="iphone" />
                                        <h6>Phone</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.usb} alt="usb" />
                                        <h6>Accessories</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.laptop} alt="labtop" />
                                        <h6>Computer</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.keyboard} alt="keyboard" />
                                        <h6>Keyboard</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.click} alt="click" />
                                        <h6>Mouse</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="card">
                                <a href="#">
                                    <div className="card-body">
                                        <img src={catagory?.headphone} alt="headphone" />
                                        <h6>Headphone</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CategorySection;
