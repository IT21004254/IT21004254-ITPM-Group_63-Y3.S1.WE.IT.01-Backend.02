// controllers/todo.js
const Cloth = require("../models/Cloth");

exports.getAllClothes = (req, res) => {
    Cloth.find()
        .then((cloth) => res.json(cloth))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Cloth not found", error: err.message })
        );
};

exports.getSpecificCloth = (req, res) =>{
    Cloth.findById(req.params.id)
        .then((cloth) => res.json(cloth))
        .catch((err) =>{
            res
                .status(404)
                .json({message: "Cloth not found", error: err.message})
        })
}

exports.postCreateCloth = (req, res) => {
    Cloth.create(req.body)
        .then((data) => res.json({ message: "Cloth added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add cloth", error: err.message })
        );
}; 
 
exports.putUpdateCloth = (req, res) => {
    Cloth.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update cloth", error: err.message })
        );
};

exports.deleteCloth = (req, res) => {
    Cloth.findByIdAndRemove(req.params.id)
        .then((data) =>
            res.json({ message: "cloth deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "cloth not found", error: err.message })
        );
};