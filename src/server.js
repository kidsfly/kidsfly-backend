import server from "./app";

const PORT = process.env.PORT || 12344;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
