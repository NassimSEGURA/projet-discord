import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function HeaderIndex() {
  let currentPage = useLocation();
  let displayIndex = "";
  if (currentPage.pathname === "/login" || currentPage.pathname === "/nitro") {
    displayIndex = "none";
  } else {
    displayIndex = "flex";
  }
  return (
    <Div style={{ display: displayIndex }}>
      <div className="container">
        <div className="titleWrapper">
          <h1>Imagine un endroit...</h1>
        </div>
        <div className="textWrapper">
          <p className="text-justify">
            …où tu pourrais faire partie d'un club scolaire, d'un groupe de
            gamers ou d'une communauté d'art internationale. Un endroit où toi
            et ta bande d'amis pouvez simplement passer du temps ensemble. Un
            endroit qui permettrait plus facilement de discuter tous les jours
            et de se retrouver plus souvent.
          </p>
        </div>
        <div className="buttonsWrapper">
          <button className="downloadButton">
            <svg
              className="downloadIcon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            <p className="buttonText">Télécharger pour windows</p>
          </button>
          <button className="browserButton">
            <p className="buttonText">Ouvrir Discord dans ton navigateur</p>
          </button>
        </div>
      </div>
      <div className="areaHidden">
        <img className="backgroundImage" src="10.svg" alt="" />
        <img className="firstImage" src="4.svg" alt="#" />
        <img className="secondImage" src="9.svg" alt="#" />
      </div>
    </Div>
  );
}

const Div = styled.div`
flex-direction:column;
.container {
    padding: 3.5rem 1.5rem;
    z-index: 1;
    position: relative;
    margin-left:auto;
    margin-right:auto;
    width:50%; 
  }
  .titleWrapper {
    width: 100%;
    text-transform: uppercase;
  }

  h1 {
    font-weight: 800;
  }
  .text-justify {
    text-align: justify;
    line-height: 1.5rem;
  }

  .browserButton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    background-color: white;
    font-size: 1.2rem;
    border-radius: 40px;
    border: 0;
    width: 20rem;
    height: 3.8rem;
    padding: 1rem 2rem;
    background-color: #23272a;
    color: white;
  }
  .downloadButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    background-color: white;
    font-size: 1.2rem;
    border-radius: 40px;
    border: 0;
    width: 20rem;
    height: 3.5rem;
    padding: 1rem 2rem;
  }
  .downloadIcon {
    align-items: center;
    width: 15%;
  }
  .buttonText {
    margin: 0;
  }

  .buttonsWrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .areaHidden {
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .firstImage {
    display: block;
    width: 100%;
    max-width: 880px;
    position: relative;
    z-index: 1;
    margin-left: -80px;
  }
  .secondImage {
    display: none;
  }
  .backgroundImage {
    display: none;
  }
  @media (min-width: 768px) {
    .container {
      padding: 5rem 1.75rem;
    }
    .titleWrapper p {
    }
    .areaHidden {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .firstImage {
      display: none;
    }
    .secondImage {
      display: block;
      bottom: 0;
      left: 50%;
      margin-left: -70px;
      position: absolute;
    }
    .backgroundImage {
      top: auto;
      bottom: 0;
      display: block;
      position: absolute;
      margin-left: -1320px;
      left: 50%;
    }
    .textWrapper {
      width: 50%;
    }
    .buttonsWrapper {
      flex-direction: column;
    }
  }
  @media (min-width: 1024px) {
    .container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .backgroundImage {
      margin-left: -1280px;
    }
    .firstImage {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      height: auto;
      width: auto;
      margin-left: -1030px;
    }
    .secondImage{
      display:block;
      bottom:0;
      left:50%:;
      margin-left:370px;
    }
    .buttonsWrapper{
      flex-direction:row;
    }
  }
`;
