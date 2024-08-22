const getToken = (req) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.spli(" ")[1];

    return token;
}

module.exports = getToken