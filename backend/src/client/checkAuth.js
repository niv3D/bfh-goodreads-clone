const jwt = require('jsonwebtoken');

const checkAuth = (req,res,next)=>{
    try {

        const token = req.get('Authorization').split(' ')[1];    
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decoded;
    
        next();
    } catch (error) {
        return res.json({
            messege: 'Auth failed',
            status: false
        })
    }
}

module.exports = checkAuth;