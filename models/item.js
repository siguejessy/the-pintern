const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
require('./subCategory');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);