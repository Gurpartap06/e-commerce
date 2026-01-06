const mongoose = require("mongoose")

const ProductApiScheme =  mongoose.Schema({

brand :{
    type : String,
    required :  false
},

description :{
    type : String,
    required :  false
},
price :{
    type : String,
    required :  false
},
oldPrice :{
    type : String,
    required : false
},

avatar:{
type: String,
default: "",
required: false

},


});

const ProductApi =  mongoose.model("ProductApi", ProductApiScheme)

module.exports = ProductApi

