import server from "./app";

const PORT = process.env.PORT || 12345;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
