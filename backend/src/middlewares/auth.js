const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized Request. No token provided." });
  }

  try {
    const decodedJwt = jwt.decode(token, process.env.JWT_SECRET);
    req.user = decodedJwt;
    next();
  } catch (error) {
    res.status(400).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = jwtAuth;
