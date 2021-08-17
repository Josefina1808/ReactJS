import "./main.css";
import { ItemCount } from "./ItemCount";

function ItemDetail (id, title, description, image, price, stock) {
    return (
        <div className="card__detail" id={id}>
      <div className="card_product--title_principal">
        <h3 className="card__detail--title">{title}</h3>
        <p className="card__detail--desc">{description}</p>
      </div>
      <div className="card__detail--img">
        <img src={image} alt="Foto de producto"/>
      </div>
      <div className="card__detail--cta">
        <div className="price">${price}</div>
        <ItemCount stock={stock}/>
      </div>
    </div>
    )
}
export default ItemDetail();