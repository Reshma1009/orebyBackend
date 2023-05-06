const express = require("express");
const dbConnect = require("./confige/dbConnection");
const app = express();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const routes = require("./routes");
dbConnect();

const User = require("./models/registation.js");
const emailValidation = require("./helpers/emailValidation");
const emailVerification = require("./helpers/emailVerification");
const emailTemplate = require("./helpers/emailTemplate");
const tokenGenarate = require("./helpers/token");

app.use(express.json());
app.use(routes);


app.listen(8000, function () {
  console.log("server is running");
});
