import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function HeaderNitro() {
  let currentPage = useLocation();
  let displayNitro = "";
  if (currentPage.pathname === "/nitro") {
    displayNitro = "block";
  } else {
    displayNitro = "none";
  }
  return (
    <Div style={{ display: displayNitro }}>
      <div className="bigWrapper">
        <div className="logoImgWrapper">
          <img className="blueManFly" src="7.png" alt="#" />
          <img className="logoNitro" src="discordNitro.svg" alt="#" />
        </div>
        <div className="textNitroWrapper">
          Profite d'une expérience améliorée sur Discord pour un coût mensuel
          intéressant. Fais passer tes émojis au niveau supérieur, profite de
          téléchargements de fichiers encore plus gros, sors du lot sur tes
          serveurs favoris, et bien plus encore.
        </div>
        <div className="buttonsWrapper">
          <button className="buttonFlex">
            99$US par an{" "}
            <button className="reductionPill">Réduction de 16%</button>
          </button>
          <button>9,99$US par mois</button>
        </div>
      </div>
      <div className="videoWrapper">
        <video loop autoPlay muted src="video.webm"></video>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 4rem;
  margin-bottom: 7rem;
  padding: 0 1.5rem;
  video {
    width: 100%;
    height: 150%;
    object-fit: cover;
  }
  .buttonFlex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bigWrapper {
    z-index: 2;
    position: relative;
  }
  .videoWrapper {
    display: none;
  }
  .reductionPill {
    font-size: 0.75rem;
    margin-left: 10px;
    padding: 0 0.5rem;
    margin-bottom: 0;
    border-radius: 24px;
    border: 0;
    background-color: #5865f2;
    height: 23px;
    width: 45%;
  }
  button {
    display: block;
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    border-radius: 28px;
    border: 0;
    background-color: #23272a;
    color: white;
    font-size: 20px;
  }
  .logoImgWrapper {
    text-align: center;
  }
  .logoNitro {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
  .blueManFly {
    display: block;
    width: 250px;
    height: auto;
    position: absolute;
    left: 50%;
  }
  .textNitroWrapper {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 768px) {
    padding: 0 2.5rem;
    .textNitroWrapper {
      width: 78%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      line-height: 140%;
    }
    .buttonFlex {
      margin-right: 2.5rem;
    }
    button {
      width: auto;
    }
    .buttonsWrapper {
      display: flex;
      justify-content: center;
    }
  }
  @media (min-width: 1024px) {
    .logoImgWrapper {
      text-align: unset;
    }
    .videoWrapper {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .textNitroWrapper {
      width: 45%;
      text-align: left;
      margin-left: 0;
      margin-right: 0;
      line-height: 140%;
    }
    .blueManFly {
      display: none;
    }
    .logoNitro {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
    .buttonsWrapper {
      justify-content: start;
      flex-direction: column;
      width: 40%;
    }
    button {
      width: 80%;
    }
  }
`;
