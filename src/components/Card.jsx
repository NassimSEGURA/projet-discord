import React from "react";
import styled from "styled-components";
import Item from "./Item";

export default function Card() {
  const items = [
    {
      title:
        "Crée un espace accessible uniquement sur invitation où tu te sens bien",
      src: "1.svg",
      text: "Les serveurs Discord sont organisés en salons axés sur des sujets où vous pouvez collaborer, partager et simplement discuter de votre journée sans encombrer un groupe de discussion.",
      id: 1,
      flex: "same-column",
      class1: "imgWrapper",
      class2: "textWrapper",
      rowNumber: "firstRow",
    },
    {
      title: "Là où il est facile de passer du temps ensemble",
      src: "2.svg",
      text: "Prends place dans un salon vocal quand tu es libre. Les amis dans ton serveur peuvent voir que tu es là et immédiatement te rejoindre sans avoir besoin d'appeler.",
      id: 2,
      flex: "desktop-reverse",
      class1: "imgWrapper",
      class2: "textWrapper",
      rowNumber: "secondRow",
    },
    {
      title: "De quelques personnes à toute une communauté",
      src: "6.svg",
      text: "Gère n'importe quelle communauté, grâce à des outils de modération et des permissions personnalisées pour les membres. Accorde des pouvoirs spéciaux aux membres, crée des salons privés, et plus encore.",
      id: 3,
      flex: "same-column",
      class1: "imgWrapper",
      class2: "textWrapper",
      rowNumber: "thirdRow",
    },
    {
      title: "UNE TECHNOLOGIE FIABLE POUR GARDER LE LIEN",
      src: "7.svg",
      text: "Grâce aux chats vocaux et vidéo à faible latence, les interlocuteurs ont l'impression d'être dans la même pièce. Fais un petit coucou par vidéo, regarde tes amis streamer leurs jeux, ou profitez du partage d'écran pour faire une session de dessin ensemble.",
      id: 4,
      flex: "column-reverse",
      class1: "imgWrapperSpecial",
      class2: "textWrapperSpecial",
      rowNumber: "fourthRow",
    },
  ];
  return (
    <Section>
      {items.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          src={item.src}
          text={item.text}
          id={item.id}
          direction={item.flex}
          classname1={item.class1}
          classname2={item.class2}
          rowNumber={item.rowNumber}
        />
      ))}
    </Section>
  );
}

const Section = styled.section`
  .container {
    display: flex;
    padding: 1.5rem 2rem;
  }
  .column-reverse {
    flex-direction: column-reverse;
  }
  .same-column {
    flex-direction: column;
  }
  .desktop-reverse {
    flex-direction: column;
  }
  .secondRow,
  .fourthRow {
    background-color: #f6f6f6;
  }
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    .same-column {
      flex-direction: row;
    }
    .imgWrapper,
    .textWrapper {
      width: 50%;
    }
    .imgWrapper {
      margin-top: auto;
      margin-bottom: auto;
    }
    .titleWrapper h2 {
      font-size: 3rem;
      line-height: 120%;
    }
    .desktop-reverse {
      flex-direction: row-reverse;
    }
  }
`;
