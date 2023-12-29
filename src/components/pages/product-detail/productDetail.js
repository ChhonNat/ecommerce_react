import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import dataCard from '../../../Data-Store/card-data/dataCard';
import Footer from '../../../layout/footer/footer';
import CardProduct from '../../constant/products/card-product';
import backGround from './../../../assets/abstract_background.jpg';
import './productDetail.css';

const ProductDetail = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const handleAddToCard = () => {
        alert("your product " + count + " to card");
    }


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
        script.integrity = 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4';
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <main className="content_title">
                <div className="wrapper">
                    <div className="background">
                        <img src={backGround} alt="" />
                    </div>
                    <div className="container-xl title">
                        <h1>Apple Watch SE 40mm Alu Case/Storm Blue Sport Band 2023 -S/M</h1>
                    </div>
                </div>
            </main>

            <main className="product my-5">
                <div className="wrapper">
                    <div className="container-xl">
                        <div className="row my-5">
                            <div className="col-md-7 mt-4">
                                <div id="productCarouselImage" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z001A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z002A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z003A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z004A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z005A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z001A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </button>
                                        <button type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="1" aria-label="Slide 2">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z002A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </button>
                                        <button type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="2" aria-label="Slide 3">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z003A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </button>
                                        <button type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="3" aria-label="Slide 4">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z004A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </button>
                                        <button type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="4" aria-label="Slide 5">
                                            <img src="https://media.4rgos.it/i/Argos/3346620_R_Z005A?w=1280&h=720&qlt=45&fmt=avif" className="d-block w-100" alt="..." />
                                        </button>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#productCarouselImage" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#productCarouselImage" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 mt-4">
                                <div className="container-fluid product_detail">
                                    <h4>Apple Watch SE 40mm Alu Case/Storm Blue Sport Band 2023 -S/M</h4>
                                    <div className="rating mt-4">
                                        <span className="star_group">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </span>
                                        <span>(112)</span>
                                    </div>
                                    <div className="price mt-4">
                                        <span className="discount">$290.86</span>
                                        <span className="ori_price">$189.25</span>
                                    </div>
                                    <div className="product_info mt-4">
                                        <p>The Smart Stack and redesigned apps in watchOS 10 help you see more information at a glance. With features like Crash Detection and enhanced workout metrics, Apple Watch SE is better value than ever.</p>
                                        <p>SKU: <span className="product_sku">FW2345678</span></p>
                                    </div>
                                    <div className="item_btn_group mt-4">
                                        <button
                                            onClick={decrement}
                                            type="button"
                                            className={count < 1 ? "btn btn-light btn_decrease " : "btn btn-light "}
                                            disabled={count < 1}
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        {/* <input type="number" className="form-control text-center" min="1" step="1" value="1" /> */}
                                        <div
                                            className='p-3 fs-4'
                                        >
                                            {count}
                                        </div>
                                        <button
                                            onClick={increment}
                                            type="button"
                                            className="btn btn-light btn_increase"
                                        >
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleAddToCard}
                                        className="btn btn-primary mt-4"
                                    >
                                        <i className="bi bi-cart2 me-2"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5">
                                <h3>About this product</h3>
                                <p>Why Apple Watch SE &mdash; All the essentials to help you be motivated and active, keep connected, track your health and stay safe. The Smart Stack and redesigned apps in watchOS 10 help you see more information at a glance. With features like Crash Detection and enhanced workout metrics, Apple Watch SE is better value than ever. Apple Watch SE requires iPhone Xs or later with iOS 17 or later. Learn more about Apple&#39;s commitment to the environment at Apple&#39;s website.</p>
                                <p>Health And Safety Feature &mdash; Get help when you need it with Fall Detection, Crash Detection and Emergency SOS. Get deep insights into your health, including notifications if you have an irregular heart rhythm or an unusually high or low heart rate.</p>
                                <p>Water resistance rating of 50 metres. Three finishes. And a colour-matched back case made with a production process that reduces its carbon emissions.</p>
                                <p>A Powerful Fitness Partner &mdash; The Workout app gives you a range of ways to train plus advanced metrics for more insights about your workout performance. And Apple Watch comes with three months of Apple Fitness+ free.</p>
                                <p>Advanced Health Features &mdash; Get notifications if you have an irregular heart rhythm. See how much time you spent in REM, Core or Deep sleep with sleep stages. And take note of your state of mind to help build emotional awareness and resilience.</p>
                                <p>Connectivity</p>
                                <ul>
                                    <li>S8 SiP with 64-bit dual-core processor.</li>
                                    <li>32GB memory.</li>
                                    <li>iOS operating system.</li>
                                    <li>Bluetooth 5.3 connection.</li>
                                    <li>NFC connection.</li>
                                    <li>Wi-Fi.</li>
                                </ul>
                                <p>Display information</p>
                                <ul>
                                    <li>40mm Retina LTPO OLED screen.</li>
                                    <li>Touchscreen.</li>
                                </ul>
                                <p>Physical specification</p>
                                <ul>
                                    <li>Size: small.</li>
                                    <li>Watch size H44, W38, D10.7mm.</li>
                                    <li>Strap can be removed and replaced.</li>
                                    <li>Weight 33g.</li>
                                </ul>
                                <p>Features</p>
                                <ul>
                                    <li>Water resistant.</li>
                                    <li>Swimproof.</li>
                                    <li>Dust resistant.</li>
                                    <li>Scratch resistant.</li>
                                    <li>Compatible with apps from the Apple app store.</li>
                                    <li>Make calls.</li>
                                    <li>Answer calls.</li>
                                    <li>Read texts and reply to texts.</li>
                                    <li>Read emails and reply to emails.</li>
                                    <li>Receive social network notifications.</li>
                                    <li>View calendar.</li>
                                    <li>Displays weather.</li>
                                    <li>Music player.</li>
                                    <li>Heart rate monitor.</li>
                                    <li>Pedometer.</li>
                                    <li>Distance.</li>
                                    <li>Accelerometer.</li>
                                    <li>GPS.</li>
                                    <li>Calories.</li>
                                    <li>Sleep.</li>
                                    <li>Accessories included: USB-C magnetic fast charging cable, .</li>
                                    <li>Manufacturer&#39;s 1 year guarantee.</li>
                                    <li>EAN: 195949003844.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h4 className="my-4">Shop Similir</h4>
                            </div>
                            <CardProduct
                                dataCard={dataCard}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProductDetail;