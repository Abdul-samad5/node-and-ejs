const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String},
    postcode: { type: Number },
    sector: { type: String },    
    email: { type: String, unique: true },
    password: { type: String }
})
const User = mongoose.model("user", userSchema)
module.exports = User