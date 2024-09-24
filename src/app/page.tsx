"use client";

import Link from "next/link";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bem-vindo ao Next.js com Ant Design!</h1>
      <Button type="primary">
        <Link href="/about">Ir para Sobre</Link>
      </Button>
    </div>
  );
};

export default HomePage;
