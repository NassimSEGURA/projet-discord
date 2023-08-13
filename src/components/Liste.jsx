import React from "react";
import styled from "styled-components";
import Column from "./Column";

export default function Liste() {
  const lists = [
    {
      title: "Produits",
      links: [
        { text: "Télécharger", id: "telecharger1" },
        { text: "Nitro", id: "nitro2" },
        { text: "Statut", id: "statut" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { text: "A propos", id: "apropos" },
        { text: "Emplois", id: "emplois" },
        { text: "Espace actualités", id: "espaceActus" },
        { text: "Charte graphique", id: "charteGraphique" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { text: "Université", id: "universite" },
        { text: "Assistance", id: "assistance" },
        { text: "Sécurité", id: "security" },
        { text: "Blog", id: "blogg" },
        { text: "Commentaires", id: "commentaire" },
        { text: "Développeurs", id: "devedev" },
        { text: "StreamKit", id: "streamKit" },
      ],
    },
    {
      title: "Chartes",
      links: [
        { text: "Conditions", id: "conditionss" },
        { text: "Confidentialité", id: "confidientialitééé" },
        { text: "Paramètre des cookies", id: "paramètre cookies" },
        { text: "Charte d'utilisation", id: "charteUsage" },
        { text: "Remerciements", id: "thankuuuuuu" },
        { text: "Licences", id: "licences" },
        { text: "Modération", id: "modoDiscord" },
      ],
    },
  ];
  return (
    <Section className="linksSection">
      <div className="linksFooterWrapper">
        {lists.map((list, i) => (
          <div key={i} className="colWrapper">
            <Column key={list.title} titre={list.title} links={list.links} />
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .colWrapper {
    width: 45%;
    margin-bottom: 2.5rem;
  }
  .linksFooterWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  span {
    line-height: 2rem;
  }
  @media (min-width: 1024px) {
    .colWrapper {
      flex: 1;
    }
  }
`;
