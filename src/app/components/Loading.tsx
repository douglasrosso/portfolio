"use client";

import { Spin } from "antd";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Spin size="large" />
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
