import React, { useEffect, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProducts, addOrder } from "../productReducer/actions";
import { Products } from "../productReducer/interfaces";

interface Form {
  title: string;
  price: string;
  unit: string;
  location: string;
}

const ShowProducts = () => {
  const products = useSelector(
    ({ productReducer }: any) => productReducer.products
  );
  const order = useSelector(({ productReducer }: any) => productReducer.order);
  console.log(products.length);
  const len: number = products.length;
  const productForm: Form = {
    title: "",
    price: "",
    unit: "",
    location: ""
  };
  const [form, setForm] = useState(productForm);
  const data = {
    id: len + 1,
    ...form
  };
  useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line
  }, []);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addProducts(dispatch, data);
  };

  const handleInput = ({ target: { value, name } }: any) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleCart = (id: number) => {
    addOrder(dispatch, id);
  };
  //   const c = order.map(parseInt(order.price))
  const total: number = order.reduce(
    (a: any, v: any) => (a = a + parseInt(v.price)),
    0
  );
  console.log(total);

  const ListProducts = products.map((product: Products) => (
    <div
      key={product.id}
      style={{ border: "1px solid", margin: "2%", padding: "10px 0" }}
    >
      <p>
        <span>Product Name:</span> {product.title.toUpperCase()}
      </p>
      <p>
        <span>Price:</span> <span>$</span> {product.price}
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px"
        }}
      >
        <span>Unit:</span> {product.unit}
        <span>Location:</span> {product.location}
      </p>
      <button onClick={() => handleCart(product.id)}>Add To Cart</button>
    </div>
  ));
  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleInput}
        />
        <input
          type='text'
          name='price'
          placeholder='price'
          onChange={handleInput}
        />
        <input
          type='text'
          name='unit'
          placeholder='Unit'
          onChange={handleInput}
        />
        <input
          type='text'
          name='location'
          placeholder='location'
          onChange={handleInput}
        />
        <button type='submit'>Add Products</button>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "5% 10%"
        }}
      >
        {ListProducts}
      </div>
      <>
        {order.map((ord: Products, i: any) => (
          <div key={i} style={{}}>
            <p>
              <span>Title: </span>
              {ord.title}
            </p>
            <p>
              <span>Price: </span>
              {ord.price}
            </p>
            <button>X</button>
          </div>
        ))}
        <p>
          <span>Total Amount: </span> {total}
        </p>
      </>
    </div>
  );
};

export default ShowProducts;
