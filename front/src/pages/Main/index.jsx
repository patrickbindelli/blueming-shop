import React from "react";
import {
  Container,
  LateralContainer,
  MenuContainer,
  Content,
  HBox,
} from "./styles";
import { Catalogue } from "../../components/Catalogue";
import { FilterMenu } from "../../components/FilterMenu";
import { Header } from "../../components/Header";

export const Main = () => {
  return (
    <Container>
      <Header />
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
          <Catalogue />
        </Content>
      </HBox>
    </Container>
  );
};
