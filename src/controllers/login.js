import {
  findUser,
  findUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserByLogin
} from "../models/user";
import { createToken } from "../middleware/verifyToken";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByLogin(email, password);
    if (user == false) {
      return res
        .status(404)
        .json({ msg: "Please input a valid email and password." });
    } else {
      res
        .status(200)
        .json({ token: `${createToken(user[0])}`, is_admin: user[0].is_admin });
    }
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};
