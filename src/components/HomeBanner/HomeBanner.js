import React from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <Container fluid={true} className="topFixedBanner p-0" >
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="topTitle">Tanny Interior<br/> Design Agency
                                </h1>

                                <p className="home-des mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim tempor incididunt <br/>
                                    ut labore et dolore magna aliqua.Ut enim ad minim, quis nostrud exercitation.
                                </p>
                                <Link to="/noMatch"><Button variant="primary">More Info</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default HomeBanner;