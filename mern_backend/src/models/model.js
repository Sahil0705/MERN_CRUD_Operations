const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name:String,
        username:String,
        email:String,
        phone:Number
    }
);

const userData = new mongoose.model("userData",userSchema);

module.exports = userData;