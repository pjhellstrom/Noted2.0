const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(400).json({ msg: "Missing token" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
};
