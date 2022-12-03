import { useState, useEffect } from "react";
import { Container } from "./styles";
import { FilterMenu } from "../FilterMenu";
import { HiMenu } from "react-icons/hi";
export const LateralMenu = ({ onclick }) => {
  return (
    <Container>
      <HiMenu className="menu" size={40} onClick={onclick} />
      <div className="filtros-header">
        <span className="filtros-title">FILTROS</span>
      </div>
      <FilterMenu
        title={"Por Banda"}
        data={[
          { value: "BTS" },
          { value: "BLACKPINK" },
          { value: "EXO" },
          { value: "TWICE" },
        ]}
      />
      <FilterMenu
        title={"Por Produto"}
        data={[
          { value: "Adesivo" },
          { value: "Ecobag" },
          { value: "Bottons" },
          { value: "Camisas" },
        ]}
      />
    </Container>
  );
};
