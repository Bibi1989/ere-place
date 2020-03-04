import React from "react";
import { getProducts } from "../../../../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product, Div } from "./AllMenStyle";

const AllMen = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
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
    <Div>
      <h1>Men Wears</h1>
      <Product>
        {men_products.map((product: any) => (
          <div key={product.id} className='second-section-card'>
            <div className='second-section-image'>
              <img src={product.image_url} alt={product.title} />
              <div className='second-section-overlay'>
                <div className='overlay-icons'>
                  <div className='cart'>
                    {/* <span>View Product</span> */}
                    <Link to={`/single/${product.id}`}>
                      <i className='fas fa-external-link-alt'></i>
                    </Link>
                  </div>
                  <div className='cart'>
                    {/* <span>Add To Cart</span> */}
                    <i className='fas fa-cart-plus'></i>
                  </div>
                  <div className='cart'>
                    {/* <span>Add To Wishlist</span> */}
                    <i className='fas fa-heart'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='second-section-detail'>
              <div className='second-section-content-one'>
                <p>{product.title[0].toUpperCase() + product.title.slice(1)}</p>
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
        ))}
      </Product>
      {/* <button>View More...</button> */}
    </Div>
  );
};

export default AllMen;
