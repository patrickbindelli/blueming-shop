import React from "react";
import { Container } from "./styles";
import { FilterMenuItem } from "../FilterMenuItem";

export const FilterMenu = ({ title, data, checkedItems, onChange}) => {
  return (
    <Container>
      <span className="title">{title}</span>
      {data.map((element) => {
        return <FilterMenuItem key={element.id} id={element.id} label={element.nome} checkedItems={checkedItems} onChange={onChange}/>;
      })}
    </Container>
  );
};
