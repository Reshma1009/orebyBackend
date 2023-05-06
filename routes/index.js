const express = require("express");

const router = express.Router();
const apiRoutes= require("./api")
const api = process.env.BASE_URL;
router.use(api, apiRoutes); // all route generante this use
router.use(api, (req, res) => res.send({ error: "no api found" })); // if no route match or worng link then give me error

module.exports = router;
