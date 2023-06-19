const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "drmuuguu",
  database: "dompdb",
});

connection.connect();

app.get("/test", (req, res) => {
  console.log(req.query.search);
  connection.query(
    `SELECT * from dompdata WHERE latinName="${req.query.search}"`,
    (err, rows, fields) => {
      if (err) throw err;

      console.log(rows[0]);
      res.send(rows[0]);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
