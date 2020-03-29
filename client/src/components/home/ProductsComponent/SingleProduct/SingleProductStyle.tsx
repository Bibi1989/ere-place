import styled from "styled-components";

export const SingleView = styled.div`
  padding: 5% 20%;

  .images {
    height: 20vh;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin-top: 10px;
    overflow: hidden;

    div {
      min-width: 100%;
      height: 20vh;
      overflow: hidden;
      cursor: pointer;
      position: relative;

      img {
        background: #fff;
        opacity: 0.4;
        border-radius: 1em;
        width: 100%;
        min-height: 100%;
      }
    }
  }
  .second-section-card {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 20px;

    .second-section-image {
      width: 100%;
      max-height: 70vh;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 60px #999;

      img {
        width: 100%;
        min-height: 100%;
        transition: all 0.5s ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .second-section-detail {
      color: #555;
      .quantity-select {
        margin: 1.5em 0;

        .select {
          outline: none;
        }
      }
      .second-section-content-one {
        p:first-child {
          font-size: 2rem;
          margin: 0;
          text-transform: capitalize;
        }
        p:last-child {
          margin-bottom: 1rem;
          font-size: 2rem;
        }
      }

      .second-section-content-two {
        p {
          font-size: 1.5rem;
        }
      }

      .second-section-overlay {
        .overlay-icons {
          display: flex;
          flex-direction: column;
          .cart {
            padding: 5% 2%;
            background-color: orange;
            color: #eee;
            border: 0.3px solid #eee;
            box-shadow: 0 2px 15px #eee;
            border-radius: 5px;
            margin: 1rem 0;
            outline: none;
            cursor: pointer;

            i {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
`;

export const Div = styled.div`
  padding: 5% 10%;
`;
