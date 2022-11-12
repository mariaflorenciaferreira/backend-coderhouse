const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name:String,
    adress:String,
    edad:String,
    phone:String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
