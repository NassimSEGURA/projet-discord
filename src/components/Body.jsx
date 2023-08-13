import React from "react";
import styled from "styled-components";
import BodyIndex from "./BodyIndex";
import BodyLogin from "./BodyLogin";
import BodyNitro from "./BodyNitro";

export default function Body() {
  return (
    <Main className="mainContainer">
      <BodyIndex />
      <BodyLogin />
      <BodyNitro />
    </Main>
  );
}

const Main = styled.main``;
