const express = require("express");
const router = express.Router();
const printerController = require(`${__dirname}/../controllers/printerController.js`);

router.param("/:id", printerController.checkID);

router.route("/").get(printerController.getAllPrinter);

module.exports = router;
