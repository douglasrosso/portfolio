import React from "react";
import styled from "styled-components";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  position: relative;
  padding: 20px;
  z-index: 2;
  width: 100%;
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Card;
