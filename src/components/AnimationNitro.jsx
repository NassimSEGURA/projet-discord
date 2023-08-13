import React from "react";
import styled from "styled-components";
import "../App.css";

export default function AnimationNitro() {
  return (
    <EndNitroBodyWrapper className="secondaryBg">
      <div className="upperAnimationWrapper">
        <div className="noAnimationUpper">
          <img src="nitroclassic.svg" alt="#" />
          <p>
            Reste simple : obtiens les avantages de discussion sans un boost de
            serveur.
          </p>
          <div className="buttonsWrapper">
            <button className="buttonFlex">
              99$US par an
              <button className="reductionPill">Réduction de 16%</button>
            </button>
            <button>9,99$US par mois</button>
          </div>
        </div>
      </div>
    </EndNitroBodyWrapper>
  );
}

const EndNitroBodyWrapper = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  .noAnimationUpper {
    color: white;
    padding: 0 1.5rem;
  }
  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }
  .buttonFlex {
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media (min-width: 768px) {
    .buttonsWrapper {
      justify-content: start;
      margin-left: 0;
      margin-right: 0;
      align-items: flex-start;
    }
    button {
      width: auto;
    }
  }
  @media (min-width: 834px) {
    .buttonsWrapper {
      width: 72%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 1024px) {
    .noAnimationUpper {
      margin-left: auto;
      width: 45%;
    }
    .buttonsWrapper {
      flex-direction: column;
    }
  }
`;
