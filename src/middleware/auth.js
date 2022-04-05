const jwt = require("jsonwebtoken");
const config = process.env;

const auth = { verifyToken };

function verifyToken(req, res) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      status: "error",
      message: "A token is required for authentication",
    });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ status: "error", message: "Invalid Token" });
  }
  return req.user;
}

module.exports = auth;
