import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import trendOne from '../../images/trends-01.png'
import trendTwo from '../../images/trends-02.png'
import './Intro.css';

const Intro = () => {
    return (
        <>
            <Container className="p-3" style={{marginTop: '120px'}}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="trend-bg">

                       <div className="intro-box">
                           <h1 className="intro-title">We follow the trends</h1>
                           <h2 className="intro-sub-title">of world interior design and bring <br/> them to reality</h2>

                          <div className="text-box">
                              <p className="intro-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                          </div>

                       </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} className="">
                        <img className="w-25" src={trendTwo} alt=""/>
                       <img className="w-100" src={trendOne} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Intro;