const { validateToken } = require('../services/authentication');
const cookieParser = require('cookie-parser');

function checkForauthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokencookieVlaue = req.cookies[cookieName];
        if (!tokencookieVlaue) {
            return next();
        }
        try {
            const userPayload = validateToken(tokencookieVlaue)
            req.user = userPayload;
        } catch (error) {
        }
        return next();
    }
}
module.exports = {
    checkForauthenticationCookie,
}
