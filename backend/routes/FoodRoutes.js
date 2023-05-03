// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    getAllFoods,
    getSpecificFood,
    postCreateFood,
    putUpdateFood,
    deleteFood,
} = require("../controllers/FoodController");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllFoods);

router.get("/:id", getSpecificFood);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateFood);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateFood);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteFood);

module.exports = router;