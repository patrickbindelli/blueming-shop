import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  }

  html, body, #root, .App {
    height: 100%;
  }

  body{
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    color: white;
    background: linear-gradient(107.46deg, #7F80DD 0.5%, #A587D7 100%);
    overflow-y: hidden;
  }

  .App{
    display: flex;
    padding-top: 20px;
    align-items: flex-start;
    justify-content: center;
  }
`;
