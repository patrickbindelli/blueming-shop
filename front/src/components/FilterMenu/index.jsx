import React from "react";
import { Container } from "./styles";
import { FilterMenuItem } from "../FilterMenuItem";

export const FilterMenu = ({ title, data }) => {
  return (
    <Container>
      <span className="title">{title}</span>
      {data.map((e, index) => {
        return <FilterMenuItem key={index} label={e.value} ch />;
      })}
    </Container>
  );
};
