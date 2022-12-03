import React, {useEffect} from "react";
import { Container, Title, Content, LoadingContainer, ContentWrapper } from "./styles";
import { Card } from "../Card";
import useFetch from "../../hooks/useFetch";
import {FiLoader} from 'react-icons/fi'
export const Catalogue = () => {
  const {data, error, loading} = useFetch('http://localhost:8000/produtos/')


  useEffect(() => {
    console.log(data);
  }, [data])

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
        {data.map((produto, index) => {
          return(
            <Card key={index} name={produto.nome} price={produto.preco} cover={produto.imagem}/>
          )
        })}    
      </Content>
      </ContentWrapper>
    </Container>
  );
};
