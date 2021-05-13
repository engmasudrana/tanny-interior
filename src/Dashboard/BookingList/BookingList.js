import React, {useContext, useEffect, useState} from 'react';
import {Badge, Button, Col, Container, Row} from "react-bootstrap";
import {userContext} from "../../route/AppRoute";

const BookingList = () => {
    const [loggedInUser] = useContext(userContext)
    const [bookingList, setBookingList] = useState([])

    useEffect(() => {
        fetch('https://lit-shelf-63973.herokuapp.com/order?email=' + (loggedInUser.email))
            .then(res =>res.json())
            .then(data => setBookingList(data))
    },[])
    return (
        <>
           <Container className="text-center p-5 mt-5 " style={{marginLeft: '13rem'}}>
               <div className="mb-3 ml-2 text-justify">
                   <Button variant="light">
                       Booking List  <Badge variant="dark">{bookingList.length}</Badge>
                       <span className="sr-only">unread messages</span>
                   </Button>
               </div>
               <Row>
                   {
                       bookingList.map(list =>
                           <Col lg={4} md={6} sm={12}>
                               <div className="shadow-sm  rounded p-4 m-2">
                                   <img className="service-icon" src={list.icon} alt=""/>
                                   <Badge className="float-right" variant="dark">Done</Badge>
                                   <h5 className="mt-2">{list.name}</h5>
                                   <p style={{fontSize: '13px'}}>{list.description}</p>
                               </div>
                           </Col>
                       )
                   }
               </Row>
           </Container>
        </>
    );
};

export default BookingList;