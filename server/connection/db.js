const mongoose = require("mongoose")


const  dbConnection = () =>{


    // const db = mongoose.connect(Process.env.MONGO_URL)
    const db = mongoose.connect(process.env.MONGO_URL)


    db.then(()=>{
        console.log("db is connected")
    })

    db.catch(()=>{
        console.log("db is not connected")
    })

}
module.exports = dbConnection;



