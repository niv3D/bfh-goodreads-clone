const users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  await users.findOne({ username: req.body.username }).then((user) => {
    if (!user) return res.json({ status: false });

    bcrypt.compare(req.body.password, user.password, async (err, result) => {
      if (err) return res.json({ status: false });
      if (!result) return res.json({ status: false });
      const token = jwt.sign(
        {
          user_id: user._id.toString(),
          username: user.username.toString(),
        },
        process.env.JWT_KEY,
        { expiresIn: "7d" }
      );
      if (result) return res.json({ token: token, satus: true });
    });
  });
};

module.exports = login;
