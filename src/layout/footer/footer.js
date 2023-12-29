import React from 'react';
import logo from './../../assets/seephone-e1698080006890.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="navbar-brand mb-3" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>Sangkat Tumnub Tek, #136DEo, Mao Tse Toung Blvd (245), 12306</p>
                            <ul className="footer_menu">
                                <li><a href="#">(+855) 12 345 678</a></li>
                                <li><a href="#">info@example.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3">Quick Links</h5>
                            <ul className="footer_menu">
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3">Newsletters</h5>
                            <form>
                                <input type="text" className="form-control mb-2" placeholder="Email Address" />
                                    <button className="btn btn-dark">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="d-flex justify-content-between">
                                <p>Copyright ©2023 Spinlet</p>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/term-condition.html">Term & Condition</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;