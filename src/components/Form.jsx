import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <Div>
      <form action="">
        <div className="inputTitleWrapper">
          <h5>E-mail ou numéro de téléphone</h5>
          <div className="inputWrapper">
            <input type="text" id="name" name="user_name" />
          </div>
        </div>
        <div className="inputTitleWrapper inputWrapperNoMargin">
          <h5>mot de passe</h5>
          <div className="inputWrapper">
            <input type="password" id="password" name="user_password" />
          </div>
        </div>
        <div className="linkWrapper">
          <Link to="/"></Link>
        </div>
        <div>
          <button className="primaryBg">Se connecter</button>
        </div>
        <div className="signUpWrapper">
          <span>Besoin d'un compte ? </span> <Link to="/"></Link>
        </div>
      </form>
    </Div>
  );
}

const Div = styled.div`
  input {
    display: table-cell;
    margin-bottom: 10px;
    width: 94%;
    background-color: #202225;
    color: #fff;
    padding: 0.5rem;
  }
  .linkWrapper {
    margin-bottom: 1.25rem;
  }
  h5 {
    padding-right: 10px;
    text-transform: uppercase;
    color: #b9bbbe;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  .signUpWrapper {
    color: #b9bbbe;
    margin-top: 0.25rem;
  }
  .inputTitleWrapper {
    margin-bottom: 1.25rem;
  }
  .inputWrapper {
    width: 100%;
    padding: 0.25rem;
  }
  .inputWrapperNoMargin {
    margin-bottom: 0;
  }
  a {
    color: #00b3ff;
    text-decoration: none;
  }
  button {
    width: 100%;
    color: white;
    border-radius: 3px;
    height: 2.5rem;
    border: 0;
  }
`;
