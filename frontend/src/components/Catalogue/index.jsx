import React, {useEffect} from "react";
import { Container, Title, Content, LoadingContainer, ContentWrapper } from "./styles";
import { Card } from "../Card";
import {FiLoader} from 'react-icons/fi'
export const Catalogue = ({data, error, loading}) => {

  if(loading || error){
    return (
      <LoadingContainer>
        <div className="icon">
          <FiLoader size={70}/>
        </div>
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Title>
        <span>Nossos Produtos</span>
      </Title>
      <ContentWrapper>
      <Content>
        {data.length && data.map((produto, index) => {
          return(
            <Card key={index} name={produto.nome} price={produto.preco} cover={produto.imagem}/>
          )
        })}
      </Content>
      </ContentWrapper>
    </Container>
  );
};
