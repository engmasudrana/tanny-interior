import React from 'react';
import {Container} from "react-bootstrap";
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <>
            <Container fluid={true} className="text-center p-2 bg-dark ">
               <img src={Logo} alt="logo"/>
            </Container>
        </>
    );
};

export default Header;