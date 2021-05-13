import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import aboutImg from '../../images/interior.jpg'
import './About.css';

const About = () => {
    return (
        <>
            <Container className="p-3" style={{marginTop: '80px'}}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h6 className="sub-title">WHAT WE DO?</h6> <hr/>
                        <h3 className="about-title">Design for life</h3>
                        <p className="about-des">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined
                            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                        </p>
                        <Button variant="dark">OUR CONCEPT</Button>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" src={aboutImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;