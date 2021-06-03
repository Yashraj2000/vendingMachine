const mongoose = require("mongoose");
const passportlocalmongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username:{type:String,required:true,unique:true},
},{timestamps:true});

userSchema.plugin(passportlocalmongoose);  
module.exports = mongoose.model("User",userSchema);