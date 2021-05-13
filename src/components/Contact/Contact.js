import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <>
            <Container className="mt-5 p-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="shadow m-auto p-4 rounded">
                        <Form>
                            <Form.Group>
                                <Form.Label className="serviceDescription">Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="serviceDescription">Email Address</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="serviceDescription">Message</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>
                            <Button variant="dark btn-block" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;