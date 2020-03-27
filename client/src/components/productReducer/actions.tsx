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

// let url = `https://ere-place-api.herokuapp.com`;
let url = `http://localhost:4000`;
const fashion_product: any = localStorage.getItem("fashion");
const wishlist: any = localStorage.getItem("wishlist");
let fashion_products = JSON.parse(fashion_product) || [];
let wishlists = JSON.parse(wishlist) || [];

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
  const product = await axios.get(`${url}/api/product/${id}`);
  dispatch(getSingleProductAction(product.data.product[0]));
};

export const addProducts = (dispatch: any, body: Products) => {
  dispatch(addProductAction(body));
};

export const getOrders = async (dispatch: any) => {
  const response = await axios.get(`${url}/api/orders`);
  dispatch({ type: GET_ORDERS, payload: response.data.orders });
};

export const addOrder = async (dispatch: any, orders: Products) => {
  let check = fashion_products.filter(
    (order: Products | any) => order.id === orders.id
  );
  if (check.length > 0) {
    return fashion_products.map((order: Products | any) => {
      if (order.id === orders.id) {
        order.quantity = 1 + parseInt(order.quantity);
        localStorage.setItem("fashion", JSON.stringify(fashion_products));
      }
      return order;
    });
  }
  fashion_products.push({ ...orders, quantity: "1" });
  localStorage.setItem("fashion", JSON.stringify(fashion_products));
};

export const addWishList = (wishList: Products) => {
  let check = wishlists.filter(
    (order: Products | any) => order.id === wishList.id
  );
  if (check.length > 0) {
    return wishlists.map((wish: Products | any) => {
      if (wish.id === wishList.id) {
        wish.quantity = 1 + parseInt(wish.quantity);
        localStorage.setItem("wishlist", JSON.stringify(wishlists));
      }
      return wish;
    });
  }
  wishlists.push({ ...wishList, quantity: "1" });
  localStorage.setItem("wishlist", JSON.stringify(wishlists));
};

export const deleteOrder = async (dispatch: any, id: string) => {
  fashion_products = fashion_products.filter((order: any) => order.id !== id);
  localStorage.setItem("fashion", JSON.stringify(fashion_products));
  const response: any = await axios.delete(`${url}/api/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`
    }
  });
  dispatch({ type: DELETE_ORDER, payload: response.data.delete_msg });
};

export const deleteWishList = async (dispatch: any, id: string) => {
  wishlists = wishlists.filter((wishlist: any) => wishlist.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlists));
  const response: any = await axios.delete(`${url}/api/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`
    }
  });
  dispatch({ type: DELETE_ORDER, payload: response.data.delete_msg });
};
