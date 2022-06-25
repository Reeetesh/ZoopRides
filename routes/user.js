const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrpyt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrpyt.genSalt(10);
    const hashedPass = await bcrpyt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const validate = await bcrpyt.compare(req.body.password, user.password);
      if (validate) {
        res.send(user);
      } else {
        return res.status(400).json(error);
      }
    } else {
      return res.status(400).json(error);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
