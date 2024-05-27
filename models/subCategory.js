const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number,
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
  timestamps: true
});

module.exports = mongoose.model('SubCategory', subCategorySchema);