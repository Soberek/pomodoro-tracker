const path = require("path");

const express = require("express");

const router = express.Router();

const trackerController = require("../controllers/main");
// Time tracker
//

router.get("/", trackerController.postTrackerTime);

module.exports = router;
