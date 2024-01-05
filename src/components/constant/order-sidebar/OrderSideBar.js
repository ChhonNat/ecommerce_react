import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dataCard from '../../../Data-Store/card-data/dataCard';
import OrderListGroup from './ListGroup/OrderListGroup';

const OrderSideBar = (props) => {
    const {
        handleClose,
        show,
        headTitle,
        content
    } = props;

    const [data, setData] = useState(dataCard);

    // select items all
    const [selectAll, setSelectAll] = useState(false);

    const [selectedItems, setSelectedItems] = useState([])

    function checkboxHandler(e) {
        let isSelected = e.target.checked;
        let value = parseInt(e.target.value);

        if (isSelected) {
            setSelectedItems([...selectedItems, value])
        } else {
            setSelectedItems((prevData) => {
                return prevData.filter((id) => {
                    return id !== value
                })
            })
        }
    }

    function checkAllHandler(e) {

        setSelectAll(e.target.checked);
        if (data.length === selectedItems.length) {
            setSelectedItems([])
        } else if (!selectAll) {
            const postIds = data.map((item) => {
                return item.id
            })

            setSelectedItems(postIds)
        }
    }

    useEffect(() => {
        if (data.length !== selectedItems.length) {
            setSelectAll(false);
        }
    }, [selectedItems, data])

    return (
        <>
            <Offcanvas
                show={show}
                onHide={handleClose}
                backdrop="static"
                placement='end'
            >
                <Offcanvas.Header
                    closeButton
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "start"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Offcanvas.Title>{headTitle ?? "Header Title"}</Offcanvas.Title>
                        <Form.Check
                            style={{
                                marginTop: "12px"
                            }}
                            aria-label="option 1"
                            id='Select All'
                            label="Select All"
                            checked={selectAll}
                            onChange={checkAllHandler}
                        />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        {content}
                        <OrderListGroup
                            selectedItems={selectedItems}
                            checkboxHandler={checkboxHandler}
                            dataCard={data}
                        />
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OrderSideBar;