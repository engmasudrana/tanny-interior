import React, { Fragment } from 'react';
import { Col, Container, Row, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid={true} className="footerBg shadow-lg">
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h4 className="footerTitle">Tanny-Interior</h4>
                            <p className="tagTitle">Lorem Ipsum has been the text <br/> cindustry's standard dummy <br/>
                                text nwhen an unknown printer <br/> make a type specimen book <br/> wt has survived not only five.
                            </p>
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">My Account</h1>
                            <Link className="footerDes" to="/noMatch">My Account</Link> <br />
                            <Link className="footerDes" to="/login">Login/Register</Link> <br />
                            <Link className="footerDes" to="/noMatch">Cart</Link> <br />
                            <Link className="footerDes" to="/noMatch">Order History</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                            <Link className="footerDes" to="/noMatch">Delivery</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Support</h1>
                            <Link className="footerDes" to="/noMatch">How To Shop</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                            <Link className="footerDes" to="/noMatch">Returns</Link> <br />
                            <Link className="footerDes" to="/noMatch">Delivery</Link> <br />
                            <Link className="footerDes" to="/noMatch">Privacy Policy</Link> <br />
                            <Link className="footerDes" to="/noMatch">Terms & Condition</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <div className="footerAddress">
                                <p> <FontAwesomeIcon icon={faHouseDamage} /> Gulshan-1, Dhaka, Bangladesh.</p>
                                <p> <FontAwesomeIcon icon={faEnvelope} /> contact@gmail.com</p>
                                <p> <FontAwesomeIcon icon={faMobile} /> +880 881254822</p>
                            </div>
                            <div className="iconList">
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcVisa} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcMastercard} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcPaypal} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcStripe} /></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-border py-4 mt-3">
                    <div className="container">
                        <span className="copyright-info">Copyright © 2021 Tanny-Interior. All Rights Reserved.</span>
                        <span className="designer-info">Design & Develop by:</span>
                        <a className="design-by" href="http://mranainfo.com/" target="_blank"> Masud Rana</a>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default Footer;