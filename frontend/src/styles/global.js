import { createGlobalStyle, keyframes } from "styled-components";

const appearOpacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

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
  
  }

  html, body, .App{
    height: 100vh;
    overflow: hidden;
  }

  .App{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 10px 0px 10px;
    opacity: 0;
    animation: ${appearOpacity} 0.2s forwards 0.2s ease-in-out;
  }
`;
