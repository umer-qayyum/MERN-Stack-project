const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).json({ message: "home page" });
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "user already exist" });
    }
    const userCreated = await User.create({ name, email, phone, password });
    res.status(201).json({
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
    console.log(userCreated);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(400).json({ message: "user not exist" });
    }

    const user = await userExist.comparePswd(password);
    if (user) {
      res.status(201).json({
        message: "login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: "invalid credentials" });
  }
};
//user info
const user = (req, res) => {
  try {
    const userData = req.user;
    console.log("userData", userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error is ${error}`);
  }
};

module.exports = { home, register, login, user };
