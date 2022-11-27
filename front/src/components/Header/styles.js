import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }

  border-bottom: 1px solid white;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  position: relative;

  padding: 10px 30px 0px 30px;

  .contato-wrapper {
    text-align: right;
    flex-grow: 3;
  }

  .contato {
    font-size: 20px;
    font-weight: 500;
  }

  .menu {
    @media only screen and (max-width: 650px) {
      display: block;
    }
    position: absolute;
    top: 5px;
    left: 15px;
    cursor: pointer;
    display: none;
  }
`;

export const Logo = styled.div`
  @media only screen and (max-width: 650px) {
    justify-content: center;
  }
  display: flex;
  align-items: center;
  flex-grow: 2;

  .logo-link {
    img {
      @media only screen and (max-width: 650px) {
        height: 50px;
      }
      height: 70px;
      border-radius: 10px;
    }
  }
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const Middle = styled.div`
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
  display: flex;
  flex-grow: 5;
  gap: 10px;
  padding: 0px 15px 0px;
  @media only screen and (max-width: 650px) {
    justify-content: center;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
  }

  .search-box {
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
    width: 380px;
    height: 30px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
      margin: 0px 5px 0px 5px;
      height: 100%;
      width: 100%;
      border: none;
      background-color: transparent;
      color: gray;
      :focus {
        outline: none;
      }
    }

    svg {
      fill: gray;
      transform: scale(-1, 1);
    }
  }
`;
