import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './Summary.css'

const Summary = () => {
    return (
        <>
            <Container className="text-center p-4" style={{marginTop: '100px'}}>
                <h3 className="summary-title">4 Easy Steps</h3>
                <h3 className="summary-sub-title">Get Interior Design</h3>
                <Row>
                    <Col lg={3} md={6} sm={12} className="border-left">
                        <h1 className="planing-number">01</h1>
                        <h5>Request Sending</h5>
                        <p className="text-des">Mauris libero ex, ullamcorper in facilisis sagittis, gravida in ipsum.</p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="border-left">
                        <h1 className="planing-number">02</h1>
                        <h5>Project Planning</h5>
                        <p className="text-des">Nulla lacinia, felis eget cursus aliquet, tellus mauris gravida ligula.</p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="border-left">
                        <h1 className="planing-number">03</h1>
                        <h5>Design Creating</h5>
                        <p className="text-des">Sed pulvinar urna sit amet felis condimentum dapibus.</p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="border-left">
                        <h1 className="planing-number">04</h1>
                        <h5>Enjoying Work</h5>
                        <p className="text-des">Duis non arcu ante. Quisque convallis, nulla sit amet scelerisque sollicitudin.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Summary;