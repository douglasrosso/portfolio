"use client";

import Link from "next/link";
import { Button } from "antd";
import Card from "./components/Card";
import Switch from "./components/Switch";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useStore } from "./context/StoreContext";
import styled from "styled-components";

const HomePage = () => {
  const { theme } = useStore();
  return (
    <div style={{ padding: "20px" }}>
      <StyledWrapper>
        <StyledHeader>
          <Switch />
          <StyledSocialMedias>
            <InstagramOutlined
              style={{ fontSize: "32px", color: theme.color }}
            />
            <LinkedinOutlined
              style={{ fontSize: "32px", color: theme.color }}
            />
            <GithubOutlined style={{ fontSize: "32px", color: theme.color }} />
          </StyledSocialMedias>
        </StyledHeader>
        <h1>&lt;Developer/&gt;</h1>
        <h3>
          Front-end and back-end developer who writes clean, elegant, and
          efficient code.
        </h3>
        <Button type="primary">
          <Link href="/about">Ir para Sobre</Link>
        </Button>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled(Card)``;

const StyledHeader = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const StyledSocialMedias = styled.div`
  display: flex;
  gap: 5px;
`;

export default HomePage;
