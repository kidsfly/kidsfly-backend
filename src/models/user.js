import db from "../../data/dbConfig";

export async function findUserByLogin(email, password) {
  let res = await db("user").where({ email, password });
  console.log(res);
  if (res == false) {
    res = false;
  }
  return res;
}

export function findUserByEmail(email) {
  return db("user").where({ email });
}

export function findUser(id) {
  return db("user")
    .first()
    .where({ id });
}

export function findUsers() {
  return db("users");
}

export function createUser(user) {
  return db("user").insert(user);
}

export function updateUser(id, updatedUser) {
  return db("user")
    .where({ id })
    .update(updatedUser);
}

export function deleteUser(id) {
  return db("user")
    .where({ id })
    .del();
}
