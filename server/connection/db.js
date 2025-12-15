const mongoose = require("mongoose")


const  dbConnection = () =>{


    const db = mongoose.connect("mongodb://localhost:27017/myyourDatabase")

    db.then(()=>{
        console.log("db is connected")
    })

    db.catch(()=>{
        console.log("db is not connected")
    })

}
module.exports = dbConnection;



