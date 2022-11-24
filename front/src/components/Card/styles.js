import styled from "styled-components";

export const Container = styled.div`
  width: 190px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  color: black;
  transition: transform 0.2s ease-in-out;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 2px solid white;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  .img-wrapper {
    border-radius: 5px;
    width: 100%;
    height: 170px;

    img {
      border-radius: 5px;
      height: 100%;
      width: 100%;
    }
  }

  .info {
    padding: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price-wrapper {
      display: flex;
      flex-direction: column;
    }
    .title,
    .price {
      font-weight: 400;
      font-size: 15px;
    }
    .price-title {
      font-weight: 400;
      color: gray;
      font-size: 12px;
    }
  }

  :hover {
    transform: scale(1.1);
  }
`;
