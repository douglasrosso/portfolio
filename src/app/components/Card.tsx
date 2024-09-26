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
  height: 17rem;
  background-color: inherit;
  -webkit-box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
`;

export default Card;
