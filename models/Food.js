const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    foodType : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
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
    address : {
        type : String,
        required : true
    }
})

const Food = mongoose.model('DonatedFood',FoodSchema)

module.exports = Food