import { createConnection } from "mysql";
import express from "express";
import "dotenv/config";

const app = express();

const database = createConnection({
  host: "localhost",
  port: "3306",
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
});

database.connect((err) => {
  if (err) throw err;
  else console.log("Database Connected successfully");
});

app.get("/items", (req, res) => {});
