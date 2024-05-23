const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

/*userSchema.pre("save", async (next) => {*/
/*if (this.isModified("password") || this.isNew) {*/
/*this.password = await bcrypt.hash(this.password, 15);*/
/*}*/
/*next();*/
/*});*/

userSchema.methods.verifyPassword = (password) => {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
