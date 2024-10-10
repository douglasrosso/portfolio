"use client";

import styled from "styled-components";

const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyleEmptySpace></StyleEmptySpace>
        <StyleMenu>
          <StyleMenuItem>Início</StyleMenuItem>
          <StyleMenuItem>Sobre</StyleMenuItem>
          <StyleMenuItem>Projetos</StyleMenuItem>
          <StyleMenuItem>Contato</StyleMenuItem>
        </StyleMenu>
        <StyleSocialMedia>
          <div></div>
          <div></div>
          <div></div>
        </StyleSocialMedia>
      </StyledHeader>
      <StyledContainer>
        Container url:{" "}
        <a href="https://www.figma.com/design/0uKcDdxwZFvSnOZdkm78fN/Developer-Portfolio-Design-(Community)?node-id=14-11&node-type=frame&t=NUhbSum08QHQUgB6-0">
          Ir para o figma
        </a>
      </StyledContainer>
      <StyledFooter>Footer</StyledFooter>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  border: 2px solid yellow;
  padding: 20px 0;
  width: 85%;
  height: 100%;
  margin: 0 auto;
`;
const StyledHeader = styled.header`
  border: 2px solid red;
  height: 80px;
  display: flex;
  justify-content: space-around;
`;
const StyleEmptySpace = styled.div`
  width: 30%;
`;
const StyleMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;
const StyleMenuItem = styled.h1`
  font-size: 20px;
`;
const StyleSocialMedia = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
  }
`;
const StyledContainer = styled.div`
  border: 2px solid blue;
`;
const StyledFooter = styled.footer`
  border: 2px solid green;
`;

export default HomePage;
