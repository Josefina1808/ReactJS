import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Img0 from "../../../img/bg-shop.jpg";
import "../main.css";

export const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img0} alt="First slide" />
          <Carousel.Caption>
            <h3>SunWater</h3>
            <p>Bienvenido a la tienda online de SunWater</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="main">
        <section className="solarizar">
          <h2>SOLARIZAR EL AGUA</h2>
          <div className="solarizar__content">
            <div className="solarizar__content--text">
              <p>
                Disfruta los beneficios del agua en su estado original. Cuando
                los rayos del sol atraviesan el vidrio azul, el agua obtiene una
                graduación de 7mil grados Kelvin. Esa fue la graduación que tuvo
                la tierra al ser creada y el agua que hoy tomamos estaba ahí.
              </p>
              <p>
                Llena tus botellas azules (con geometrías sagradas y palabras
                amorosas) con el agua que consumes a diario. Preferentemente
                directa del grifo o filtro, no plástico. Déjalas sin tapa para
                que evapore el cloro, cúbrelas con una servilleta de papel o
                gasa para que no absorba otra energía. En lo posible, pon música
                para armonizar el agua y el ambiente en que están. Usa
                frecuencia 432 hz, es la nueva frecuencia de la tierra, o bien
                frecuencias de Solfeggio. Puedes ver nuestras playlists
                recomendadas en la{" "}
                <strong>
                  galería musical
                </strong>
                . Deja las botellas expuestas al sol por al menos 3 horas, no
                hay máximo de tiempo, puedes dejarlas durante la noche si lo
                deseas. Una vez que las retiras del sol, esa vibración se
                mantiene por 24 horas. Puedes guardarla en el refrigerador y
                tomarla fría.
              </p>
              <p>
                Utiliza esta agua cargada de la energía del sol para beber,
                cocinar, para regar las plantas, etc. El agua que pasó por este
                proceso tiene la memoria de crear vida Recuerda que somos 80 %
                agua. Con el correr de los días, notarás la diferencia...
              </p>
            </div>
            <div className="solarizar__content--img img_radius"></div>
          </div>
        </section>

        <section className="codificar col-12">
          <h2>CODIFICAR EL AGUA</h2>
          <div className="codificar__content">
            <div className="codificar__content--text">
              <p>
                Armoniza el agua con Geometría Sagrada, la Flor de la Vida y
                Metatrón. Estos patrones, junto a la palabra que elijas, le
                darán la información a las moléculas del agua que luego será
                transmitida a tus células y eso recibirás en tu vida. Los pasos
                para codificar tu agua son:
              </p>
              <ol>
                <li>
                  1. Elegir una{" "}
                  <a href="#geometria-sagrada">geometría sagrada</a>, La Flor de
                  la Vida o Metatrón.
                </li>
                <li>
                  2. <a href="#intencionar">Intencionar el agua</a> , debes
                  elegir una palabra unida a la frase "Yosoy...". Por ejemplo:
                  YoSoyCoherencia.
                </li>
              </ol>
            </div>
            <div className="codificar__content--img img_radius"></div>
          </div>

          <article>
            <div className="geometria">
              <h3 id="#geometria-sagrada">Geometría sagrada</h3>

              <div className="geometria__content">
                <div className="geometria__content--img img_radius" id="flor">
                  <a
                    className="geometria__content--img--text"
                    href="https://es.wikipedia.org/wiki/Flor_de_la_Vida"
                    target="_blank" rel="noreferrer"
                  >
                    Flor de la Vida
                  </a>
                </div>

                <div
                  className="geometria__content--img img_radius"
                  id="metatron"
                >
                  <a
                    className="geometria__content--img--text"
                    href="https://en.wikipedia.org/wiki/Metatron#:~:text=In%20folkloristic%20tradition%2C%20he%20is,his%20transformation%20into%20an%20angel."
                    target="_blank" rel="noreferrer"
                  >
                    Metatrón
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="intencionar">
              <h3 id="#intencionar">Intecionar el agua</h3>

              <div className="intencionar__content">
                <p className="intencionar__content--text">
                  Las palabras que elijas son las que determinarán su
                  codificación. Podés elegir entre: Amor, Salud, Gracias,
                  Balance, Equilibrio, Sabiduría, Abundancia, Coherencia,
                  Conciencia y YoSoy. YoSoy puede ir combinada con cualquiera de
                  las anteriores o simplemente sola. No hay una regla de
                  palabras, simplemente las que desees son las correctas e
                  indicadas para vos.
                </p>
                <div className="intencionar__content--img img_radius"></div>
              </div>
            </div>
          </article>
        </section>
      </Container>
    </div>
  );
};
