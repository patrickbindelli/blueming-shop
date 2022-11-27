import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  transition: transform 0.2s ease-in-out;
  background-color: #9e86d8;
  height: 100%;
  position: relative;
  .filtros-header {
    border-bottom: 1px solid white;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;

    .filtros-title {
      font-size: 24px;
      font-weight: 500;
    }
  }

  .menu {
    @media only screen and (max-width: 650px) {
      display: block;
    }
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    display: none;
  }
`;
