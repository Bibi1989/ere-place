import { db, sql } from "../../models/pg-connect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginInterface } from "../../utils/interfaces";
import { loginValidation } from "../../utils/validations";

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  
  const error = loginValidation(
    email,
    password
  );

  if (error.email) return res.status(404).json({ error: error.email });
  if (error.password) return res.status(404).json({ error: error.password });

  let [user] = await db.query(sql`SELECT email, password FROM users`)

  console.log(user)

  if(!user) return res.status(404).json({error: "User have not register"})

    const validPassword = await bcrypt.compare(password, user.password)

};
