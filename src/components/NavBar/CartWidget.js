import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom"


export const CartWidget = () => {
    
    return (
        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
    );
};

