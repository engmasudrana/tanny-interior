import React from 'react';
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import './ServicesDetail.css';

const ServicesDetail = (props) => {
    const { name, price, description, icon, _id} = props.service;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div className="service-card p-4">
                    <h4 className="price float-right">${price}</h4>
                    <img className="service-icon" src={icon} alt=""/>
                    <h4 className="title mt-2">{name}</h4>

                    <p className="service-des">{description}</p>
                    <Link to={"/book/" + _id} ><Button variant="outline-dark btn-sm">Get Service</Button></Link>
                </div>
            </Col>
        </>
    );
};

export default ServicesDetail;