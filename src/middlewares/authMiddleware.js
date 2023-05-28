const jwt = require('../lib/jsonWebToken');
const config = require('../config/config');
const { decode } = require('jsonwebtoken');


exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];
    if (token) {
        //private user
        try {
            const decodedToken = await jwt.verify(token, config.SECRET);
            req.user = decodedToken;
            req.isAuthenticated = true;

        } catch (err) {
            console.log(err.message);

            res.clearCookie('atuh');
            return res.redirect('/404');
        }
    }
    next();
};

exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/login');

    }
    next();
}