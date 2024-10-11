"use client";

import styled from "styled-components";

const HomePage = () => {
  return (
    <S_Wrapper>
      <S_Header>
        <S_EmptySpace></S_EmptySpace>
        <S_Menu>
          <S_MenuItem>Início</S_MenuItem>
          <S_MenuItem>Sobre</S_MenuItem>
          <S_MenuItem>Projetos</S_MenuItem>
          <S_MenuItem>Contato</S_MenuItem>
        </S_Menu>
        <S_SocialMedia>
          <div></div>
          <div></div>
          <div></div>
        </S_SocialMedia>
      </S_Header>
      <S_Container>
        <S_Introduction>
          <div>
            <h1>Olá 👋, meu nome é Douglas</h1>
            <h1>Sou Engenheiro de Software</h1>
          </div>

          <div className="gradient-border">
            <img className="foto"></img>
          </div>
        </S_Introduction>
      </S_Container>
      <S_Footer>
        © 2024 | Designed and coded with ❤️️ by Douglas M. Rosso
      </S_Footer>
    </S_Wrapper>
  );
};

const S_Wrapper = styled.div`
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  width: 85%;
  height: 100%;
  margin: 0 auto;
`;

const S_Header = styled.header`
  border: 2px solid red;
  height: 80px;
  display: flex;
  justify-content: space-around;
`;

const S_EmptySpace = styled.div`
  width: 30%;
`;

const S_Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;

const S_MenuItem = styled.h1`
  font-size: 20px;
`;

const S_SocialMedia = styled.div`
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

const S_Container = styled.div`
  border: 2px solid blue;
  height: calc(100% - 142px);
`;

const S_Introduction = styled.div`
  border: 2px solid pink;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  .gradient-border {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(to bottom, #e70faa 0%, #00c0fd 100%);
  }

  img {
    width: 243px;
    height: 243px;
    border-radius: 50%;
    background: #000000;
    border: unset;
  }
`;

const S_Footer = styled.footer`
  font-size: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
`;

export default HomePage;
