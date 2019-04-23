import express from "express";
import cors from "cors";

const setGeneralMiddleware = server => {
  server.use(express.json());
  server.use(
    cors({
      credentials: true,
      origin: true
    })
  );
};

export default setGeneralMiddleware;
