const mongoose = require('mongoose');
const { string } = require('yargs');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    nombreCompleto:String,
    direccion:String,
    edad:String,
    telefono:String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
