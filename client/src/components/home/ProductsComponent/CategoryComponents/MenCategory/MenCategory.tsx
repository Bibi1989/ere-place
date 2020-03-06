import React from "react";
import { getProducts, addOrder } from "../../../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Div } from "./MenCategoryStyle";
import ProductComponent from "../../../../products/ProductComponent";

const MenCategory = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts(dispatch);

    // eslint-disable-next-line
  }, []);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  let men_products = products
    .filter((men: any) => men.category.toLowerCase() === "men")
    .slice(0, 3);

  const handleCart = (product: any) => {
    addOrder(dispatch, product);
  };

  return (
    <Div>
      <ProductComponent
        products={men_products}
        title='Men Wears'
        handleCart={handleCart}
      />
      ;
      <button>
        <Link className='links' to='/men'>
          View More...
        </Link>
      </button>
    </Div>
  );
};

export default MenCategory;
