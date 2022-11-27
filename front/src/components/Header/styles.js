import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
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
    @media only screen and (max-width: 600px) {
      display: block;
    }
    position: absolute;
    top: 5px;
    left: 15px;
    cursor: pointer;
    display: none;
  }
`;

export const Logo = styled.a`
  @media only screen and (max-width: 600px) {
    justify-content: center;
    height: 50px;
  }
  display: flex;
  height: 70px;

  cursor: pointer;
  width: 405px;
  img {
    border-radius: 10px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Middle = styled.div`
  flex-grow: 3;
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 0px 15px 0px;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    button {
      display: none;
    }
  }

  button {
    height: 30px;
    width: 60px;
    border: none;
    color: white;
    background-color: #9e86d8;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    :hover {
      background-color: #846eb9;
    }
  }

  .search-box {
    @media only screen and (max-width: 600px) {
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
    padding: 10px;

    input {
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
