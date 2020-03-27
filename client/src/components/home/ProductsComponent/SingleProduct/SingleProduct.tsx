import React, { useEffect, useState } from "react";
import { SingleView, Div } from "./SingleProductStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct,
  getProducts,
  addOrder,
  addWishList
} from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";

const SingleProduct = () => {
  const { singleId }: any = useParams();
  const [image, setImage] = useState("");
  const [bool, setBool] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleProduct(dispatch, singleId);
    getProducts(dispatch);

    // eslint-disable-next-line
  }, [dispatch, singleId]);
  const product = useSelector(
    ({ productReducer }: any) => productReducer.product
  );

  const handleCart = (pro: any) => {
    addOrder(dispatch, pro);
  };

  const handleWishList = (pro: any) => {
    addWishList(pro);
  };

  const handleImageClick = (img: string) => {
    setImage(img);
    setBool(false);
  };

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  ).slice(0, 12);
  return (
    <>
      <SingleView>
        <div className='second-section-card'>
          <div className='second-section-image'>
            <img
              src={
                product.image && bool ? product.image[0] : !bool ? image : image
              }
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
                <button className='cart' onClick={() => handleCart(product)}>
                  <i className='fas fa-cart-plus'></i>
                  <span>Add To Cart</span>
                </button>
                <button
                  className='cart'
                  onClick={() => handleWishList(product)}
                >
                  <i className='fas fa-heart'></i>
                  <span>Add To Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='images'>
          {product.image !== undefined &&
            product.image.map((img: string, i: number) => {
              return (
                <div key={i} onClick={() => handleImageClick(img)}>
                  <img src={img} />
                </div>
              );
            })}
        </div>
      </SingleView>
      <Div>
        <ProductComponent products={products} title='You May Also Like' />
      </Div>
    </>
  );
};

export default SingleProduct;
