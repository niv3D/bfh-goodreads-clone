const users = require("../models/users");

const isAuthed = async (req, res) => {
  const user_id = req.userData.user_id;
  const loggedUser = await users.findById(user_id);
  if (!loggedUser) {
    return res.json({
      status: false,
      auth_status: false,
      message: "User Doesnt Exists",
    });
  } else {
    return res.json({
      status: true,
      auth_status: true,
    });
  }
};
module.exports = isAuthed;
