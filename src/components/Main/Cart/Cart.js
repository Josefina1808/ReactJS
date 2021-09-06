import React, { useContext} from "react";
import { Container } from "react-bootstrap";
import "./Cart.css";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log("cart", cart);
  const { removeItem, clearCart, getSubtotal, getTotal, itemQuantity} = useContext(CartContext);

  /* const handleFinish = () => {
    const newOrder = {
      buyer: {
        name: "Josefina",
        phone: "2644148548",
        email: "josefinaesna@gmail.com",
      },
      items: cart.map(({id, title, price}) => ({
        id, title, price,
      })), 
    };
  }; */

  return (
    <Container>
      <h1>Carrito</h1>
      {cart.length === 0 && (
        <h3>
          Su carrito está vacio. Visite nuestros{" "}
          <Link to="productos/all">productos</Link>{" "}
        </h3>
      )}
      {cart.length !== 0 && (
        <Container className="cart__header">
          <div className="cart__header--info">Detalle</div>
          <div className="cart__header--actions">
            <div>Añadir</div>
            <div>Cantidad</div>
            <div>Precio</div>
            <div>Subtotal</div>
            <div>Eliminar</div>
          </div>
        </Container>
      )}
      {cart.length !== 0 &&
        cart.map(({ item, counter }) => (
          <Container className="card__cart" id={item.id}>
            <div className="card__cart--info">
              <div className="card__cart--img">
                <img src={item.image} alt="Foto de producto" />
              </div>
              <div className="card_product--title_principal">
                <h3 className="card__cart--title">{item.title}</h3>
                <p className="card__cart--desc">{item.description}</p>
              </div>
            </div>
            <div className="card__cart--actions">
              <ItemCount item={item} />
              <div className="price">{counter}</div>
              <div className="price">${item.price}</div>
              <div className="price">${getSubtotal(counter, item.price)}</div>
              <button
                className="btn_remove btn"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          </Container>
        ))}
      {cart.length !== 0 && (
        <Container className="cart__footer">
          <button
            className="btn"
            onClick={clearCart}>
            Vaciar carrito
          </button>
          <div>
            Total ${getTotal()}
          </div>
          <button
            className="btn"
           /*  onClick={handleFinish} */>
            Finalizar compra
          </button>
        </Container>
      )}
    </Container>
  );
};

/* {cart.length > 0 && (
  <Link className="card__cart--btn_finish" to="/cart">
    Finalizar compra
  </Link>
)} */
