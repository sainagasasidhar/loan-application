function checkCustomerIdExists(req, res, next) {
    const userName = req.body.username;
    const password = req.body.password;
    const customerEmail = req.body.customeremail;

    if (!userName || !password || !customerEmail) {
        return res.status(422).send('Missing required fields: userName, password, or customerEmail');
    }

    next();
}

module.exports = { checkCustomerIdExists };