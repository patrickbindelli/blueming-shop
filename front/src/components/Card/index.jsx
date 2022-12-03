import React from "react";
import { Container } from "./styles";

export const Card = ({name, price, cover}) => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={cover} />
      </div>
      <div className="info">
        <div className="title-wrapper">
          <span className="title">{name || 'undefined'}</span>
        </div>
        <div className="price-wrapper">
          <span className="price-title">Preço</span>
          <span className="price">{`R$${price}`}</span>
        </div>
      </div>
    </Container>
  );
};
