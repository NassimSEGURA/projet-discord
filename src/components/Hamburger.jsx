import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SousCol from "./SousCol";

export default function Hamburger({ close }) {
  const lists = [
    {
      links: [
        { text: "Acceuil" },
        { text: "Télécharger" },
        { text: "Nitro" },
        { text: "Sécurité" },
        { text: "Académie des modérateurs" },
        { text: "Assistance" },
        { text: "Blog" },
        { text: "Emploi" },
      ],
    },
  ];
  return (
    <Panel>
      <Logo />
      <hr />
      {lists.map((list) => (
        <div className="linksPanelWrapper">
          <SousCol links={list.links} />
        </div>
      ))}
      <div className="closeWrapper">
        <button className="closeButton" onClick={close}>
          <svg className="closeIcon" width="12" height="12" viewBox="0 0 12 12">
            <g fill="none">
              <path d="M0 0h12v12H0"></path>
              <path
                fill="currentColor"
                d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="footerPanelWrapper">
        <button className="downloadButton buttonBrand">
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
          Téléchargez sur google store
        </button>
      </div>
    </Panel>
  );
}
const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0%;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 330px;
  z-index: 9999;
  overflow: hidden;
  background-color: white;
  color: black;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 24px 48px 120px 24px;
  overflow-y: scroll;
  transform: translate(0px);
  transition: width 2s, background-color 2s, transform 2s;
  .linksPanelWrapper {
    display: flex;
    flex-direction: column;
  }
  .linksPanelWrapper span {
    padding: 0.5rem;
    line-height: 24px;
  }
  .closeButton {
    color: black;
    background-color: white;
    border: 0;
    position: absolute;
    top: 6.5%;
    right: 6%;
  }
  .closeIcon {
    width: 24px;
    height: 24px;
  }
  .downloadButton {
    border: 0;
    position: absolute;
    bottom: 2%;
    left: 18.4%;
    right: auto;
    border-radius: 30px;
    padding: 7px 16px;
  }
  .downloadIcon {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
