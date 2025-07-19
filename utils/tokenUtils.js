const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require("../config/env");

exports.generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};
