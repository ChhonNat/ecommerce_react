import React from 'react';
import { useLocation } from 'react-router-dom';

const CardProduct = (props) => {

    const {
        dataCard,
        handleAddCart
    } = props;
    const location = useLocation();
    const { pathname } = location;
    const parentPath = pathname === '/' ? '/shop' : pathname;

    return (
        <>
            {
                dataCard?.map((item, index) => {
                    const { id, imgCard, altCard, titleCard, priceDiscount, originPrice } = item;
                    return (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card card_product">
                                <div className="card-body">
                                    <a href={`${parentPath}/product-details/${id}`}>
                                        <img src={imgCard} alt={altCard} />
                                        <h6 className="title">{titleCard}</h6>
                                        <div className="price">
                                            <span className="discount">{priceDiscount}</span>
                                            <span className="ori_price">{originPrice}</span>
                                        </div>
                                    </a>
                                    <div className="mt-auto">
                                        <button onClick={() => handleAddCart(id)} className="btn btn-light mt-3 w-100">Add to Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardProduct;