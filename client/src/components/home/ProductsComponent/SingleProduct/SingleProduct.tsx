import React, { useEffect, useState } from "react";
import Select from "react-select";
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

const selectArray: any = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" }
];

const SingleProduct = () => {
  const fashion: any = localStorage.getItem("fashion");
  const fashions: any = JSON.parse(fashion);

  const { singleId }: any = useParams();
  const [image, setImage] = useState("");
  const [bool, setBool] = useState(true);
  const [active, setActive] = useState("");
  const [index, setIndex] = useState(0);
  const [check1, setCheck1] = useState(
    fashions.some((wish: any) => wish.id === singleId)
  );
  const [quantity, setQuantity] = useState<any>("");
  const dispatch = useDispatch();
  const product = useSelector(
    ({ productReducer }: any) => productReducer.product
  );
  useEffect(() => {
    getSingleProduct(dispatch, singleId);
    getProducts(dispatch);
    window.scrollTo(0, 0);
    if (window.scrollY === 0) {
      setIndex(0);
    }
    const timer = setInterval(() => {
      setIndex((c: any) => c + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };

    // eslint-disable-next-line
  }, [dispatch, singleId]);
  const d: number = product.image && product.image.length;
  if (d === index) {
    setIndex(index % d);
  }

  const handleQuantity = (quantity: any) => {
    setQuantity(quantity);
    setCheck1(!check1);
  };

  console.log("Quantity: ", typeof quantity.label);

  const handleCart = (pro: any) => {
    addOrder(dispatch, pro, quantity.label);
  };

  const handleWishList = (pro: any) => {
    addWishList(dispatch, pro);
  };

  const handleImageClick = (img: string) => {
    setImage(img);
    setBool(false);
    setIndex(0);
  };

  const wishlist: any = localStorage.getItem("wishlist");
  const wishlists: any = JSON.parse(wishlist);

  const check = wishlists.some((wish: any) => wish.id === singleId);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  ).slice(0, 12);
  return (
    <>
      <SingleView data-aos='fade-left'>
        <div className='second-section-card'>
          <div className='second-section-image'>
            {
              <img
                src={
                  product.image && bool
                    ? product.image[index]
                    : !bool
                    ? image
                    : image
                }
                alt={product.title}
              />
            }
            {/* <img
              src={
                product.image && bool ? product.image[0] : !bool ? image : image
              }
              alt={product.title}
            /> */}
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

            <div className='quantity-select'>
              <Select
                value={quantity}
                className='select'
                onChange={handleQuantity}
                options={selectArray}
              />
            </div>

            <div className='second-section-overlay'>
              <div className='overlay-icons'>
                <button
                  style={
                    check1
                      ? { background: "lightgray", cursor: "not-allowed" }
                      : {}
                  }
                  className='cart'
                  onClick={() => handleCart(product)}
                >
                  <i className='fas fa-cart-plus'></i>
                  <span>Add To Cart</span>
                </button>
                <button
                  style={
                    check
                      ? { background: "lightgray", cursor: "not-allowed" }
                      : {}
                  }
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
            [...product.image].map((img: string, i: any) => {
              return (
                <div
                  key={i}
                  onClick={() => handleImageClick(img)}
                  data-aos='fade-left'
                >
                  <img
                    src={img}
                    style={{
                      opacity: `${active == i ? "1" : "0.6"}`
                    }}
                    onClick={() => {
                      setActive(i);
                    }}
                  />
                  <div className='thumb-overlay'></div>
                </div>
              );
            })}
        </div>
      </SingleView>
      <Div data-aos='fade-left'>
        <ProductComponent products={products} title='You May Also Like' />
      </Div>
    </>
  );
};

export default SingleProduct;
