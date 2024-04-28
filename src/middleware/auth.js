const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        var token = req.header('Authorization').replace('Bearer ', '');
        if(!token) return res.status(401).json({msg:'Authorization denied'});
        const decoded = jwt.verify(token, Buffer.from(process.env.JWT_SECRET, 'base64').toString());
        req.id = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({msg:'Authorization denied'});
    }
};

module.exports = auth;