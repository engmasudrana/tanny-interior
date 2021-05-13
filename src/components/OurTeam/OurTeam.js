import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import memberOne from '../../images/team1.jpg'
import memberTwo from '../../images/team2.jpg'
import memberThree from '../../images/team3.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './OurTeam.css';

const teamData = [
    {
        image: memberOne,
        name: 'Rebecca Ruth',
        Designation: 'Architect'
    },
    {
        image: memberTwo,
        name: 'Elizabeth Paul',
        Designation: 'Designer'
    },
    {
        image: memberThree,
        name: 'Austin Daern',
        Designation: 'Architect'
    }
]

const OurTeam = () => {
    return (
        <>
            <Container className="text-center p-3" style={{marginTop: '80px'}}>
                <h6 className="service-title">MEET US</h6>
                <h3 className="team-sub-title">Our Design Team</h3>
                <Row>
                    {
                        teamData.map(data =>
                            <Col lg={4} md={6} sm={12}>
                               <div className="shadow-sm rounded p-3">
                                   <img className="team-img" src={data.image} alt=""/>
                                   <h4 className="member-name">{data.name}</h4>
                                   <h5 className="member-des">{data.Designation}</h5>
                                   <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                                   <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                                   <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                                   <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                               </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default OurTeam;