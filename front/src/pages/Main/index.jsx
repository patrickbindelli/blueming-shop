import React, { useState, useEffect } from "react";
import { Container, LateralContainer, Content, HBox, FullMenu } from "./styles";
import { Catalogue } from "../../components/Catalogue";
import { Header } from "../../components/Header";
import { LateralMenu } from "../../components/LateralMenu";

export const Main = () => {
  const [isHidden, setIsHidden] = useState(true);

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
        <LateralMenu onclick={handleSideBar} />
      </FullMenu>
    );
  }

  return (
    <Container>
      <Header onclick={handleSideBar} />
      <HBox>
        <LateralContainer>
          <LateralMenu hidden={false} animate={false} />
        </LateralContainer>
        <Content>
          <Catalogue />
        </Content>
      </HBox>
    </Container>
  );
};
