import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  }

  body{
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    color: white;
    background: linear-gradient(107.46deg, #7F80DD 0.5%, #A587D7 100%);
    height: 100vh;
    
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #8080dd;
      border: 1px solid white;
    }
  }

  .App{
    display: flex;
    max-height: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
  }
`;
