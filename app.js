const express = require("express");
const app = express();
const con = require("./config");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/loginpage.html");
});
app.get("/student_details", (req, res) => {
  con.query("select * from mst_student_details", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/all", (req, res) => {
  con.query(
    "select * from mst_student_details stu LEFT JOIN mst_std std ON std.std_id=stu.standard_id LEFT JOIN mst_section sec ON sec.section_id=stu.section_id LEFT JOIN companies ON companies.company_id=stu.student_company_id",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
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
