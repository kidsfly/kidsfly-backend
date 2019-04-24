import db from "../../data/dbConfig";

export function findUserByLogin(email, password) {
  return db("user").where({ email }, { password });
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
  db("user").insert(user);
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
