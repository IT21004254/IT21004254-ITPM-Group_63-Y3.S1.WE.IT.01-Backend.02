// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    getAllClothes,
    getSpecificCloth,
    postCreateCloth,
    putUpdateCloth,
    deleteCloth,
} = require("../controllers/ClothController");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllClothes);

router.get("/:id", getSpecificCloth);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateCloth);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateCloth);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteCloth);

module.exports = router;