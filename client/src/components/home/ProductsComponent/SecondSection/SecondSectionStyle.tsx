import styled from "styled-components";

export const Div = styled.div`
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  .select {
    align-self: flex-end;
    color: #777;
    border: none;
    outline: none;

    i {
      font-size: 1.5rem;
    }

    select {
      color: #777;
      border: none;
      outline: none;
    }
  }
`;

// export const Product = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 3%;
//   margin: 3% 5% 10% 5%;

//   .second-section-card {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     color: #777;
//     transform: scale(1);

//     .second-section-detail {
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       padding: 10px;
//       box-shadow: 0px 2px 15px #ddd;
//       border-radius: 5px;

//       .second-section-content-one {
//         display: flex;
//         justify-content: space-between;
//       }

//       .second-section-content-two {
//         display: flex;
//         justify-content: flex-start;
//       }
//     }

//     .second-section-image {
//       max-height: 210px;
//       position: relative;
//       overflow-x: hidden;
//       overflow-y: hidden;
//       transition: all 0.7s ease-in;
//       img {
//         max-width: 100%;
//         min-height: 250px;
//       }
//       .second-section-overlay {
//         position: absolute;
//         right: -40px;
//         bottom: 20px;
//         transition: all 0.5s ease-in;

//         .overlay-icons {
//           display: flex;
//           flex-direction: column;
//           span {
//             transition: all 0.5s ease-in;
//             opacity: 0;
//             font-size: 0.8rem;
//           }

//           i {
//             color: orangered;
//             font-size: 1.7rem;
//             padding: 0.8rem 0;
//             cursor: pointer;
//           }
//         }
//       }

//       &:hover .second-section-overlay {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         align-items: flex-end;
//         right: 0;
//         bottom: 5px;
//         padding: 15px;
//         width: 100%;
//         height: 100%;
//         background-color: #22222286;
//         box-shadow: 0px 2px 15px #22222286;
//         border-radius: 3px;
//         transition: all 0.7s ease-in;
//         .overlay-icons {
//           span {
//             opacity: 0.9;
//             transition: all 0.7s ease-in;
//             color: teal;
//           }
//         }
//       }
//     }
//     &:hover .second-section-image {
//       border-radius: 10px;
//       transform: scale(1.05);
//       z-index: 5;
//       transition: all 0.7s ease-in;
//     }
//   }
// `;
