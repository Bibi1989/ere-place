import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";
import { Productss } from "../../../productReducer/interfaces";
import { Div } from "./SecondSectionStyle";

const SecondSection = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState();
  React.useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line
  }, []);
  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  ).slice(0, 6);

  const handleSelect = (e: any) => {
    const sorted = [...products].reverse();
    setState(sorted);
    const sortByDate = [...products].reverse();
    const sortByPriceLowHigh = [...products].sort(
      (a: Productss, b: Productss) => parseInt(a.price) - parseInt(b.price)
    );
    const sortByPriceHighLow = [...products].sort(
      (a: Productss, b: Productss) => parseInt(b.price) - parseInt(a.price)
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

  return (
    <Div>
      <select name='' onChange={handleSelect}>
        <option value=''>Select Option</option>
        <option value='date'>Sort by date</option>
        <option value='low_high'>Price: lowest - Highest</option>
        <option value='high_low'>Price: Highest - Lowest</option>
      </select>
      {state ? (
        <ProductComponent products={state} title='Latest Collections' />
      ) : (
        <ProductComponent products={products} title='Latest Collections' />
      )}
    </Div>
  );
};

export default SecondSection;
