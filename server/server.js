import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const server = express();
const port = process.env.SERVER_PORT || 8000;

server.use(cors());
server.use(express.json());

server.use("/", router);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
