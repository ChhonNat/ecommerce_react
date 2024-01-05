import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import CardProductOrder from '../../products/card-product-order/CardProductOrder';
import './OrderListGroup.css';


const OrderListGroup = (props) => {

    const {
        selectedItems,
        checkboxHandler,
        dataCard
    } = props;

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <ListGroup variant="flush">
            {
                dataCard?.map((item) => {
                    const {
                        id,
                        imgCard,
                        altCard,
                        titleCard,
                        priceDiscount,
                        originPrice,
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

                                <Trash className='trash_icon' />
                            </div>
                            <CardProductOrder
                                link={"#"}
                                img={imgCard}
                                alt={altCard}
                                title={titleCard}
                                date={"Jan 06 23"}
                                price={originPrice}
                                shipping={"Stardart shipping"}
                                count={count}
                                increment={increment}
                                decrement={decrement}
                            />
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}

export default OrderListGroup;
