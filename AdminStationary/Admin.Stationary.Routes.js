const express = require("express");
const adminstationary = require("./Admin.Stationary.Controller");
const router = express.Router();
// const upload = require("../AdminStationary/Middleware/upload");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads"); // Path to store the uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});
const upload = multer({ storage: storage });

router.post(
  "/createstationary",
  upload.single("filename"),
  adminstationary.create
);
router.get("/getAllstationary", adminstationary.getAll);
router.get("/getstationarybyid/:id", adminstationary.getone);
router.put("/updatestationary/:id", adminstationary.updateSingle);
router.delete("/deletetationarybyid/:id", adminstationary.deleteSingle);

module.exports = router;
