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
import { useAppContext } from "./context/StoreContext";

const HomePage = () => {
  const { theme } = useAppContext();
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Switch />
        <InstagramOutlined style={{ fontSize: "32px", color: theme.color }} />
        <LinkedinOutlined style={{ fontSize: "32px", color: theme.color }} />
        <GithubOutlined style={{ fontSize: "32px", color: theme.color }} />
        <h1>Olá sou, Douglas Rosso</h1>
        <Button type="primary">
          <Link href="/about">Ir para Sobre</Link>
        </Button>
      </Card>
    </div>
  );
};

export default HomePage;
