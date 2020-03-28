import styled from "styled-components";

export const Div = styled.div`
  padding: 0% 0;
  h1 {
    text-align: center;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5%;
  padding: 3% 0% 5% 5%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10% 0% 10% 10%;
    grid-gap: 3%;
  }
  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10% 10% 80% 15%;
  }

  .second-section-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-height: 350px;
    color: #777;
    overflow: hidden;
    border-radius: 40px 0 1px 0;
    transform: scale(1);

    .second-section-detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      border: 0.6px solid #ddd;
      border-radius: 0px 0 40px 1px;

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
      max-height: 300px;
      width: 100%;
      position: relative;
      border: 1px solid #ddd;
      overflow-x: hidden;
      overflow-y: hidden;
      border-radius: 40px 0 1px 0;
      transition: all 0.7s ease-in;
      img {
        width: 100%;
        min-height: 250px;
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
            color: orangered;
            font-size: 1.7rem;
            margin: 1rem 0;
            cursor: pointer;
            transition: all 0.4s ease;

            &:hover {
              transform: scale(1.95);
            }
          }
        }
      }

      &:hover .second-section-overlay {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        right: 10px;
        bottom: 0px;
        padding: 15px;
        width: 100%;
        height: 100%;
        background-color: #22222286;
        box-shadow: 0px 2px 15px #22222286;
        border-radius: 3px;
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
