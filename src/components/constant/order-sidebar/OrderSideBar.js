import Offcanvas from 'react-bootstrap/Offcanvas';
import OrderListGroup from './ListGroup/OrderListGroup';

const OrderSideBar = (props) => {
    const {
        handleClose,
        show,
        headTitle,
        content
    } = props;

    return (
        <>
            <Offcanvas
                show={show}
                onHide={handleClose}
                backdrop="static"
                placement='end'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{headTitle ?? "Header Title"}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        {content}
                        <OrderListGroup />
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OrderSideBar;