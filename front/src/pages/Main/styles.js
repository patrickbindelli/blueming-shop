import styled from "styled-components";

export const Container = styled.div`
  width: 1600px;
  height: 100%;
  border: 1px solid white;
  border-radius: 10px 10px 0px 0px;
  background-color: #8080dd;

  display: flex;
  flex-direction: column;
`;

export const HBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  border-bottom: 1px solid white;
  min-height: 100px;
  display: flex;
  align-items: center;

  padding: 10px 30px 0px 30px;

  img {
    height: 80px;
    border-radius: 10px;
  }

  .logo {
    width: 405px;
  }

  .contato-wrapper {
    text-align: right;
    flex-grow: 3;
  }

  .contato {
    font-size: 20px;
    font-weight: 500;
  }

  .search {
    display: flex;
    gap: 10px;

    button {
      height: 30px;
      width: 60px;
      border: none;
      color: white;
      background-color: #9e86d8;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }

    .search-box {
      width: 380px;
      height: 30px;
      background-color: white;
      border-radius: 10px;

      input {
        height: 100%;
        width: 100%;
        padding: 15px;
        border: none;
        background-color: transparent;
        color: gray;
        :focus {
          outline: none;
        }
      }
    }
  }
`;

export const LateralContainer = styled.div`
  border-right: 1px solid white;
  width: 600px;
  display: flex;
  flex-direction: column;
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

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Catalogue = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 3;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  overflow: auto;

  gap: 30px;
  padding: 20px 0px 200px 0px;

  .catalogue-title-wrapper {
    width: 100%;
  }

  .catalogue-title {
    text-align: left;
    font-size: 36px;
    font-weight: 500;
    margin-left: 70px;
  }

  .cards {
    max-width: 100%;

    display: grid;
    grid-template-columns: 190px 190px 190px 190px;
    column-gap: 0px;
    row-gap: 32px;
    justify-content: space-evenly;
  }

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
