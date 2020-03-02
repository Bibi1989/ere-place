import { Request, Response, Router } from "express";
const router = Router();
import {
  getAllProducts,
  createProduct
} from "../controllers/products/product_controller";
import { Auth } from "../controllers/users/authentication";
import { RegisterInterface } from "../utils/interfaces";

router.get("/products", async (req: Request, res: Response) => {
  const products = await getAllProducts();
  return res.json({ products });
});

router.post("/products", Auth, async (req: any, res: Response) => {
  const [user] = req.user['user'];
  const products = await createProduct(req, user);
  return res.json({ products });
});

export default router;
