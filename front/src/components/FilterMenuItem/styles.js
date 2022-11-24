import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  .checkbox,
  label {
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  label:hover > .checkbox,
  .checkbox {
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 1px solid white;
    border-radius: 4px;
    transition: box-shadow 0.2s, 0.2s ease-in-out;
    background-color: white;
  }

  .checkbox--active {
    background-color: #7f80dd;
    box-shadow: inset 0px 0px 0px 2px #a587d7;
    transition: box-shadow 0.2s, background 0.2s ease-in-out;
  }
`;
