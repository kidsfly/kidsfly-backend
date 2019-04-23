import {
  findUser,
  findUsers,
  createUser,
  updateUser,
  deleteUser
} from "../models/user";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const get = async (req, res, next) => {
  try {
    const { id } = req.token;
    const user = await findUser(id);
    if (user === undefined) {
      return res.status(404).json({ msg: "404: User cannot be found." });
    }

    res.status(200).json(user);
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};
