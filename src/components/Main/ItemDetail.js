import "./main.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({x}) => {
    return (
        <div className="card__detail" id={x.id}>
      <div className="card_product--title_principal">
        <h3 className="card__detail--title">{x.title}</h3>
        <p className="card__detail--desc">{x.description}</p>
      </div>
      <div className="card__detail--img">
        <img src={x.image} alt="Foto de producto"/>
      </div>
      <div className="card__detail--cta">
        <div className="price">${x.price}</div>
        <ItemCount stock={x.stock}/>
      </div>
    </div>
    )
};