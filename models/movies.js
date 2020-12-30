const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    upvotes : Number,
    name : String,
    rating : Number,
    year: Number,
    genre : String,
    trailer: String,
    cast: Array,
},{timestamps : true})

module.exports = mongoose.model("movies",movieSchema)