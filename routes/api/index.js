const express = require("express");
const router = express.Router();
const authin = require("./auth.js")

router.use(authin); // this one my practice
router.use("/auth",authin); // this one sir given me
module.exports = router;
