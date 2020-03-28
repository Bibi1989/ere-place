import React from "react";
import { Link } from "react-router-dom";
import { Product, Div } from "./ProductStyle";

const ProductComponent = ({
  products,
  title,
  handleCart,
  handleWishList
}: any) => {
  return (
    <div>
      <Div>
        <h1 data-aos='fade-left'>{title}</h1>
        <Product className='second-section-mobile'>
          {products !== undefined &&
            products.map((product: any, i: number) => {
              let b: any = [];
              JSON.parse(product.image_url).map((a: any) => {
                b.push(a);
              });
              return (
                <div
                  key={product.id}
                  className='second-section-card'
                  data-aos='fade-left'
                  data-aos-delay={(i + 1) * 100}
                >
                  <div className='second-section-image'>
                    <img src={b[0]} alt={product.title} />
                    <div className='second-section-overlay'>
                      <div className='overlay-icons'>
                        <div className='cart'>
                          {/* <span>View Product</span> */}
                          <Link to={`/single/${product.id}`}>
                            <i className='fas fa-external-link-alt'></i>
                          </Link>
                        </div>
                        <div
                          className='cart'
                          onClick={() => {
                            handleCart(product);
                          }}
                        >
                          {/* <span>Add To Cart</span> */}
                          <i className='fas fa-cart-plus'></i>
                        </div>
                        <div
                          className='cart'
                          onClick={() => handleWishList(product)}
                        >
                          {/* <span>Add To Wishlist</span> */}
                          <i className='fas fa-heart'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='second-section-detail'>
                    <div className='second-section-content-one'>
                      <p>
                        {product.title.length > 16
                          ? `${product.title.slice(0, 16)}...`
                          : product.title}
                      </p>
                      <p>
                        {product.location[0].toUpperCase() +
                          product.location.slice(1)}
                      </p>
                    </div>
                    <div className='second-section-content-two'>
                      <p>
                        <span>$</span> {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Product>
      </Div>
    </div>
  );
};

export default ProductComponent;
