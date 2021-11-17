const msg= require("mongoose");
const userSchema = new msg.Schema({
    name:String,
    lastname:String,
    badge:Number
});

msg.model("User",userSchema);

