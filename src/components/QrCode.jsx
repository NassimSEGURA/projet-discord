import React from "react";
import styled from "styled-components";

export default function QrCode() {
  return (
    <Div>
      <div className="qrCodeWrapper">
        <img className="qrCode" src="qrcode.png" alt="#" />
        <img className="logoQrCode" src="18.png" alt="" />
      </div>
      <div className="textQrWrapper">
        <h3>Se connecter avec un code QR</h3>
        <span>
          Scanne-le avec l'<strong>application mobile Discord</strong> pour te
          connecter instantanément.
        </span>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: none;
  @media (min-width: 830px) {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2rem;
    .qrCodeWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      background-color: white;
      padding: 0.3rem;
      border-radius: 10px;
      position: relative;
    }
    .logoQrCode {
      position: absolute;
      width: 50px;
      height: 50px;
    }
    .qrCode {
      width: 98%;
      text-align: center;
    }
    .textQrWrapper {
      text-align: center;
    }
    .textQrWrapper h3 {
      font-size: 25px;
      margin-bottom: 0.5rem;
    }
    .textQrWrapper span {
      line-height: 20px;
      color: #b9bbbe;
    }
  }
`;
