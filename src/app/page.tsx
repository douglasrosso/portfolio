"use client";

import Link from "next/link";
import { Button } from "antd";
import Card from "./components/Card";
import Switch from "./components/Switch";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Switch />
        <h1>Bem-vindo ao Next.js com Ant Design!</h1>
        <Button type="primary">
          <Link href="/about">Ir para Sobre</Link>
        </Button>
      </Card>
    </div>
  );
};

export default HomePage;
