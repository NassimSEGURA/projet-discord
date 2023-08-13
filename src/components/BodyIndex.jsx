import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function BodyIndex() {
  let currentPage = useLocation();
  let displayIndexBody = "";
  if (currentPage.pathname === "/") {
    displayIndexBody = "block";
  } else {
    displayIndexBody = "none";
  }
  return (
    <IndexWrapper style={{ display: displayIndexBody }}>
      <Card />
      <div className="endBodyWrapper">
        <div className="imgWrapperStars">
          <img src="8.svg" alt="" className="absolute" />
        </div>
        <div>
          <h4>On se lance dans l'aventure ?</h4>
        </div>
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
          <p>Télécharger sur google play</p>
        </button>
      </div>
    </IndexWrapper>
  );
}

const IndexWrapper = styled.div`
  .imgWrapperStars {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .downloadButton {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    border-radius: 40px;
    border: 0;
    width: 100%;
    height: 4rem;
    padding: 1.5rem 2rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  h4 {
    text-align: center;
    margin-top: 0;
    padding-top: 2rem;
    font-size: 2rem;
    margin-bottom: 0;
  }
  .endBodyWrapper {
    margin-bottom: 5rem;
    position: relative;
  }
  @media (min-width: 768px) {
    .downloadButton {
      width: 22rem;
    }
  }
`;
