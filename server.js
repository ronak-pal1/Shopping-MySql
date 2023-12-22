import { createConnection } from "mysql";
import express from "express";
import "dotenv/config";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3000, () => {
  console.log("server is listening to port 3000...");
});

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

app.get("/items", (req, res) => {
  const category = req.query.category;

  database.query("use ecommarce;", (err, response) => {
    if (err) throw err;

    console.log("database changed");
  });

  database.query(
    `select * from items where category = '${category}';`,
    (err, response) => {
      if (err) throw err;

      console.log("got the mysql data");
      res.send(response);
    }
  );
});
