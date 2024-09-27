import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/StoreContext";

const Card = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppContext();
  return <StyledWrapper $background={theme.background}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div<{ $background: string }>`
  position: relative;
  padding: 20px;
  z-index: 2;
  width: 100%;
  height: 17rem;
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: ${(props) => props.$background};
`;

export default Card;
