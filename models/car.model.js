const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true},
});

module.exports = mongoose.model("car",carSchema);