import express from "express";
import Router from "./routes/route";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Connection } from "./database/db";

const app = express();

dotenv.config;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const port = 8000;

Connection();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
