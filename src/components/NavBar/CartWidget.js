import React from 'react';
import { Nav } from "react-bootstrap";
import './navbar.css';


export const CartWidget = () => {
    return (
        <Nav.Link href="cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
    );
};

