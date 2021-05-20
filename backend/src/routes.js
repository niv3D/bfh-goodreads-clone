const router = require("express").Router();
const checkAuth = require("./client/checkAuth");

router.get('/',(req,res)=>{
    res.end('working');
});


const register = require('./client/register');
router.post('/register',register);


const login = require('./client/login');
router.post('/login',login);


const addbook = require('./client/addbook');
router.post('/addbook',checkAuth,addbook);


module.exports = router;