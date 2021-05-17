const users = require("./users");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  let stringpass = req.body.password;
  if (typeof stringpass == "number") stringpass = req.body.password.toString();
  let hashedPassword = await bcrypt.hash(stringpass, 12);
  let user = new users({
    name: req.body.name,
    number: req.body.number,
    sex: req.body.sex,
    username: req.body.username,
    password: hashedPassword,
  });
  user.save(function (err, n) {
    if (err) return res.status(500).json({ error: err });
    console.log(n.username + " saved");
  });

  res.status(200).json({ status: "Success! I think" });
};

module.exports = register;