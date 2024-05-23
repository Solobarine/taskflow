const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class UserController {
  async login(req, res) {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !user.verifyPassword(password)) {
        return res.status(401).json({ message: "Invalid Email or Password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      return res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async register(req, res) {
    try {
      console.log(req.body);
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 15);
      if (await User.exists({ email })) {
        return res
          .status(409)
          .json({ message: "User with Email Already exists" });
      }
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      console.log(user);
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      return res
        .status(201)
        .json({ message: "Registered Successfully", token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: `Internal Server Error` });
    }
  }
  async user(req, res) {
    const user = await User.findById(req.user.id);
    try {
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
