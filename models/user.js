const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, lowercase: true, unique: true, trim: true},
  password: {type: String, required: true, minLength: 3, trim: true},
},{
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
}
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
})

module.exports = mongoose.model('User', userSchema);