const express = require("express");
const app = express();
const port = 3600;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./AdminDB");
// const adminroutes = require("./Admin-Auth/Admin-Routes");
const adminstationaryroutes = require("./AdminStationary/Admin.Stationary.Routes");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

// app.use("/admin", adminroutes);
app.use("/admin", adminstationaryroutes);

app.use("/uploads", express.static("uploads"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
