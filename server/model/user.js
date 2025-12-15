
const mongoose = require("mongoose")

const UserScheme = mongoose.Schema({

name:{
    type: String,
    required: false
},
email:{
 type: String,
 required: false
},
phone:{
     type: String,
 required: false
},
country:{
     type: String,
 required: false
},
username:{
    type: String,
    required:true 
},
password:{
    type: String,
    required: true

},
avatar:{
type: String,
default: "",
required: false

},

avatarVideo:{
  type:  String,
  default :"",
  required: false
},

isLogout:{
    type: Boolean,
    required : false,
    default : false
}

});

const User = mongoose.model("User", UserScheme)
module.exports = User;


