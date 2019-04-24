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

// server
//   .route("/users")
//   .get(verifyToken)
//   .post()
//   .put(verifyToken)
//   .delete(verifyToken);
//Auth required beyond this line
// server.use(verifyToken);

// server
//   .route("/trips")
//   .get()
//   .post();

// server
//   .route("/users:id")
//   .get()
//   .put()
//   .delete();
// server
//   .route("/trips:id")
//   .get()
//   .put()
//   .delete();

// server.use(errorHandler);

export default server;
