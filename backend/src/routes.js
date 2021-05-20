const router = require("express").Router();
const checkAuth = require("./client/checkAuth");

//Public Routes .....


router.get('/',(req,res)=>{
    res.end('ella bookum ivde kittum');
});


const register = require('./client/register');
router.post('/register',register);


const login = require('./client/login');
router.post('/login',login);


//Auth Routes .....


const addbook = require('./client/addbook');
router.post('/addbook',checkAuth,addbook);


const { addReview, editReview , removeReview } = require("./client/handleReviews");

router.post("/addreview", checkAuth, addReview);
router.post("/editreview", checkAuth, editReview);
router.post("/removereview", checkAuth, removeReview);

module.exports = router;