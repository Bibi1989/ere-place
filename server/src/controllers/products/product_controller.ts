import { db, sql } from "../../models/pg-connect";
import { RegisterInterface, Products } from "../../utils/interfaces";

export const getAllProducts = async () => {
  try {
    const products = await db.query(sql`SELECT * FROM products`);
    return products;
  } catch (error) {}
};

export const createProduct = async (req: Request, user: RegisterInterface) => {
  const {email} = user;
  const {title, category, category_type, description, price, location, image_id, stock, seller_id}: Products = req.body
  
};
