const express = require("express");
const User = require("../models/auth");
const router = express.Router();
const jwt = require("jsonwebtoken");

const maxAge = 60 * 60 * 24 * 3;

const createToken = (id) => {
  return jwt.sign({ id }, "mern stack", {
    expiresIn: maxAge,
  });
};

const handleError = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "Incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "Incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = handleError(error);
    console.log(error.message);
    res.status(400).json({ errors });
  }
});

module.exports = router;
