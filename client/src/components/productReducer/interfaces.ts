import { GET_PRODUCTS, ADD_ORDER, ADD_PRODUCTS } from "./types";
export interface Products {
  id: number;
  title: string;
  unit: string;
  price: string;
  location: string;
  quantity?: string;
}

export interface Productss {
  id: string;
  title: string;
  category: string;
  category_type: string;
  description: string;
  price: string;
  image_url: string;
  stock: string;
  age_to: string;
  age_from: string;
  seller_id: string;
  createdAt: string;
  location: string;
}

// actions interface
export interface GetProducts {
  type: typeof GET_PRODUCTS;
  products: Products[];
}

export interface SingleProduct {
  type: typeof GET_PRODUCTS;
  product: Products;
}

export interface AddOrder {
  type: typeof ADD_PRODUCTS;
  order: any;
}

export type AllActionTypes = GetProducts | AddOrder;

export type ActionType = AllActionTypes;
