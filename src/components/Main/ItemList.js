import React from "react";
import "./main.css";
import Item from "./Item"
import IMG from "../../img/products/1.jpg";

export const ItemList = () => {
    return (
        <div className="productos">
            <Item id="12" title="Botella Metatrón"  description="Botella azul para solarizar" price="890" stock="6" image={IMG}/>
        </div>
    )
}
