import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <h3>GO-FUEL</h3>
                        <p>GoFuel is a Nigerian leading Door to Door Fuel Delivery Service</p>
                        <div className="connect-text">
                            <h4>CONNECT WITH GOFUEL</h4>
                            <ul className="footer-icons">
                                <li><FaInstagram/></li>
                                <li><FaFacebook/></li>
                                <li><FaTwitter/></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <ul className="footer-links">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/about">GO-FUEL Service</a></li>
                            <li><a href="/services">Insurance</a></li>
                            <li><a href="/faq">Media</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>MEDIA INQUIRY</h3>
                        <p>Go-Fuel Nigeria, Inc. has dedicated media department. Members of the press are welcome to contact us re...</p>
                        <h3>Customer Support</h3>
                        <p>Contact Customer Support for questions onyour products, coaching, or events....</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;