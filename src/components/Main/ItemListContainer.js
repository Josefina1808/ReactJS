import React from "react";
import Img1 from "../../img/bg-shop.jpg";
import { Carousel } from "react-bootstrap";
import "./main.css";


export const ItemListContainer = ({greeting}) => {
  return (
      <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>SunWater</h3>
        <p>{greeting}</p>
      </Carousel.Caption>
    </Carousel.Item>
      </Carousel>  
  );
}
