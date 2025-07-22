const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

exports.generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};
