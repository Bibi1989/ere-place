import {
  GET_PRODUCTS,
  ADD_PRODUCTS,
  ADD_ORDER,
  ADD_WISHLIST,
  SINGLE_PRODUCT,
  GET_ORDERS,
  DELETE_ORDER,
  DELETE_WISHLIST
} from "./types";
// import { Products } from "./interfaces";

const initialState = {
  products: [],
  product: {},
  order: {},
  orders: [],
  NoOfCarts: 0,
  delete_msg: 0,
  delete_wishlist: 0,
  tracker: false
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
      return {
        ...state,
        orders: action.payload
      };
    case ADD_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case ADD_WISHLIST:
      return {
        ...state,
        order: action.payload
      };
    case DELETE_ORDER:
      return {
        ...state,
        delete_msg: action.payload
      };
    case DELETE_WISHLIST:
      return {
        ...state,
        delete_wishlist: action.payload
      };
    default:
      return state;
  }
};
