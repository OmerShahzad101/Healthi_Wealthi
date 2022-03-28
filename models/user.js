const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  name: { type: String, requires: true },
  role: { type: String, requires: true },
  password: { type: String, minlength: 6, maxlength: 128 },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  isActive: { type: Boolean, default: true },
  googleAccessToken: { type: String, default: "" },

  isEmailVerified: { type: Boolean, default: true },
  createdAt: { type: Date, requires: true, default: Date.now },
  createdBY: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

usersSchema.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compareSync(password, this.password ? this.password : "");
};

module.exports = mongoose.model("user", usersSchema);



  
  //avatar: { type: String, default: "placeholder.png" },
  //parentId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  // allowWorkFlow: { type: Boolean, default: true },
  // allowTemplate: { type: Boolean, default: true },
  // allowDocument: { type: Boolean, default: true },
  // allowUser: { type: Boolean, default: true },
  // allowCompany: { type: Boolean, default: true },