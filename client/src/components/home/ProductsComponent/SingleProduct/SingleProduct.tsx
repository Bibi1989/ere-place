import React, { useEffect } from "react";
import { SingleView, Div } from "./SingleProductStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, getProducts } from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";

const SingleProduct = () => {
  const { singleId }: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleProduct(dispatch, singleId);
    getProducts(dispatch);

    // eslint-disable-next-line
  }, [dispatch, singleId]);
  const product = useSelector(
    ({ productReducer }: any) => productReducer.product
  );
  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  ).slice(0, 12);
  return (
    <>
      <SingleView>
        <div className='second-section-card'>
          <div className='second-section-image'>
            <img
              src={product !== undefined && product.image_url}
              alt={product.title}
            />
          </div>
          <div className='second-section-detail'>
            <div className='second-section-content-one'>
              <p>{product !== undefined && product.title}</p>
              <p>{product.description}</p>
              <p>
                <span>$</span> {product !== undefined && product.price}
              </p>
            </div>
            <div className='second-section-content-two'>
              <p>{product !== undefined && product.location}</p>
            </div>

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
      <Div>
        <ProductComponent products={products} title='Other Collections' />
      </Div>
    </>
  );
};

export default SingleProduct;
