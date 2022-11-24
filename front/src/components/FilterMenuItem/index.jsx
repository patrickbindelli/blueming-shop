import React, { useState } from "react";
import { Container } from "./styles";

export const FilterMenuItem = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden={true}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label>
        <input
          type={"checkbox"}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {label}
      </label>
    </Container>
  );
};
