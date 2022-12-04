import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 1620px;
  height: 100%;
  min-width: 0px;
  border: 1px solid white;
  border-radius: 10px 10px 0px 0px;
  background-color: #8080dd;
  display: flex;
  flex-direction: column;
`;

export const FullMenu = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  transition: transform 0.5s ease-in-out;
  
  span,label {
    animation: ${slideIn} .5s forwards ease-in-out;
  }

`;

export const HBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const LateralContainer = styled.div`
  border-right: 1px solid white;
  width: 40%;
  min-width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
