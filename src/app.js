import express from "express";
import setGeneraliddleware from "./middleware/generalMiddleware";
import errorHandler from "./middleware/errorHandler";
import verifyToken from "./middleware/verifyToken";

const server = express();
setGeneraliddleware(server);

server.get("/", (req, res) => res.send("Hello World!"));

server
  .route("/users")
  .get(verifyToken)
  .post()
  .put(verifyToken)
  .delete(verifyToken);
//Auth required beyond this line
server.use(verifyToken);

server
  .route("/trips")
  .get()
  .post();

server
  .route("/users:id")
  .get()
  .put()
  .delete();
server
  .route("/trips:id")
  .get()
  .put()
  .delete();

server.use(errorHandler);

export default server;
