import React from "react";
import Logo from "./Logo";
import styled from "styled-components";

export default function LowerFooter() {
  return (
    <Div className="logoButtonWrapper">
      <Logo />
      <button className="buttonBrand">Je m'inscris</button>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;

  svg {
    height: 34px;
    width: 124px;
  }
  .buttonBrand {
    border: 0;
    border-radius: 156px;
    height: 2.5rem;
    padding: 0.5rem;
    width: 7rem;
  }
`;
