import React from "react";
import Liste from "./Liste";
import styled from "styled-components";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";
import { useLocation } from "react-router-dom";

export default function Footer() {
  let currentPage = useLocation();
  let displayValue = "";
  if (currentPage.pathname === "/login") {
    displayValue = "none";
  } else {
    displayValue = "block";
  }
  return (
    <Foooter className="footerBg" style={{ display: displayValue }}>
      <div className="upperNListeWrapper">
        <UpperFooter />
        <Liste />
      </div>
      <LowerFooter />
    </Foooter>
  );
}

const Foooter = styled.footer`
  padding: 1.5rem 2rem;
  color: white;
  .ml-1-5 {
    margin-left: 1.5rem;
  }
  .upperNListeWrapper {
    border-bottom: 3px solid #404eed;
  }
  @media (min-width: 768px) {
    .upperNListeWrapper {
      display: flex;
    }
    .upperFooter {
      flex: 3;
      margin-right: 2.5rem;
    }
    .linksSection {
      flex: 7;
      margin-left: 2.5rem;
    }
  }
`;
