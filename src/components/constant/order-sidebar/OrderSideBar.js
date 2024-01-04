import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OrderListGroup from './ListGroup/OrderListGroup';

const OrderSideBar = (props) => {
    const {
        handleClose,
        show,
        headTitle,
        content
    } = props;

    // select items all
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = (e) => {
        setSelectAll(e.target.checked);
    }

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
                            onChange={handleSelectAll}
                        />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        {content}
                        <OrderListGroup
                            selectAll={selectAll}
                        />
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OrderSideBar;