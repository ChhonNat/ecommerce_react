import React from 'react';
import CardProduct from './card-product';
import './product.css';

const Product = (props) => {
    const {
        dataCard,
        handleViewMore,
        headTitle,
    } = props;
    return (
        <>

            <main className="product my-5">
                <div className="wrapper">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="my-4">{headTitle ?? 'Browse by Category'}</h4>
                            </div>
                            <CardProduct
                                dataCard={dataCard}
                            />
                            <div className="col-12 text-center">
                                <a onClick={handleViewMore} className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Product;