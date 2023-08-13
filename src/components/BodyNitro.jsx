import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardNitro from "./CardNitro";

export default function BodyNitro() {
  let currentPage = useLocation();
  let displayNitroBody = "";
  if (currentPage.pathname === "/nitro") {
    displayNitroBody = "block";
  } else {
    displayNitroBody = "none";
  }

  const lists = [
    {
      text1: "De meilleurs émojis",
      text2: "Collectionne et crée tes propres émojis animés et personnalisés.",
      src: "3.svg",
      bgNitroCard: "linear-gradient(142.53deg,#00a295,#26e8f4 98.75%),#3dcda7",
    },
    {
      text1: "Profil personnel",
      text2: "Utilise un avatar animé et obtiens un tag personnalisé.",
      src: "6nitro.svg",
      bgNitroCard:
        "linear-gradient(321.82deg,#21f2ff,#4181ff 59.22%,#4475ff 98.02%),#7196ff",
    },
    {
      text1: "Soutenir un serveur",
      text2:
        "Obtiens 2 boosts de serveur et une réduction de 30 % sur les boosts supplémentaires.",
      src: "2nitro.svg",
      bgNitroCard:
        "linear-gradient(138.46deg,#3e70ff 1.48%,#9a98ff 98.75%),#ff73fa",
    },
    {
      text1: "Affiche ton soutien",
      text2: "Ton badge de profil indique depuis quand tu soutiens Discord.",
      src: "8nitro.svg",
      bgNitroCard: "linear-gradient(141.85deg,#7e7bff,#ff73fa)",
    },
    {
      text1: "Uploads plus importants",
      text2: "100 Mo d'upload pour partager des fichiers de haute qualité.",
      src: "4.png",
      bgNitroCard: "linear-gradient(141.48deg,#f837ee 1.35%,#ffcd4b)",
    },
    {
      text1: "Vidéo HD",
      text2: "Vidéo haute définition, partage d'écran et streaming Go Live.",
      src: "11.png",
      bgNitroCard: "linear-gradient(321.73deg,#ffcd4b -1.09%,#ee6315 100.65%)",
    },
  ];

  return (
    <BodyNitroWrapper style={{ display: displayNitroBody }}>
      <div className="titleTextWrapper">
        <h2>
          DISCORD NITRO AMÉLIORE À LA FOIS TA VIDÉO ET TON CHAT VOCAL ET TEXTUEL
          DISCORD.
        </h2>
        <p>Mate un peu les avantages qui te seront offerts.</p>
      </div>
      <div className="allCardsWrapper">
        {lists.map((list) => (
          <CardNitro
            text1={list.text1}
            text2={list.text2}
            src={list.src}
            bgNitroCard={list.bgNitroCard}
            key={list.text1}
          />
        ))}
      </div>
      <div className="endBodyWrapper">
        <h3>Allezallezallezallezallezallez</h3>
        <div className="buttonsWrapper">
          <button className="buttonFlex">
            99$US par an
            <button className="reductionPill">Réduction de 16%</button>
          </button>
          <button>9,99$US par mois</button>
        </div>
      </div>
    </BodyNitroWrapper>
  );
}

const BodyNitroWrapper = styled.div`
  .allCardsWrapper {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
  }
  .endBodyWrapper {
    margin-bottom: 3rem;
  }
  .titleTextWrapper {
    margin-bottom: 2.5rem;
    text-align: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    line-height: 95%;
  }
  h3 {
    font-size: 18px;
    text-align: center;
  }
  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
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
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 26px;
    }
    .allCardsWrapper {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: unset;
      justify-content: space-between;
    }
    .buttonsWrapper {
      flex-direction: row;
      justify-content: space-between;
    }
    button {
      width: 49%;
    }
  }
  @media (min-width: 1024px) {
    .allCardsWrapper {
      justify-content: space-between;
    }
    h3 {
      font-size: 32px;
    }
    button {
      width: 45%;
    }
  }
`;
