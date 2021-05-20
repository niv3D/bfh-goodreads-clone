const jwt = require('jsonwebtoken');

const checkAuth = (req,res,next)=>{
    try {

        const token = req.get('Authorization').split(' ')[1];    
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decoded;
    
        next();
    } catch (error) {
        return res.status(401).json({
            messege: 'Auth failed'
        })
    }
}

module.exports = checkAuth;