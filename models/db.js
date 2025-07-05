const mongoose = require("mongoose");

//connected mongoose database
mongoose.connect(process.env.MONGOURL, (err)=>{
    if(!err){
        console.log("Database Connected Sucessfully.")
    }else{
        console.log("Database connection fail:" + JSON.stringify(err,undefined,2));
    }
});

require('./employeeModel');
