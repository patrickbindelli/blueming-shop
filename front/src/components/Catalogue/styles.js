import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  flex-grow: 3;
  overflow-y: auto;
  align-items: center;
  padding: 20px 50px 0px 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  @media only screen and (max-width: 1400px) {
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%) fit-content(
        100%
      );
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: fit-content(100%) fit-content(100%);
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: 100%;
    row-gap: 10px;
  }

  width: 100%;
  display: grid;
  column-gap: 40px;
  row-gap: 30px;
  justify-content: space-evenly;

  grid-template-columns:
    fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%)
    fit-content(100%);
`;
