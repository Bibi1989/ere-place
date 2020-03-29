import React from "react";
import { Icon } from "semantic-ui-react";
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
              let c: any = JSON.parse(product.image_url) || [];
              c.forEach((a: any) => {
                b.push(a);
              });
              return (
                <div
                  key={product.id}
                  className='second-section-card'
                  data-aos='fade-left'
                  data-aos-delay={(i + 1) * 100}
                >
                  {products.length > 0 ? (
                    <>
                      <div className='second-section-image'>
                        <img
                          src={b !== undefined && b[0]}
                          alt={product.title}
                        />
                        <div className='second-section-overlay'>
                          <div className='overlay-icons'>
                            <div className='cart'>
                              {/* <span>View Product</span> */}
                              <Link to={`/single/${product.id}`}>
                                <Icon name='info'></Icon>
                              </Link>
                            </div>
                            <div className='cart'>
                              {/* <span>Add To Cart</span> */}
                              <Icon
                                name='shopping bag'
                                onClick={() => handleCart(product)}
                              ></Icon>
                            </div>
                            <div className='cart'>
                              {/* <span>Add To Wishlist</span> */}
                              <Icon
                                name='heart'
                                onClick={() => handleWishList(product)}
                              ></Icon>
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
                    </>
                  ) : (
                    <div>No Products Yet</div>
                  )}
                </div>
              );
            })}
        </Product>
      </Div>
    </div>
  );
};

export default ProductComponent;
