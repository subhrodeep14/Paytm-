const jwt =require('jsonwebtoken');
const {jwtSecret}=require('./secrets.js');


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({});
    }
    const token = authHeader;

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({});
    }
}

module.exports = {
    authMiddleware
}