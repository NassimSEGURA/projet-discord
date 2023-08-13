import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import HeaderIndex from "./HeaderIndex";
import HeaderNitro from "./HeaderNitro";

export default function Header() {
  let currentPage = useLocation();
  let displayValue = "";
  let bgColor = "";
  if (currentPage.pathname === "/login") {
    displayValue = "none";
  } else if (currentPage.pathname === "/nitro") {
    displayValue = "block";
    bgColor = "linear-gradient(90deg,#b473f5,#e292aa)";
  } else {
    displayValue = "block";
    bgColor = "#404eed";
  }
  return (
    <Head className="" style={{ display: displayValue, background: bgColor }}>
      <Navbar />
      <HeaderIndex />
      <HeaderNitro />
    </Head>
  );
}

const Head = styled.header`
  color: white;
  overflow: hidden;
  position: relative;
`;
