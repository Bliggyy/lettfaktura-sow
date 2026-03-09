const jwt = require("jsonwebtoken");
const blacklistedTokens = require("../middleware/blacklistedTokens");
require("dotenv").config();

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET_KEY || "secret-key-9582-!!#$%";
  const expiry = process.env.JWT_DEFAULT_EXPIRY || "9h";

  return jwt.sign(payload, secret, { expiresIn: expiry });
};

const login = (req, res, next) => {
  const body = req.body;

  if (body.username !== "admin" || body.password !== "password") {
    return res.status(400).json({
      status: "Failed",
      message: "Incorrect username and/or password",
    });
  }

  const token = generateToken({
    id: body.username,
  });

  return res.status(200).json({
    token: token,
  });
};

const logout = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    blacklistedTokens.add(token);
  }
  res.json({ message: "Logged out successfully" });
};

module.exports = { login, logout };
