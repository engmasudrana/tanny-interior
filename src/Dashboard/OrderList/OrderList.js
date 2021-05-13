import React, {useEffect, useState} from 'react';
import {Badge, Button, Col, Container, Row, Spinner, Table} from "react-bootstrap";

const OrderList = () => {
    const [orderlist, setOrderList] = useState([])

    useEffect(() =>{
        fetch('https://lit-shelf-63973.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    },[])

    return (
        <>
            <Container className="p-5 mt-5">
                <Row>
                    <Col lg={11} md={12} sm={12} className="card p-5" style={{marginLeft: '8rem'}}>
                        <div className="mb-3">
                            <Button variant="light">
                                Total Order <Badge variant="dark">{orderlist.length}</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                        {
                            orderlist.length === 0 && <Spinner animation="border" variant="secondary" />
                        }
                        <Table hover>
                            <thead>
                            <tr className="text-secondary" style={{fontSize: '13px'}}>
                                <th>Name</th>
                                <th>Price</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Payment Info</th>
                                <th>Order Time</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderlist.map(order =>
                                <tr className="text-secondary" style={{fontSize: '12px'}}>
                                    <td>{order.name}</td>
                                    <td>${order.price}</td>
                                    <td>{order.userName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.paymentId}</td>
                                    <td>{order.orderTime}</td>
                                    <Badge className="mt-3 ml-3" variant="success">Done</Badge>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OrderList;