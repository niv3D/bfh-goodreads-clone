const router = require("express").Router();


router.get('/',(req,res)=>{
    res.end('working');
});


const register = require('./register');

router.post('/register',register);

const login = require('./login');

router.post('/login',login);


module.exports = router;