import React, { useEffect } from "react";
import { SingleView } from "./SingleProductStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, getProducts } from "../../../productReducer/actions";
import { Products } from "../../../productReducer/interfaces";

const SingleProduct = () => {
  const { singleId }: any = useParams<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleProduct(dispatch, singleId);
    getProducts(dispatch);
  }, [dispatch]);
  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  const product = products.filter(
    (pr: Products) => pr.id === parseInt(singleId)
  )[0];
  console.log(product);
  return (
    <SingleView>
      <div className='second-section-card'>
        <div className='second-section-image'>
          <img src={`/images/fashion1.jpg`} alt='fash1' />
        </div>
        <div className='second-section-detail'>
          <div className='second-section-content-one'>
            <p>{product !== undefined && product.title}</p>
            <p>
              <span>$</span> {product !== undefined && product.price}
            </p>
          </div>
          <div className='second-section-content-two'></div>
          <p>{product !== undefined && product.location}</p>

          <div className='second-section-overlay'>
            <div className='overlay-icons'>
              <button className='cart'>
                <i className='fas fa-cart-plus'></i>
                <span>Add To Cart</span>
              </button>
              <button className='cart'>
                <i className='fas fa-heart'></i>
                <span>Add To Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SingleView>
  );
};

export default SingleProduct;
