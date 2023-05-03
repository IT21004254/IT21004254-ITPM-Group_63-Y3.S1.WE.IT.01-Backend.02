// controllers/todo.js
const Food = require("../models/Food");

exports.getAllFoods = (req, res) => {
    Food.find()
        .then((food) => res.json(food))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Food not found", error: err.message })
        );
};

exports.getSpecificFood = (req, res) =>{
    Food.findById(req.params.id)
        .then((food) => res.json(food))
        .catch((err) =>{
            res
                .status(404)
                .json({message: "Food not found", error: err.message})
        })
}

exports.postCreateFood = (req, res) => {
    Food.create(req.body)
        .then((data) => res.json({ message: "Food added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add food", error: err.message })
        );
};

exports.putUpdateFood = (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update food", error: err.message })
        );
};

exports.deleteFood = (req, res) => {
    Food.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "food deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "food not found", error: err.message })
        );
};