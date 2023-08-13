import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Logo from "./Logo";
import QrCode from "./QrCode";
import { useLocation } from "react-router-dom";

export default function BodyLogin() {
  let currentPage = useLocation();
  let displayLoginBody = "";
  if (currentPage.pathname === "/login") {
    displayLoginBody = "flex";
  } else {
    displayLoginBody = "none";
  }
  return (
    <LoginWrapper style={{ display: displayLoginBody }}>
      <div className="areaBackground"></div>
      <div className="bigWrapper">
        <div className="flexWrapper">
          <div className={`container`} key="loginWrapper">
            <Logo />
            <div className="textWrapper">
              <h2>Ha, te revoilà!</h2>
              <p>Nous sommes heureux de te revoir!</p>
            </div>
            <Form />
          </div>
          <QrCode />
        </div>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  color: white;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    flex: 1;
  }
  .flexWrapper {
    display: flex;
  }
  .areaBackground {
    display: none;
  }
  .bigWrapper {
    padding: 4.4rem 1rem 2.5rem;
    height: 100%;
    width: 100%;
    background-color: #36393f;
    z-index: 1;
  }
  .logoWrapper {
    height: 1rem;
    color: white;
    text-align: center;
    padding: 0;
    margin-bottom: 0.75rem;
    margin-left: auto;
    margin-right: auto;
  }
  h2 {
    text-align: center;
    margin-top: 0.25;
    margin-bottom: 0;
  }
  .logoWrapper svg {
    height: 34px;
    width: 124px;
  }
  .textWrapper p {
    text-align: center;
    color: #b9bbbe;
    margin-top: 0.5rem;
  }
  .overlay {
    position: absolute;
    width: 100%;
  }
  @media (min-width: 486px) {
    .bigWrapper {
      height: 60%;
      width: 26rem;
      position: absolute;
      padding: 2rem;
      border-radius: 10px;
      border: 0;
    }
    .areaBackground {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
      background-image: url("97.svg");
      background-size: cover;
    }
    .logoWrapper {
      display: none;
    }
    h2 {
      margin-top: 0;
    }
  }
  @media (min-width: 830px) {
    .bigWrapper {
      width: 760px;
    }
    .container {
      flex: 5;
    }
  }
`;
