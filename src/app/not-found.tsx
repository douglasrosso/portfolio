"use client";

import { Button } from "antd";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        <Button type="primary">Voltar para a Página Inicial</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
