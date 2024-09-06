const mongoose=require('mongoose');
const env=require('dotenv')
env.config();
mongoose.connect(process.env.db);
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
})
const User=mongoose.model('trip',UserSchema);
module.exports={
    User
};