import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import { Container, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export const OrderForm = () => {
  const { cart } = useContext(CartContext);
  const { getSubtotal, getTotal } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      repeat_email: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("No es un email válido")
        .required()
        .oneOf([Yup.ref("repeat_email")], "Los emails ingresados no son iguales"),
      repeat_email: Yup.string().email().required().oneOf([Yup.ref("email")], "Los emails ingresados no son iguales"),
      phone: Yup.string().required(),
    }),

    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Container className="main">
      <h1>Orden de compra</h1>
      <>
        <h2>Detalle carrito</h2>
        {cart.length !== 0 && (
          <Container className="cart__header">
            <div className="cart__header--info">Detalle</div>
            <div className="cart__header--actions">
              <div>Cantidad</div>
              <div>Precio</div>
              <div>Subtotal</div>
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
                <div className="price">{counter}</div>
                <div className="price">${item.price}</div>
                <div className="price">${getSubtotal(counter, item.price)}</div>
              </div>
            </Container>
          ))}
        {cart.length !== 0 && (
          <div className="cart__footer">Total ${getTotal()}</div>
        )}
        {cart.length === 0 && (
          <h3>
            Su carrito está vacio. Visite nuestros{" "}
            <Link to="productos/all">productos</Link>{" "}
          </h3>
        )}
      </>

      <h2>Datos comprador</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre y apellido"
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name}
            value={formik.values.name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar email"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email}
            value={formik.values.email}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Reingresar email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Repetir email"
            name="repeat_email"
            onChange={formik.handleChange}
            error={formik.errors.repeat_email}
            value={formik.values.repeat_email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingresar teléfono"
            name="phone"
            onChange={formik.handleChange}
            error={formik.errors.phone}
            value={formik.values.phone}
          />
        </Form.Group>

        <Button type="submit">Enviar</Button>
        <Button type="buttom" onClick={formik.handleReset}>Vaciar formulario</Button>
      </Form>
    </Container>
  );
};
