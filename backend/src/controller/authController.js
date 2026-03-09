const jwt = require("jsonwebtoken");
const blacklistedTokens = require("../middleware/blacklistedTokens");
require("dotenv").config();

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET_KEY || "secret-key-9582-!!#$%";
  const expiry = process.env.JWT_DEFAULT_EXPIRY || "9h";

  return jwt.sign(payload, secret, { expiresIn: expiry });
};

const login = (req, res, next) => {
  try {
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
      status: "Success",
      message: "User has successfully logged in",
      token: token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to login user", error: err.message });
  }
};

const logout = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      blacklistedTokens.add(token);
    }
    res.json({ status: "Success", message: "Logged out successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to logout user", error: err.message });
  }
};

module.exports = { login, logout };
