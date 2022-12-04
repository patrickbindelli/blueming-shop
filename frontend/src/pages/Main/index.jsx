import React, { useState, useEffect } from "react";
import { Container, LateralContainer, Content, HBox, FullMenu } from "./styles";
import { Catalogue } from "../../components/Catalogue";
import { Header } from "../../components/Header";
import { LateralMenu } from "../../components/LateralMenu";
import useFetch from "../../hooks/useFetch";

export const Main = () => {
  
  const [isHidden, setIsHidden] = useState(true);
  const [checkedTipos, setCheckedTipos] = useState(new Map());
  const [checkedBandas, setCheckedBandas] = useState(new Map());

  const {data, error, loading, refetch} = useFetch(`/api/produtos/`, {data: {
    product: 'wwwwwwwwwwwwwwwwwwwwww'
  }})

  const handleSideBar = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsHidden(true);
    });
  }, []);

  if (!isHidden) {
    return (
      <FullMenu hidden={isHidden}>
        <LateralMenu onclick={handleSideBar} checkedBandas={checkedBandas} checkedTipos={checkedTipos}/>
      </FullMenu>
    );
  }

  return (
    <Container>
      <Header onclick={handleSideBar} />
      <HBox>
        <LateralContainer>
          <LateralMenu hidden={false} animate={false} checkedBandas={checkedBandas} checkedTipos={checkedTipos} onChange={refetch}/>
        </LateralContainer>
        <Content>
          <Catalogue data={data} loading={loading} error={error}/>
        </Content>
      </HBox>
    </Container>
  );
};
