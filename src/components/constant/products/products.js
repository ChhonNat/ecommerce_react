import React from 'react';
import { useDispatch } from 'react-redux';
import { setOrderList } from '../../../Data-Store/globle-state/OrderList';
import CardProduct from './card-product';
import './product.css';

const Product = (props) => {
    const {
        dataCard,
        handleViewMore,
        headTitle,
    } = props;

    // dispatch
    const dispatch = useDispatch();

    // handle add data to store localstorage
    const handleAddToCard = (id) => {
        const holdData = JSON.parse(localStorage.getItem('orderList')) || []; // Retrieve existing data from localStorage

        const existingItem = holdData.find(item => item.id === id);
        if (existingItem) {
            // If the item already exists, update its originQty
            const updatedData = holdData.map(item => {
                if (item.id === existingItem.id) {
                    return {
                        ...item,
                        originQty: item.originQty + 1,
                    };
                }
                return item;
            });

            localStorage.setItem('orderList', JSON.stringify(updatedData));
        } else {
            const tmpDataCard = dataCard?.find(item => item?.id === id);
            const newItem = {
                id: tmpDataCard?.id,
                img: tmpDataCard?.imgCard,
                alt: tmpDataCard?.altCard,
                titleCard: tmpDataCard?.titleCard,
                originPrice: tmpDataCard?.originPrice,
                originQty: 1,
                shipping: "Free shipping",
            };

            const changeKeyData = [...holdData, newItem];
            console.log(changeKeyData);
            localStorage.setItem('orderList', JSON.stringify(changeKeyData));
        }

        dispatch(setOrderList());
    };

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
                                handleAddCart={handleAddToCard}
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