import { GET_PRODUCTS, ADD_PRODUCTS, ADD_ORDER, SINGLE_PRODUCT } from "./types";
import { Products } from "./interfaces";

const initialState = {
  products: [],
  product: {},
  order: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        product: action.product
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [action.product, ...state.products]
      };
    case ADD_ORDER:
      const order = state.products.filter(
        (product: Products) => product.id === action.id
      );
      return {
        ...state,
        order: [order[0], ...state.order]
      };
    default:
      return state;
  }
};
