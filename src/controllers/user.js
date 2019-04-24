import {
  findUser,
  findUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserByLogin,
  findUserByEmail
} from "../models/user";
import { createToken } from "../middleware/verifyToken";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const get = async (req, res, next) => {
  const paramsId = req.params.id;
  if (!paramsId) {
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
  } else {
    try {
      const { id } = req.params;
      const user = await findUser(id);
      if (!user) {
        return res.status(404).json({ msg: "404: User cannot be found." });
      }
      res.status(200).json(user);
    } catch (e) {
      e.statusCode = 400;
      next(e);
    }
  }
};

export const post = async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      phone,
      password,
      airport,
      is_admin
    } = req.body;
    if (email && password) {
      const newUser = await createUser(req.body);
      console.log(newUser);
      res.status(200).json({ id: newUser[0] });
    }
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};
