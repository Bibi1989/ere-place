import styled from "styled-components";

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  box-shadow: 0px 2px 25px #ddd;

  .nav-logo {
    color: gold;
  }

  .nav-list {
    ul {
      list-style: none;
      li {
        input {
          width: 150%;
          padding: 6% 3%;
          font-size: 1rem;
          border: 0.3px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 15px #ddd;
          outline: none;
        }
      }
    }
  }

  .nav-cart {
    display: flex;
    align-self: center;

    p {
      padding: 0.5rem 1rem;
      margin: 0 1rem;
      border: 0.3px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 15px #ddd;
    }
    p:nth-child(1) {
      color: cyan;
      font-size: 1.3rem;
      box-shadow: 0 2px 15px #eee;
      /* background: orange; */
    }
    p:nth-child(2) {
      color: #eee;
      font-size: 1.3rem;
      background: orange;
    }
  }
`;
