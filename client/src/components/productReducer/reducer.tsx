import {
  GET_PRODUCTS,
  ADD_PRODUCTS,
  ADD_ORDER,
  SINGLE_PRODUCT,
  GET_ORDERS,
  DELETE_ORDER
} from "./types";
// import { Products } from "./interfaces";

const initialState = {
  products: [],
  product: {},
  order: {},
  orders: [],
  NoOfCarts: 0,
  delete_msg: ""
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      const reverseProducts = action.products.reverse();
      return {
        ...state,
        products: reverseProducts || []
      };
    case SINGLE_PRODUCT:
      const image = JSON.parse(action.product.image_url);
      return {
        ...state,
        product: { ...action.product, image }
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [action.product, ...state.products]
      };
    case GET_ORDERS:
      const NoOfCarts = action.payload.length;
      return {
        ...state,
        orders: action.payload,
        NoOfCarts
      };
    case ADD_ORDER:
      return {
        ...state,
        order: action.order
      };
    case DELETE_ORDER:
      return {
        ...state,
        delete_msg: action.payload
      };
    default:
      return state;
  }
};
