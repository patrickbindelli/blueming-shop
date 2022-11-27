import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
    0%{
        opacity: 0;
        transform: translate(-200%);
    }
    50%{
        opacity: 0;
        transform: translate(-200%);
    }
    100%{
        opacity: 1;
        transform: translate(1);
    }
`;

export const Container = styled.div`
  width: 1620px;
  min-width: 0px;
  border: 1px solid white;
  border-radius: 10px 10px 0px 0px;
  background-color: #8080dd;

  display: flex;
  flex-direction: column;
`;

export const FullMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: transform 0.5s ease-in-out;

  ${(props) => {
    if (props.hidden) {
      return css`
        transform: translate(-200%);
      `;
    } else {
      return css`
        transform: translate(1);
      `;
    }
  }}
`;

export const HBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LateralContainer = styled.div`
  border-right: 1px solid white;
  width: 40%;
  min-width: 200px;

  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
`;
