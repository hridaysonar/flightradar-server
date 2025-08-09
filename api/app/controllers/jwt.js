require("dotenv").config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY;

const jwtToken = async (req, res) => {
const user = req.body;
console.log(user);
const token = jwt.sign({user}, secret, {expiresIn: '2d'});
console.log(token);
res.send({token});
}

module.exports = {
  jwtToken,
}

