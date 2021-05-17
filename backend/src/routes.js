const router = require("express").Router();

router.get("/",async(req,res)=>{
    return res.json({
        name:"Data"
    });
})

module.exports = router;

