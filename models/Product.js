const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    username: String,
    password: String,
    updated: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', productSchema);