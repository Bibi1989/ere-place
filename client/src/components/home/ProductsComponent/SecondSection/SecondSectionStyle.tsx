import styled from "styled-components";

export const Div = styled.div`
  padding: 2% 0;
  h1 {
    text-align: center;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3%;
  padding: 3% 5%;

  .second-section-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #777;
    transform: scale(1);

    .second-section-detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      box-shadow: 0px 2px 15px #ddd;
      border-radius: 5px;

      .second-section-content-one {
        display: flex;
        justify-content: space-between;
      }

      .second-section-content-two {
        display: flex;
        justify-content: flex-start;
      }
    }

    .second-section-image {
      position: relative;
      overflow-x: hidden;
      transition: all 0.7s ease-in;
      img {
        width: 100%;
        height: 250px;
      }
      .second-section-overlay {
        position: absolute;
        right: -40px;
        bottom: 20px;
        transition: all 0.5s ease-in;

        .overlay-icons {
          display: flex;
          flex-direction: column;
          span {
            transition: all 0.5s ease-in;
            opacity: 0;
            font-size: 0.8rem;
          }

          i {
            color: #777;
            font-size: 2rem;
            padding: 0.8rem 0;
            cursor: pointer;
          }
        }
      }

      &:hover .second-section-overlay {
        right: 20px;
        transition: all 0.7s ease-in;
        .overlay-icons {
          span {
            opacity: 0.9;
            transition: all 0.7s ease-in;
            color: teal;
          }
        }
      }
    }
    &:hover .second-section-image {
      border-radius: 10px;
      transform: scale(1.05);
      z-index: 5;
      transition: all 0.7s ease-in;
    }
  }
`;
