export interface RegisterInterface {
  first_name: string;
  last_name: string;
  phone: string;
  is_seller: string;
  email: string;
  password: string;
  image_url?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface Products {
  title: string;
  category: string;
  category_type: string;
  description: string;
  price: string;
  location: string;
  image_id: string;
  stock: string;
  seller_id: string;
}
