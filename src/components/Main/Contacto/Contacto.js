import React from "react";
import { Container } from "react-bootstrap";
import "./Contacto.css";

export const Contacto = () => {
  return (
    <div>
      <section className="contacto container main">
        <Container>
          <div className="contacto__texto">
            <h2>CONTÁCTANOS</h2>
            <p>
              Hablemos por{" "}
              <a href="https://www.instagram.com/sunwater.ar/">Instagram</a> o{" "}
              <a href="https://wa.me/5491153192246?text=Hola+SunWater%21+%E2%98%80%F0%9F%92%A7">
                WhatsApp
              </a>
              .
            </p>
          </div>
        </Container>

        <div className="contacto__redes">
          <div>
            <a href="https://www.instagram.com/sunwater.ar/" target="_blanck">
              <i className="fab fa-instagram-square fa-5x"></i>
            </a>
            <a
              href="https://www.instagram.com/sunwater.ar/"
              className="contacto__redes--texto"
              target="_blanck"
            >
              @sunwater.ar
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/5491153192246?text=Hola+SunWater%21+%E2%98%80%F0%9F%92%A7"
              target="_blanck"
            >
              <i className="fab fa-whatsapp-square fa-5x"></i>
            </a>
            <a
              href="https://wa.me/5491153192246?text=Hola+SunWater%21+%E2%98%80%F0%9F%92%A7"
              className="contacto__redes--texto"
              target="_blanck"
            >
              SunWater
            </a>
          </div>
        </div>
      </section>

      <section className="redes">
        <div className="redes__div">
          <h2>SEGUINOS EN INSTAGRAM</h2>
          <h2 className="redes__div--dots">. . . . . </h2>
          <div className="redes__div--instagram">
            <a href="https://www.instagram.com/sunwater.ar/" target="_blanck">
              <i className="fab fa-instagram-square fa-5x"></i>
            </a>
            <a
              href="https://www.instagram.com/sunwater.ar/"
              target="_blanck"
              className="redes__div--instagram--link"
            >
              @sunwater.ar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
