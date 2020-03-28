import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  /* background-color: #010024; */
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9%;
  box-shadow: 0px 2px 25px #ddd;
  position: -webkit-sticky;
  top: 0;
  z-index: 20;

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 0 2%;

    input {
      width: 0%;
      padding: 3% 2%;
      font-size: 1rem;
      border: 0.3px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 15px #ddd;
      outline: none;
    }
  }
  @media (max-width: 600px) {
    padding: 0 2%;

    input {
      width: 0%;
      padding: 6% 3%;
      font-size: 1rem;
      border: 0.3px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 15px #ddd;
      outline: none;
    }
  }

  .nav-logo {
    color: gold;
  }

  .nav-list {
    input {
      width: 150%;
      padding: 10% 5%;
      font-size: 1rem;
      border: 0.3px solid #ccc;
      border-radius: 0.25em;
      box-shadow: 0 2px 15px #ddd;
      outline: none;
    }
  }

  .nav-cart {
    display: flex;
    align-self: center;

    p {
      padding: 1rem 1rem;
      margin: 0 1rem;
      border: 0.3px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 15px #ddd;
    }
    /* .login {
      color: cyan;
      font-size: 1.3rem;
      box-shadow: 0 2px 15px #eee;
      /* background: orange; */
  }
  */ .login,
  .register {
    color: #555;
    font-size: 1.2rem;
    box-shadow: 0 2px 15px #eee;
    /* background: orange; */

    .links {
      text-decoration: none;
      color: #eee;
    }

    sup {
      color: #eee;
      font-size: 1.2rem;
      padding-left: 0.5rem;
    }
  }
`;
