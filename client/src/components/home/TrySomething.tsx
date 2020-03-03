import React from "react";
import styled from "styled-components";
import MenCategory from "./ProductsComponent/CategoryComponents/MenCategory/MenCategory";
import WomenCategory from "./ProductsComponent/CategoryComponents/WomenCategory/WomenCategory";

const TrySomething = () => {
  return (
    <>
      <Div>
        <div className='overlay-section'>
          <button>Men Wears</button>
          <button>Women Wears</button>
        </div>
        {/* <div className='text-section'></div> */}
      </Div>
      <MenCategory />
      <WomenCategory />
    </>
  );
};

export default TrySomething;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-image: url(${"./images/fashion3.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 400px;
  position: relative;

  .overlay-section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #22222286;

    button {
      background: orangered;
      color: #eee;
      padding: 1rem 2rem;
      margin: 0 1rem;
      border: 0.3px solid #ccc;
      border-radius: 2px;
      box-shadow: 0 2px 15px #22222286;
      outline: none;
      cursor: pointer;
    }
  }
`;
