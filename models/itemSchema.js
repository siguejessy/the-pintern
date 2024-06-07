const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  subCategory: [{type: Schema.Types.ObjectId, ref: 'SubCategory'}],
  price: { type: String, required: true },
  color_variants: [{ type: String }],
  photo_cover: { type: String },
  photo_1: { type: String },
  photo_2: { type: String },
  description: String,
  materials: String,
  dimensions: String,
}, {
  timestamps: true
});

module.exports = itemSchema;