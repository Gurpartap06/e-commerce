const mongoose = require("mongoose")

const ProductApiScheme =  mongoose.Schema({

brand :{
    type : String,
    required :  true
},

description :{
    type : String,
    required :  true
},
price :{
    type : String,
    required :  true
},
oldPrice :{
    type : String,
    required : true
},

avatar:{
type: String,
default: "",
required: false

},


});

const ProductApi =  mongoose.model("ProductApi", ProductApiScheme)

module.exports = ProductApi

