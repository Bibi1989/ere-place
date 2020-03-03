import React, { useEffect } from "react";
import { Side } from "./SideBarStyle";
import {
  SideComponent1,
  SideComponent2,
  SideComponent3
} from "./SideBarComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../productReducer/actions";

const SideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);

    // eslint-disable-next-line
  }, []);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  const men_products = products.filter(
    (men: any) => men.category.toLowerCase() === "men"
  );

  return (
    <Side>
      <Link to='/show'>
        <SideComponent1 men={men_products} />
      </Link>
      <SideComponent2 />
      <SideComponent3 />
    </Side>
  );
};

export default SideBar;
