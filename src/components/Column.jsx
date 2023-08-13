import React from "react";
import styled from "styled-components";
import SousCol from "./SousCol";

export default function Column({ titre, links }) {
  return (
    <Col>
      <h5 className="primaryText">{titre}</h5>
      <SousCol links={links} />
    </Col>
  );
}

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
