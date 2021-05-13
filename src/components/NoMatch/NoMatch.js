import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

const NoMatch = () => {
    return (
        <>
            <Container className="text-center text-danger p-5 mt-5">
                <Row>
                    <Col>
                        <h1>404</h1>
                        <h1>Page Not Found!</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default NoMatch;