const users = require("./users");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  await users.findOne({ username: req.body.username })
  .then(user => {
    if(!user) return res.status(401).json({ messege: "Auth failed" });

    bcrypt.compare(req.body.password, user.password, (err,result)=>{
        if(err) return res.status(401).json({ messege: "Auth failed" });
        
    })
  })
};

module.exports = login;
