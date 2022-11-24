import React from "react";
import { Container } from "./styles";
import mock from "./mock.png";

export const Card = () => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={mock} />
      </div>
      <div className="info">
        <div className="title-wrapper">
          <span className="title">Polaroid</span>
        </div>
        <div className="price-wrapper">
          <span className="price-title">Preço</span>
          <span className="price">R$ 50,00</span>
        </div>
      </div>
    </Container>
  );
};
