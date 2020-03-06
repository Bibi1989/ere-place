import {
  GET_PRODUCTS,
  ADD_ORDER,
  ADD_PRODUCTS,
  SINGLE_PRODUCT,
  GET_ORDERS,
  DELETE_ORDER
} from "./types";
// import { GetProducts, ActionType } from "./interfaces";
import axios from "axios";
import { Products, Productss } from "./interfaces";

const fashion_product: any = localStorage.getItem("fashion");
const fashion_products = JSON.parse(fashion_product) || [];

const getProductsAction = (products: any) => ({
  type: GET_PRODUCTS,
  products
});

const getSingleProductAction = (product: any) => ({
  type: SINGLE_PRODUCT,
  product
});

const addProductAction = (product: Products) => ({
  type: ADD_PRODUCTS,
  product
});

const orderAction = (order: Products) => ({
  type: ADD_ORDER,
  order
});

export const getProducts = async (dispatch: any) => {
  const products = await axios.get(`http://localhost:4000/api/products`);
  dispatch(getProductsAction(products.data.products));
};
export const getSingleProduct = async (dispatch: any, id: string) => {
  const product = await axios.get(`http://localhost:4000/api/product/${id}`);
  dispatch(getSingleProductAction(product.data.product[0]));
};

export const addProducts = (dispatch: any, body: Products) => {
  dispatch(addProductAction(body));
};

export const getOrders = async (dispatch: any) => {
  const response = await axios.get(`http://localhost:4000/api/orders`);
  dispatch({ type: GET_ORDERS, payload: response.data.orders });
};

export const addOrder = async (dispatch: any, orders: Products) => {
  fashion_products.push(orders);
  localStorage.setItem("fashion", JSON.stringify(fashion_products));
  const order: any = await axios.post(
    `http://localhost:4000/api/orders`,
    orders,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`
      }
    }
  );
  dispatch(orderAction(order));
};

export const deleteOrder = async (dispatch: any, id: string) => {
  const response: any = await axios.delete(
    `http://localhost:4000/api/orders/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`
      }
    }
  );
  dispatch({ type: DELETE_ORDER, payload: response.data.delete_msg });
};
