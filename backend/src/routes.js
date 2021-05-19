const router = require("express").Router();


router.get('/',(req,res)=>{
    res.end('working');
});


const register = require('./client/register');

router.post('/register',register);

const login = require('./client/login');

router.post('/login',login);


module.exports = router;