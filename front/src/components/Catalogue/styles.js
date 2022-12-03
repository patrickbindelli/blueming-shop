import styled, {keyframes} from "styled-components";

const appearAnim = keyframes`
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    transform: scale(1);
    opacity: 1;
  }
`;

const appearOpacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const rotatingAnim = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  animation: ${appearOpacity} .5s .2s forwards ease-in-out;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0px 0px 0px 30px;

  @media only screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
 
  @media only screen and (max-width: 650px) {
    grid-template-columns: 100%;
    row-gap: 10px;
  }

  position: absolute;
  padding: 30px;
  left: 0;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  column-gap: 40px;
  row-gap: 30px;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
      width: 5px;
    }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: white;
    border: 1px solid white;
  }
  
`;

export const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .icon{
    margin-top: 100px;
    opacity: 0;
    animation: ${appearAnim} .5s .2s forwards ease-in-out;
  }
  
  svg{
    animation: ${rotatingAnim} 2s infinite linear;
  }
`;
