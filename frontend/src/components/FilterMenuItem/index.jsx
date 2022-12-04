import React, { useEffect, useState } from "react";
import { Container } from "./styles";

export const FilterMenuItem = ({id, label, checkedItems, onChange}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if(checkedItems.has(id)){
      console.log(checkedItems)
      setIsChecked(true)
    }
  }, [])

  const handleClick = () => {
    setIsChecked(!isChecked);
    if(checkedItems.has(id)){
      checkedItems.delete(id)
    }else{
      checkedItems.set(id)
    }
    onChange();
  }
  
  return (
    <Container>
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden={true}
        onClick={handleClick}
      />
      <label>
        <input
          type={"checkbox"}
          checked={isChecked}
          onChange={handleClick}
        />
        {label}
      </label>
    </Container>
  );
};
