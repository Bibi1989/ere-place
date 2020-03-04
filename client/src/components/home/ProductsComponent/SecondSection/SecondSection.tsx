import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";

const SecondSection = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line
  }, []);
  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  ).slice(0, 6);

  return <ProductComponent products={products} title="Latest Collections" />;
};

export default SecondSection;
