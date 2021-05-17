const router = require("express").Router();

router.get('/',(req,res)=>{
    res.end('working');
})

module.exports = router;