const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
    
    title: String,
    image: String,
    price: Number,
    discription: String,
    
})

const PRODUCT = model("product", ProductSchema)

module.exports = PRODUCT