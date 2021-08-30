import React from "react";
import "./main.css";
import Item from "./Item"
//import Item from "./Item";
//import IMG from "../../img/products/1.jpg";

export const ItemList = (props) => {
    
    return (
    <div className="productos main">
      <>
        {props.state.map((x) => (
          <Item x={x} />
        ))}
      </>
    </div>
  );
};