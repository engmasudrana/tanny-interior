import React, {useEffect, useState} from 'react';
import {Container, Button, Col, Row, Table, Spinner, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageService = () => {
    const [manageProduct, setManageProduct] = useState([])

    useEffect(() => {
        fetch('https://lit-shelf-63973.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])

    // Delete Product Item
    const deleteItem = id => {
        fetch(`https://lit-shelf-63973.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                alert('delete successfully');
            })
    }
    return (
        <>
            <Container className=" p-5 mt-5">
               <Row>
                   <Col lg={10} md={10} sm={12} className="card p-3" style={{marginLeft: '11rem'}}>
                       <div className="mb-3">
                           <Button variant="light">
                               Total Service <Badge variant="dark">{manageProduct.length}</Badge>
                               <span className="sr-only">unread messages</span>
                           </Button>
                       </div>
                       {
                           manageProduct.length === 0 && <Spinner animation="border" variant="secondary" />
                       }
                       <Table hover>
                           <thead>
                           <tr className="text-secondary" style={{fontSize: '14px'}}>
                               <th>Name</th>
                               <th>Icon</th>
                               <th>Price</th>
                               <th>Action</th>
                           </tr>
                           </thead>
                           <tbody>
                           {manageProduct.map(pd =>
                               <tr className="text-secondary" style={{fontSize: '14px'}}>
                                   <td>{pd.name}</td>
                                   <td><img style={{height: '30px'}} src={pd.icon} alt=""/></td>
                                   <td>${pd.price}</td>
                                   <td>
                                       <Button variant="success btn-sm"><FontAwesomeIcon className="" icon={faEdit} /></Button>
                                       <Button onClick={() => deleteItem(pd._id)} variant="danger btn-sm" className="ml-2"><FontAwesomeIcon className="" icon={faTrash} /></Button>
                                   </td>
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

export default ManageService;