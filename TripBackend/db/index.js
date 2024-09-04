const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:adminpass@cluster0.esjcvar.mongodb.net/TripDataBase');
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
})
const User=mongoose.model('trip',UserSchema);
module.exports={
    User
};