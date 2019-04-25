import server from "./app";
import "@babel/polyfill";

const PORT = process.env.PORT || 12340;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
