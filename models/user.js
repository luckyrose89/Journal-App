const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema();

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

userSchema.plugin(uniqueValidator);

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

module.exports = mongoose.model("User", userSchema);
