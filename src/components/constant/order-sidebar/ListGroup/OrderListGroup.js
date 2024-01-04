import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import dataCard from '../../../../Data-Store/card-data/dataCard';
import CardProductOrder from '../../products/card-product-order/CardProductOrder';
import './OrderListGroup.css';


const OrderListGroup = (props) => {

    const {
        selectAll,
    } = props;

    // each select item
    const [selectItem, setSelectItem] = useState(false);
    const handleSelectEachItem = (e) => {
        setSelectItem(e.target.checked);
    };
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
                                <Form.Check
                                    aria-label="option 1"
                                    checked={selectAll ?? selectItem}
                                    onChange={handleSelectEachItem}
                                />
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
