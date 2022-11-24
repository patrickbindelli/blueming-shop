import React from "react";
import logo from "./logo2.svg";
import {
  Container,
  Header,
  LateralContainer,
  Catalogue,
  MenuContainer,
  Content,
  HBox,
} from "./styles";
import { FilterMenu } from "../../components/FilterMenu";
import { Card } from "../../components/Card";

export const Main = () => {
  return (
    <Container>
      <Header>
        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="search">
          <button>Buscar</button>
          <div className="search-box">
            <input placeholder="Procurar produto..." />
          </div>
        </div>
        <div className="contato-wrapper">
          <span className="contato">Entre em contato pelo nosso WhatsApp</span>
        </div>
      </Header>
      <HBox>
        <LateralContainer>
          <MenuContainer>
            <div className="filtros-header">
              <span className="filtros-title">FILTROS</span>
            </div>
            <FilterMenu
              title={"Por Bandas"}
              data={[
                { value: "BTS" },
                { value: "BLACKPINK" },
                { value: "EXO" },
                { value: "TWICE" },
              ]}
            />
            <FilterMenu
              title={"Por Produtos"}
              data={[
                { value: "Adesivo" },
                { value: "Ecobag" },
                { value: "Bottons" },
                { value: "Camisas" },
              ]}
            />
          </MenuContainer>
        </LateralContainer>
        <Content>
          <Catalogue>
            <div className="catalogue-title-wrapper">
              <span className="catalogue-title">Produtos</span>
            </div>
            <div className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </Catalogue>
        </Content>
      </HBox>
    </Container>
  );
};
