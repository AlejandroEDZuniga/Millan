const express = require("express");
const wines = require("./wines");
const auth = require("./auth");
const admin = require("./admin");
const router = express.Router();


router.use("/auth", auth);
router.use("/admin", admin);
router.use("/wines", wines);


module.exports = router;