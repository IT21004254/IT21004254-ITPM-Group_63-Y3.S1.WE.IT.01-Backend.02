const express = require("express");
const adminstationary = require("./Admin.Stationary.Controller");
const router = express.Router();
const upload = require("../AdminStationary/Middleware/upload");

router.post(
  "/createstationary",
  upload.single("productimage"),
  adminstationary.create
);
router.get("/getAllstationary", adminstationary.getAll);
router.get("/getstationarybyid/:id", adminstationary.getone);
router.put("/updatestationary/:id", adminstationary.updateSingle);
router.delete("/deletetationarybyid/:id", adminstationary.deleteSingle);

module.exports = router;
