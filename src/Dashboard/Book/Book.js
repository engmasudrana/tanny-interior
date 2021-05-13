import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {userContext} from "../../route/AppRoute";
import {useParams} from "react-router-dom";
import ProcessPayment from "../../Payment/ProcessPayment/ProcessPayment";

const Book = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [serviceDetail, setServiceDetail] = useState({});
    const { id } = useParams();

    const [bookingData, setBookingData] = useState(null);

    const { name, price } = serviceDetail;
    useEffect(() => {
        fetch(`https://lit-shelf-63973.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetail(data[0]))
    }, [id]);

    const onSubmit = data => {
        console.log(data)
        setBookingData(data)
    };

    const  handlePaymentSuccess= (paymentId) => {
        const orderDetails = {
            ...bookingData,
            ...serviceDetail,
            paymentId,
            orderTime: new Date()
        }
        fetch('https://lit-shelf-63973.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your placed successfully')
                }
            })
    }
    return (
        <>
            <Container className="p-5 mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-5 m-auto rounded card" style={{display: bookingData ? 'none': 'block'}}>
                        <h2 className="text-center mb-4">Book</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" value={name} {...register("name")} /> <br/>
                            <input className="form-control" value={price} {...register("price")} /> <br/>
                            <input className="form-control" value={loggedInUser.name || loggedInUser.displayName} {...register("userName")} /> <br/>
                            <input className="form-control" value={loggedInUser.email} {...register("email")} /> <br/>
                            <input className="form-control" placeholder="phone" {...register("phone")} /> <br/>
                            <input className="btn btn-dark btn-block" type="submit" />
                        </form>
                    </Col>
                    <Col lg={6} md={6} sm={12} style={{display: bookingData ? 'block': 'none'}}  className="m-auto card p-5">
                        <h6 className="mb-4">Please Pay for me</h6>
                        <ProcessPayment handlePayment={handlePaymentSuccess} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Book;