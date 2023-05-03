const mongoose = require('mongoose')

const ClothesSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
	category : {
        type : String,
        required : true
    },
    material : {
        type : String,
        required : true
    },
    color : {
        type : String,
        required : true
    },
    donator : {
        type : String,
        required : true
    },
    donator_phone : {
        type : String,
        required : true
    },
})

const Clothes = mongoose.model('DonatedClothes', ClothesSchema)

module.exports = Clothes