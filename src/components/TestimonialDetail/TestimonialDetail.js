import React from 'react';
import {Col} from "react-bootstrap";
import './TestimonialDetail.css';

const TestimonialDetail = ({review}) => {
    return (
        <>
            <Col lg={6} md={6} sm={12} className="m-auto">
                <div className="">
                    <img className="circleImg mt-2" src={review.image} alt="client image"/>
                    <h5 className="mt-3">{review.name}</h5>
                    <h6 className="review-des">{review.designation}</h6>
                    <p className="clientDes">{review.des}</p>
                </div>
            </Col>
        </>
    );
};

export default TestimonialDetail;