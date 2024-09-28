"use client";

import React from "react";
import styled from "styled-components";
import { useAppContext } from "@/app/context/StoreContext";

const Switch = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <StyledWrapper>
      <input
        id="switch"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme.isDark}
      />
      <div className="content">
        <div className="circle">
          <div className="crescent" />
        </div>
        <label htmlFor="switch">
          <div className="toggle" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: fit-content;

  .content {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 20px;
  }

  .circle {
    position: relative;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background: ${({ theme }) =>
      theme.isDark
        ? "linear-gradient(40deg, #8983f7, #a3dafb 70%)"
        : "linear-gradient(40deg, #ff0080, #ff8c00 70%)"};
    margin: auto;
    transition: background 0.3s ease;
  }

  .crescent {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.background};
    transform: ${({ theme }) => (!theme.isDark ? "scale(0)" : "scale(1)")};
    transform-origin: top right;
    transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  label,
  .toggle {
    height: 30px;
    border-radius: 100px;
  }

  label {
    width: 60px;
    background-color: #d4d4d4;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }

  .toggle {
    position: absolute;
    width: 50%;
    background-color: #ffffff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  [type="checkbox"] {
    display: none;
  }

  [type="checkbox"]:checked + .content .toggle {
    transform: translateX(100%);
    background-color: #ffffff;
  }

  [type="checkbox"]:checked + .content .crescent {
    transform: ${({ theme }) => (theme.isDark ? "scale(1)" : "scale(0)")};
    background: ${({ theme }) => theme.background};
  }

  [type="checkbox"]:checked + .content {
    border-radius: 40px;
  }
`;

export default Switch;
