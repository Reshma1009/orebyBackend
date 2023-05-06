const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/registation.js");
const emailValidation = require("../../helpers/emailValidation");
const emailVerification = require("../../helpers/emailVerification");
const emailTemplate = require("../../helpers/emailTemplate");
const tokenGenarate = require("../../helpers/token");

async function registationControler (req, res) {
  let {
    firstName,
    lastName,
    email,
    telephone,
    addressOne,
    addressTwo,
    password,
    city,
    postCode,
    country,
    region,
  } = req.body;

  if (!firstName || !lastName) {
    return res.send({ error: "First Name && Last Name is requried" });
  }

  if (!password) {
    return res.send({ error: "Email is requried" });
  }
  if (!email) {
    return res.send({ error: "Email is requried" });
  } else {
    if (emailValidation(email)) {
      return res.send({ error: "Email is not valid" });
    }
  }
  let existingUser = await User.find({ email });
  if (existingUser.length > 0) {
    return res.send({ error: "Email exists" });
  }
  bcrypt.hash(password, 8, function (err, hash) {
    let newUser = new User({
      firstName,
      lastName,
      email,
      telephone,
      addressOne,
      addressTwo,
      city,
      postCode,
      country,
      region,
      password: hash,
    });
    newUser.save();
    let tToken = tokenGenarate(newUser.email);
    // console.log("tToken", tToken);
    emailVerification(newUser.email, emailTemplate(tToken));
    res.send(newUser);
  });
}

module.exports = registationControler;