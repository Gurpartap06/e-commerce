const mongoose = require("mongoose")

const ProductScheme = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },

    rating:{
         type:String, 
         required: false
    },

    discount:{
        type: String,
        required : false
    },

    color:{
        type : String,
        required : false 
    },

    material:{
        type: String,
        required : false
    },

    suppliername:{
        type : String,
        required : true 
    }



})

const Product = mongoose.model("Product", ProductScheme)

module.exports = Product