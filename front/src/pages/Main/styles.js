import styled from "styled-components";

export const Container = styled.div`
  width: 1620px;
  min-width: 0px;
  border: 1px solid white;
  border-radius: 10px 10px 0px 0px;
  background-color: #8080dd;

  display: flex;
  flex-direction: column;
`;

export const HBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LateralContainer = styled.div`
  border-right: 1px solid white;
  width: 40%;
  min-width: 2 00px;

  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  background-color: #9e86d8;
  height: 100%;
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
`;

export const Content = styled.a`
  display: flex;
  justify-content: center;
`;
