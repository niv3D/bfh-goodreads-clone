const users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { NativeDate } = require("mongoose");

const login = async (req, res) => {
  await users.findOne({ username: req.body.username }).then((user) => {
    if (!user) return res.status(401).json({ messege: "Auth failed" });

    bcrypt.compare(req.body.password, user.password, async (err, result) => {
      if (err) return res.status(401).json({ messege: "Auth failed" });

      const token = jwt.sign(
        {
          user_id: user._id.toString(),
          username: user.username.toString(),
        },
        process.env.JWT_KEY,
        { expiresIn: "7d" }
      );

    });
    return res.json({token: token});
  });
};

module.exports = login;

