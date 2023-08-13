import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setshow] = useState(false);
  console.log(show);
  const handleShow = () => {
    setshow(!show);
  };
  const lists = [
    { text: "Télécharger", slug: "/" },
    { text: "Nitro", slug: "/nitro" },
    { text: "Sécurité", slug: "/" },
    { text: "Assistance", slug: "/" },
    { text: "Blog", slug: "/" },
    { text: "Emploi", slug: "/" },
  ];
  return (
    <Nav className="parent">
      <div className="nav">
        <Link to="/">
          <Logo />
        </Link>
        <div className="linksWrapper">
          <div className="colWrapper">
            {lists.map((list) => (
              <Link to={list.slug} key={list.text}>
                <span>{list.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="buttonWrapper">
          <Link to="/login">
            <button className="buttonConnect">Se connecter</button>
          </Link>
          <button className={`buttonHamburger `} onClick={handleShow}>
            <svg className="hamburger">
              <path
                fill="currentColor"
                d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
              ></path>
            </svg>
          </button>
        </div>
        {show ? <Hamburger close={handleShow} /> : null}
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  color: white;
  z-index: 1000;
  position: relative;
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  svg {
    height: 34px;
    width: 124px;
  }
  .linksWrapper span {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .buttonWrapper {
    display: flex;
    align-items: center;
    width: 45%;
    justify-content: end;
  }
  .buttonConnect {
    border-radius: 40px;
    height: 2.4rem;
    width: 6.3rem;
    border: 0px;
    background-color: white;
    align-self: center;
    padding: 0.5 1rem;
    font-size: 14px;
    margin-right: 1rem;
  }
  button:hover {
    cursor: pointer;
  }
  .buttonHamburger {
    border: 0;

    background-color: transparent;
    appearance: none;
  }
  .hamburger {
    height: 2.5rem;
    width: 2.5rem;
    color: white;
  }
  .linksWrapper {
    display: none;
  }
  @media (min-width: 1024px) {
    padding: 0 2.5rem;
    .buttonHamburger {
      display: none;
    }
    .nav a {
      width: 35%;
    }
    .buttonWrapper {
      justify-content: center;
    }
    .logoWrapper {
      padding: 1.5rem 0;
    }
    .linksWrapper {
      display: block;
    }
  }
`;
