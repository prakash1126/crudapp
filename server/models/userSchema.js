const mongoose= require('mongoose');
//creating schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    }
})
const user= new mongoose.model("user",userSchema);

module.exports= user;
