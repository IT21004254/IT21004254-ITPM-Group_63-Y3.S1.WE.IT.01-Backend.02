var mongoose = require("mongoose");

var stationaryschema = new mongoose.Schema({
  productno: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  productdescription: {
    type: String,
    required: true,
  },

  productimage: {
    type: String,
    // required: true,
  },
});

module.exports = new mongoose.model("Stationary", stationaryschema);
