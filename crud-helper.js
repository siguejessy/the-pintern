// connect to database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Category = require('./models/category');
const SubCategory = require('./models/subCategory');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, subCategory, order;
let users, items, categories, subCategories, orders;