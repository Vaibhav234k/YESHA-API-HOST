const express = require("express");
const app = express();
const con = require("./config");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/loginpage.html");
});
app.get("/LRs", (req, res) => {
  con.query("select * from lrs", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/accounts", (req, res) => {
  con.query("select * from accounts", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/std", (req, res) => {
  con.query("select * from mst_std", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/section", (req, res) => {
  con.query("select * from mst_section", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/busno", (req, res) => {
  con.query("select * from mst_busno", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/user", (req, res) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = app;
