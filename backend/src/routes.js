const router = require("express").Router();


router.get('/',(req,res)=>{
    res.end('working');
});


const register = require("./register");

router.post('/register',register);


module.exports = router;