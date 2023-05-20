const express = require("express");
const donerstationary = require("./Doner.Stationary.Controller");
const router = express.Router();

router.post("/createstationary", donerstationary.create);
router.get("/getAllstationary", donerstationary.getAll);
router.get("/getstationarybyid/:id", donerstationary.getone);
router.put("/updatestationary/:id", donerstationary.updateSingle);
router.delete("/deletetationarybyid/:id", donerstationary.deleteSingle);

module.exports = router;
