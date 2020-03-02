import { GET_PRODUCTS, ADD_ORDER, ADD_PRODUCTS, SINGLE_PRODUCT} from "./types";
// import { GetProducts, ActionType } from "./interfaces";
import { Products } from "./interfaces";

const products = [
  { id: 1, title: "lace", price: "2000", unit: "2", location: "bayelsa" },
  { id: 2, title: "wrapper", price: "3000", unit: "3", location: "delta" },
  { id: 3, title: "akara", price: "4000", unit: "4", location: "benin" },
  { id: 4, title: "cap", price: "5000", unit: "5", location: "ondo" },
  { id: 5, title: "jean", price: "6000", unit: "6", location: "ogun" },
  { id: 6, title: "polyester", price: "7000", unit: "7", location: "osun" },
  { id: 7, title: "cotton", price: "8000", unit: "8", location: "lagos" },
  { id: 8, title: "sweater", price: "9000", unit: "9", location: "rivers" }
];


const getProductsAction = (products: Products[]) => ({
    type: GET_PRODUCTS,
    products
});

const getSingleProductAction = (id: number) => ({type: SINGLE_PRODUCT, id})

const addProductAction = (product: Products) => ({
    type: ADD_PRODUCTS,
    product
});

const orderAction = (id: number) => ({
    type: ADD_ORDER,
    id
});

export const getProducts = (dispatch: any) => {
  dispatch(getProductsAction(products));
};
export const getSingleProduct = (dispatch: any, id: number) => {
  dispatch(getSingleProductAction(id));
};

export const addProducts = (dispatch: any, body: Products) => {
  dispatch(addProductAction(body));
};

export const addOrder = (dispatch: any, id: number) => {
  dispatch(orderAction(id));
};
