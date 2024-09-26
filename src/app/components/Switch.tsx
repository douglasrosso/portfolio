import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <input id="switch" type="checkbox" />
      <div className="app">
        <div className="content">
          <div className="circle">
            <div className="crescent" />
          </div>

          <label htmlFor="switch">
            <div className="toggle" />
            <p className="light"></p>
            <p className="dark"></p>
          </label>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .main-circle {
    width: 40rem;
    height: 40rem;
    border-radius: 100%;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    position: absolute;
    z-index: 1;
    left: 50%;
    -webkit-transform: translate(-50%, -70%);
    -ms-transform: translate(-50%, -70%);
    transform: translate(-50%, -70%);
  }

  .icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0.5rem;
  }

  .content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    width: fit-content;
    -webkit-transform: translateY(5%);
    -ms-transform: translateY(5%);
    transform: translateY(5%);
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .circle {
    position: relative;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    margin: auto;
  }

  .crescent {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 20px;
    height: 20px;
    background: white;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: top right;
    -ms-transform-origin: top right;
    transform-origin: top right;
    -webkit-transition: -webkit-transform 0.6s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  label,
  .toggle {
    height: 30px;
    border-radius: 100px;
  }

  label {
    width: 60px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }

  .toggle {
    position: absolute;
    width: 50%;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .dark {
    opacity: 0.5;
  }

  .mark {
    border-radius: 100px;
    background-color: black;
  }

  .time {
    color: black;
  }

  [type="checkbox"] {
    display: none;
  }

  [type="checkbox"]:checked + .app .toggle {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    background-color: #34323d;
  }

  [type="checkbox"]:checked + .app .dark {
    opacity: 1;
    color: white;
  }

  [type="checkbox"]:checked + .app .light {
    opacity: 1;
    color: white;
  }


  [type="checkbox"]:checked + .app .crescent {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    background: #26242e;
  }

  [type="checkbox"]:checked + .app .circle {
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
  }

  [type="checkbox"]:checked + .app .main-circle {
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
  }

  [type="checkbox"]:checked + .time {
    color: white;
  }

  [type="checkbox"]:checked + .app .menu .time {
    color: white;
  }

  [type="checkbox"]:checked + .app .menu .icons .network {
    border-color: transparent transparent white transparent;
  }

  [type="checkbox"]:checked + .app .menu .icons .battery {
    background-color: white;
  }

  [type="checkbox"]:checked + .app {
    border-radius: 40px;
  }
`;

export default Switch;
