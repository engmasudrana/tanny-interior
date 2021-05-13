import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import ServicesDetail from "../ServicesDetail/ServicesDetail";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lit-shelf-63973.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <Container fluid={true} className="service-bg text-center p-5" style={{marginTop: '100px'}}>
                <Container>
                    <h6 className="service-title">Our Services</h6>
                    <h3 className="mb-5">What We Offer</h3>
                    <Row>
                        {
                            services.map(service  => <ServicesDetail service={service} key={service._id}> </ServicesDetail>)
                        }
                    </Row>
                </Container>
            </Container>

        </>
    );
};

export default Services;