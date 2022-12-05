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
  const [searchValue, setSearchValue] = useState('');

  const {data, error, loading, refetch} = useFetch(`/api/produtos/?search=${searchValue}&types=${Array.from(checkedTipos.keys())}&bands=${Array.from(checkedBandas.keys())}`)

  const handleSideBar = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    refetch();
  }, [checkedTipos, checkedBandas, searchValue])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsHidden(true);
    });
  }, []);

  if (!isHidden) {
    return (
      <FullMenu hidden={isHidden}>
        <LateralMenu onclick={handleSideBar} checkedBandas={checkedBandas} checkedTipos={checkedTipos} setCheckedTipos={setCheckedTipos} setCheckedBandas={setCheckedBandas}/>
      </FullMenu>
    );
  }

  return (
    <Container>
      <Header onclick={handleSideBar} setSearchValue={setSearchValue}/>
      <HBox>
        <LateralContainer>
          <LateralMenu hidden={false} animate={false} checkedBandas={checkedBandas} checkedTipos={checkedTipos} setCheckedTipos={setCheckedTipos} setCheckedBandas={setCheckedBandas}/>
        </LateralContainer>
        <Content>
          <Catalogue data={data} loading={loading} error={error}/>
        </Content>
      </HBox>
    </Container>
  );
};
