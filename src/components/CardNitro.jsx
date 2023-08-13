import React from "react";
import styled from "styled-components";

export default function CardNitro({ bgNitroCard, src, text1, text2 }) {
  return (
    <CardNitroWrapper
      className="cardWrapper"
      style={{ background: bgNitroCard }}
    >
      <div className="textCard">
        <p>{text1} </p>
        <p>{text2} </p>
      </div>
      <div className="imgCard">
        <img src={src} alt="#" />
      </div>
    </CardNitroWrapper>
  );
}
const CardNitroWrapper = styled.div`
  padding: 2rem;
  border-radius: 8px;
  border: 0;
  width: 80%;
  margin-bottom: 2rem;
  .textCard {
    height: 45%;
  }
  img {
    max-width: 220px;
    max-height: 114px;
  }
  .imgCard,
  p {
    text-align: center;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;
