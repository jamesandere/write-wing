const jwt = require('jsonwebtoken');

const genAuthToken = (user) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 
    secretKey
    );

    return token;
}

module.exports = genAuthToken;