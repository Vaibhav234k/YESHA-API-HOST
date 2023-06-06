const mysql = require("mysql");
const fs = require("fs");
const con = mysql.createConnection({
  host: "freightbooks.mysql.database.azure.com",
  user: "Rajesh123",
  password: "Yesha@123",
  port: "3306",
  database: "freightbk01",
  ssl: { ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem") },
});
con.connect((err) => {
  if (err) {
    throw err;
  }
});
module.exports = con;
