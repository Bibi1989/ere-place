import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  addOrder,
  addWishList
} from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";
import { Div } from "./SecondSectionStyle";

const SecondSection = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState();
  React.useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line
  }, []);
  const products =
    useSelector(({ productReducer }: any) => productReducer.products).slice(
      0,
      6
    ) || [];

  const handleSelect = (e: any) => {
    const sorted = [...products].reverse();
    setState(sorted);
    const sortByDate = [...products].reverse();
    const sortByPriceLowHigh = [...products].sort(
      (a: any, b: any) => parseInt(a.price) - parseInt(b.price)
    );
    const sortByPriceHighLow = [...products].sort(
      (a: any, b: any) => parseInt(b.price) - parseInt(a.price)
    );
    if (e.target.value === "date") {
      return setState(sortByDate);
    }
    if (e.target.value === "low_high") {
      return setState(sortByPriceLowHigh);
    }
    if (e.target.value === "high_low") {
      return setState(sortByPriceHighLow);
    }
  };

  const quantity: string = "1";

  const handleCart = (product: any) => {
    addOrder(dispatch, product, quantity);
  };

  const handleWishList = (pro: any) => {
    addWishList(dispatch, pro);
  };

  return (
    <Div className='second-section-mobile'>
      <div className='select'>
        <i className='fas fa-sort-amount-down-alt'></i>
        <select name='' onChange={handleSelect}>
          <option value=''>Sort Latest collections</option>
          <option value='date'>Sort by date</option>
          <option value='low_high'>Price: lowest - Highest</option>
          <option value='high_low'>Price: Highest - Lowest</option>
        </select>
      </div>
      {state ? (
        <ProductComponent
          products={state}
          title='Latest Collections'
          handleCart={handleCart}
          handleWishList={handleWishList}
        />
      ) : (
        <ProductComponent
          products={products}
          title='Latest Collections'
          handleCart={handleCart}
          handleWishList={handleWishList}
        />
      )}
    </Div>
  );
};

export default SecondSection;
