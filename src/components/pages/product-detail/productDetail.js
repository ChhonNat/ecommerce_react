import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import dataCard from '../../../Data-Store/card-data/dataCard';
import { ImgsCarousel } from '../../../Data-Store/card-data/dataCarousel';
import { setOrderList } from '../../../Data-Store/globle-state/OrderList';
import Footer from '../../../layout/footer/footer';
import CarouiselProductDetail from '../../constant/carousel/carousel-product-detail';
import HeroSectionProductDetail from '../../constant/hero-section/hero-section-productDetail';
import CountItem from '../../constant/product-detail/CountItem';
import AboutProductDetail from '../../constant/product-detail/about-product-detail';
import CardProductDetial from '../../constant/products/CardProductDetial';
import backGround from './../../../assets/abstract_background.jpg';
import './productDetail.css';

const ProductDetail = () => {

    // redux called
    const dispatch = useDispatch();
    

    // data carousel
    const [imgCarousel, setImgCarousel] = useState();
    const [dataProductDetail, setDataProductDetail] = useState();

    // detect curret path url
    let { id } = useParams();

    // qty of product
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    // handle add data to store localstorage
    const [tmpAddData, setTmpAddData] = useState([]);
    const handleAddToCard = () => {
        const holdData = JSON.parse(localStorage.getItem('orderList')) || []; // Retrieve existing data from localStorage
        const newItem = {
            id: dataProductDetail?.id,
            img: dataProductDetail?.imgCard,
            alt: dataProductDetail?.altCard,
            titleCard: dataProductDetail?.titleCard,
            originPrice: dataProductDetail?.originPrice,
            originQty: count,
            shipping: "Free shipping",
        };
        const updatedData = [...holdData, newItem];

        localStorage.setItem('orderList', JSON.stringify(updatedData));
        dispatch(setOrderList());
    };



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



    useEffect(() => {
        if (dataCard.length) {
            const dataFound = dataCard.find(item => item.id == id);
            if (dataFound) {
                const modifiedStar = ["-fill", "-fill", "-half", "-half", ""];
                setDataProductDetail({
                    ...dataFound,
                    ...ImgsCarousel,
                    Star: modifiedStar,
                    StarCount: '122',
                    subTitleCard: "The Smart Stack and redesigned apps in watchOS 10 help you see more information at a glance. With features like Crash Detection and enhanced workout metrics, Apple Watch SE is better value than ever.",
                    sku: 'FW2345678'
                });
            } else {
                console.log('Data not found for id:', id);
            }
        }
    }, [dataCard, id, ImgsCarousel]);

    return (
        <>
            <HeroSectionProductDetail
                backGround={backGround}
                title={"Apple Watch SE 40mm Alu Case/Storm Blue Sport Band 2023 -S/M"}
            />

            <main className="product my-5">
                <div className="wrapper">
                    <div className="container-xl">
                        <div className="row my-5">
                            <CarouiselProductDetail
                                imgs={ImgsCarousel}
                            />
                            <div className="col-md-5 mt-4">
                                <div className="container-fluid product_detail">
                                    <h4>{dataProductDetail?.titleCard ?? 'Title'}</h4>
                                    <div className="rating mt-4">
                                        <span className="star_group">
                                            {
                                                dataProductDetail?.Star?.map((star, index) => {
                                                    return (
                                                        <i key={index} className={`bi bi-star${star}`}></i>
                                                    )
                                                })
                                            }
                                        </span>
                                        <span>{dataProductDetail?.StarCount ?? 0}</span>
                                    </div>
                                    <div className="price mt-4">
                                        <span className="discount">{dataProductDetail?.priceDiscount ?? "Origin Price"}</span>
                                        <span className="ori_price">{dataProductDetail?.originPrice ?? "discout Price"}</span>
                                    </div>
                                    <div className="product_info mt-4">
                                        <p>{dataProductDetail?.subTitleCard ?? "Sub title"}</p>
                                        <p>SKU: <span className="product_sku">{dataProductDetail?.sku ?? "SKU"}</span></p>
                                    </div>
                                    <CountItem
                                        decrement={decrement}
                                        count={count}
                                        increment={increment}
                                    />
                                    <button
                                        onClick={handleAddToCard}
                                        className="btn btn-primary mt-4"
                                    >
                                        <i className="bi bi-cart2 me-2"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5">
                                <AboutProductDetail />
                            </div>
                        </div>

                        {/* product similar */}
                        <div className="row">
                            <div className="col-12">
                                <h4 className="my-4">Shop Similir</h4>
                            </div>
                            <CardProductDetial
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