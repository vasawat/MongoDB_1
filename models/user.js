require('dotenv').config()
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    updated: { type: Date, default: Date.now}
});


secrets = process.env.SECRETS;

userSchema.plugin(encrypt, {secret: secrets, encryptedFields: ["password"]});

module.exports = mongoose.model('user', userSchema);