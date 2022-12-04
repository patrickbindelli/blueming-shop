import styled, {keyframes} from "styled-components";

const appearAnim = keyframes`
  from{
    transform: translateY(-10px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  user-select: none;
  @media only screen and (max-width: 650px) {
    width: 100%;
    border-radius: 0px;
  }

  animation: ${appearAnim} normal 0.4s 0.2s ease-in-out;
  position: relative;

  width: 190px; 
  height: 250px;
  background-color: white;
  border-radius: 5px;
  color: black;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }


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
      @media only screen and (max-width: 650px) {
        border-radius: 0px;
      }
      border-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    padding: 5px;

    display: flex;
    flex-direction: column;

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
`;
