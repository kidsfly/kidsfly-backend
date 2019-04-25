import express from "express";
import setGeneraliddleware from "./middleware/generalMiddleware";
import errorHandler from "./middleware/errorHandler";
import verifyToken from "./middleware/verifyToken";
import * as user from "./controllers/user";
import * as trip from "./controllers/trip";
import * as login from "./controllers/login";
const server = express();
setGeneraliddleware(server);

server.get("/", (req, res) => res.send("Hello World!"));

//login
server.route("/login").get(login.login);

server
  .route("/users")
  .get(verifyToken, user.get)
  .post(user.post);

//Auth required beyond this line
server.use(verifyToken);

server
  .route("/trips")
  .get(trip.get)
  .post(trip.post);

server
  .route("/users/:id")
  .get(user.get)
  .put(user.put)
  .delete(user.deleteU);

server
  .route("/trips/:id")
  .get(trip.get)
  .put(trip.put)
  .delete(trip.deleteT);

// server.use(errorHandler);

export default server;
