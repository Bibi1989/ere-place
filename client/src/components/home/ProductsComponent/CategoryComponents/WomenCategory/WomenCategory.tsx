import React from "react";
import { getProducts } from "../../../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Div } from "./WomenCategoryStyle";
import ProductComponent from "../../../../products/ProductComponent";

const WomenCategory = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts(dispatch);

    // eslint-disable-next-line
  }, []);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  const women_products = products
    .filter((women: any) => women.category.toLowerCase() === "women")
    .slice(0, 3);

  return (
    <Div>
      <ProductComponent products={women_products} title='Women Wears' />
      <button>
        <Link className='links' to='/women'>
          View More...
        </Link>
      </button>
    </Div>
  );
};

export default WomenCategory;
