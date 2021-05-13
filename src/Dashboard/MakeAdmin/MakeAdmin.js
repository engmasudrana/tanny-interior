import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
       fetch('https://lit-shelf-63973.herokuapp.com/makeAdmin',{
           method: "POST",
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify(data)
       })
           .then(res => res.json())
           .then(data = alert('Make Admin Successfully'))
    };

    return (
        <>
            <Container className="p-5 mt-5">
              <Row>
                  <Col lg={5} md={6} sm={12} className="m-auto card p-4">
                      <h3 className="text-center mb-4 text-secondary">Make Admin</h3>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <label>Email address</label>
                          <input className="form-control" type="email" placeholder="example@gmail.com"  {...register("email", )} /> <br/>
                          <input className="btn btn-secondary btn-block" type="submit" />
                      </form>
                  </Col>
              </Row>
            </Container>
        </>
    );
};

export default MakeAdmin;