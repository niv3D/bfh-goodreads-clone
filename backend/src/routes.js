const register = require("./register");

const router = require("express").Router();

router.get('/',(req,res)=>{
    res.end('working');
});
router.post('/register',register)
module.exports = router;