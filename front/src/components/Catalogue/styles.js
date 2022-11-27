import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  align-items: center;
  padding: 20px 50px 200px 50px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.25);
    background-color: #9e86d8;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #8181dd;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  @media only screen and (max-width: 1900px) {
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%) fit-content(
        100%
      );
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: fit-content(100%) fit-content(100%);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: fit-content(100%);
  }

  display: grid;
  column-gap: 40px;
  row-gap: 30px;
  justify-content: space-evenly;

  grid-template-columns:
    fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%)
    fit-content(100%);
`;
