const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/registation.js");
const registationControler = require( "../../controler/authControler/resgistationControler.js" );
const emailVerificationControler = require( "../../controler/authControler/emailverificationCntroler.js" );
router.post("/registation", registationControler);
router.get("/registation", function (req, res) {
  res.send("ami registatin");
});

router.post("/emailverfication", emailVerificationControler);
router.get("/emailverfication", function (req, res) {
  res.send("ami emailverfication");
});
module.exports = router;
