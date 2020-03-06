import React from "react";
import { getProducts, addOrder } from "../../../../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product, Div } from "./AllWomenStyle";
import { Productss } from "../../../../../productReducer/interfaces";

const AllWomen = () => {
  const [state, setState] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts(dispatch);

    // eslint-disable-next-line
  }, []);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  let women_products = products.filter(
    (women: Productss) => women.category.toLowerCase() === "women"
  );

  const handleSelect = (e: any) => {
    const sortByDate = [...products]
      .filter((women: Productss) => women.category.toLowerCase() === "women")
      .reverse();
    const sortByPriceLowHigh = [...products]
      .filter((women: Productss) => women.category.toLowerCase() === "women")
      .sort(
        (a: Productss, b: Productss) => parseInt(a.price) - parseInt(b.price)
      );
    const sortByPriceHighLow = [...products]
      .filter((women: any) => women.category.toLowerCase() === "women")
      .sort(
        (a: Productss, b: Productss) => parseInt(b.price) - parseInt(a.price)
      );
    if (e.target.value === "date") {
      return setState(sortByDate);
    }
    if (e.target.value === "low_high") {
      return setState(sortByPriceLowHigh);
    }
    if (e.target.value === "high_low") {
      return setState(sortByPriceHighLow);
    }
  };

  women_products = state ? state : women_products;

  const handleCart = (product: any) => {
    addOrder(dispatch, product);
  };

  return (
    <Div>
      <h1>Women Wears</h1>
      <div className='select'>
        <i className='fas fa-sort-amount-down-alt'></i>
        <select name='' onChange={handleSelect}>
          <option value=''>Sort Latest collections</option>
          <option value='date'>Sort by date</option>
          <option value='low_high'>Price: lowest - Highest</option>
          <option value='high_low'>Price: Highest - Lowest</option>
        </select>
      </div>
      {/* <CSSTransition in={true} timeout={1000} className='my-node' unmountOnExit> */}
      <Product>
        {women_products.map((product: any) => (
          <div key={product.id} className='second-section-card'>
            <div className='second-section-image'>
              <img src={product.image_url} alt={product.title} />
              <div className='second-section-overlay'>
                <div className='overlay-icons'>
                  <div className='cart'>
                    <Link to={`/single/${product.id}`}>
                      <i className='fas fa-external-link-alt'></i>
                    </Link>
                  </div>
                  <div className='cart' onClick={handleCart}>
                    <i className='fas fa-cart-plus'></i>
                  </div>
                  <div className='cart'>
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
        ))}
      </Product>
      {/* </CSSTransition> */}
    </Div>
  );
};

export default AllWomen;
