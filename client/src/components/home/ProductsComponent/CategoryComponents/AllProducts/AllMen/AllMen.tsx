import React from "react";
import { getProducts, addOrder } from "../../../../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product, Div } from "./AllMenStyle";
import { Productss } from "../../../../../productReducer/interfaces";

const AllMen = () => {
  const [state, setState] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts(dispatch);

    // eslint-disable-next-line
  }, []);

  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );

  let men_products = products.filter(
    (men: Productss) => men.category.toLowerCase() === "men"
  );

  const handleSelect = (e: any) => {
    const sortByDate = [...products]
      .filter((men: Productss) => men.category.toLowerCase() === "men")
      .reverse();
    const sortByPriceLowHigh = [...products]
      .filter((men: Productss) => men.category.toLowerCase() === "men")
      .sort(
        (a: Productss, b: Productss) => parseInt(a.price) - parseInt(b.price)
      );
    const sortByPriceHighLow = [...products]
      .filter((men: Productss) => men.category.toLowerCase() === "men")
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

  const quantity: string = "1";

  // filtering products
  men_products = state ? state : men_products;

  const handleCart = (product: any) => {
    addOrder(dispatch, product, quantity);
  };

  return (
    <Div>
      <h1>Men Wears</h1>
      <div className='select'>
        <i className='fas fa-sort-amount-down-alt'></i>
        <select name='' onChange={handleSelect}>
          <option value=''>Sort collections</option>
          <option value='date'>Date: new - old</option>
          <option value='low_high'>Price: lowest - Highest</option>
          <option value='high_low'>Price: Highest - Lowest</option>
        </select>
      </div>
      <Product>
        {men_products.map((product: any, i: number) => {
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
          );
        })}
      </Product>
      {/* <button>View More...</button> */}
    </Div>
  );
};

export default AllMen;
