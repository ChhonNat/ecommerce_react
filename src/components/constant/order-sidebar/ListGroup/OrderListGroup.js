import React, { useEffect, useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { setDataCardUsing } from '../../../../Data-Store/globle-state/DataCardUsing';
import { setOrderList } from '../../../../Data-Store/globle-state/OrderList';
import CardProductOrder from '../../products/card-product-order/CardProductOrder';
import './OrderListGroup.css';


const OrderListGroup = (props) => {

    const {
        selectedItems,
        checkboxHandler,
        dataCard
    } = props;

    const dispatch = useDispatch();
    // get data from store
    const DataCardUsing = useSelector((state) => state.DataCardUsing);
    const tmpOrderList = useSelector((state) => state.OrderListStore);

    // console.log(tmpOrderList);
    const [count, setCount] = useState(0);
    const [tmpQty, setTmpQty] = useState({});

    useEffect(() => {
        const dataCardIds = dataCard.map(item => item.id);
        if (dataCardIds.includes(DataCardUsing?.id)) {
            console.log(DataCardUsing?.qty);
        }
    }, [DataCardUsing, dataCard]);

    const increment = (id, oldQty) => {
        setCount(prevCount => prevCount + 1);
        let qty = oldQty + 1;
        const holdActionQty = { id: id, qty: qty };
        dispatch(setDataCardUsing(holdActionQty));
        // console.log(qty);
    }

    // useEffect(() => {
    //     if (count > 0) {

    //     }
    // }, [count]);

    const decrement = (id, oldQty) => {
        setCount(prevCount => prevCount - 1);
    }

    // Handle remove item
    const handleRemoveItem = (id) => {
        const holdData = JSON.parse(localStorage.getItem('orderList')) || []; // Retrieve existing data from localStorage

        const existingItem = holdData.filter(item => item.id !== id);
        if (existingItem.length) {
            const updatedData = [...holdData, existingItem];

            localStorage.setItem('orderList', JSON.stringify(updatedData));
        }

        dispatch(setOrderList());
    }

    return (
        <ListGroup variant="flush">
            {
                tmpOrderList?.map((item) => {
                    const {
                        id,
                        img,
                        alt,
                        titleCard,
                        priceDiscount,
                        originPrice,
                        shipping,
                        originQty

                    } = item;
                    return (
                        <ListGroup.Item key={id}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}
                            >

                                <label>
                                    <input type="checkbox" checked={selectedItems.includes(item.id)} value={item.id} onChange={checkboxHandler} />
                                </label>

                                <Trash onClick={() => handleRemoveItem(id)} className='trash_icon' />
                            </div>
                            <CardProductOrder
                                link={"#"}
                                img={img}
                                alt={alt}
                                title={titleCard}
                                date={"Jan 06 23"}
                                price={originPrice}
                                shipping={shipping ?? "Stardart shipping"}
                                count={DataCardUsing?.id === id ? DataCardUsing?.id : originQty}
                                increment={() => increment(item.id, DataCardUsing?.id)}
                                decrement={() => decrement(item.id, DataCardUsing?.id)}
                            />
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}

export default OrderListGroup;
