import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import { MinecartLoaded, Person } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import logo from './../../assets/seephone-e1698080006890.png';
import './navbar.css';

const MyNavBar = (props) => {
    const {
        handleShow,
    } = props;

    const tmpOrderList = useSelector((state) => state.OrderListStore);
    const [notiProd, setNotiProd] = useState('');
    useEffect(() => {
        setNotiProd(tmpOrderList?.length);
    }, [tmpOrderList]);

    return (
        <header>
            <div className="container-xl fixed-top mt-3">
                <nav className="navbar navbar-expand-lg ec_navbar shadow-sm">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img style={{ height: '40px', width: 'auto' }} fill="none" src={logo} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/shop">Shop</a>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a> */}

                                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Computer</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Kayboard</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Headphone</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Blog</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <a href="#" className="btn btn-light me-2">
                                    <Person />
                                </a>
                                <Button onClick={handleShow} className="btn btn-light">
                                    <MinecartLoaded />
                                    <span style={{marginTop: "10px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {notiProd > 0
                                            ? notiProd > 99
                                                ? "99+"
                                                : notiProd
                                            : ""
                                        }
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default MyNavBar;