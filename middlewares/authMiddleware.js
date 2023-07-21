const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
const env = require('dotenv').config().parsed

const secretKey = env.SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Token badformatted' });
  }

  try {
    const payload = jwt.verify(token, secretKey);

    const admin = await Admin.findByPk(payload.id);

    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
