const jwt = require('jsonwebtoken');

// Sample secret key (not recommended for production)
const secretKey = 'mysecretkey';

// Middleware function for token verification
const verifyToken = (req, res, next) => {
  // Extract token from request headers
  const token = req.headers.authorization;

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    // If token is valid, attach decoded user information to request object
    req.user = decoded;
    next(); // Pass control to the next middleware
  });
};

module.exports = verifyToken;
